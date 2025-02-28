import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

interface WithdrawContextType {
  checkWithdrawLimit: (amount: number) => boolean;
  isWithdrawing: boolean;
  startWithdraw: () => void;
  endWithdraw: () => void;
  completedSurveys: number;
  incrementCompletedSurveys: () => void;
  canWithdraw: () => boolean;
  devMode: boolean;
  toggleDevMode: () => void;
}

const WithdrawContext = createContext<WithdrawContextType | undefined>(undefined);

const MINIMUM_SURVEYS = 8; // Changed from 5 to 8

const WITHDRAW_LIMITS = [
  { min: 470, max: 475 },
  { min: 940, max: 950 },
  { min: 1400, max: Infinity }
];

// Chave para salvar o estado do modo de desenvolvimento no localStorage
const DEV_MODE_KEY = 'beatmeter-dev-mode';

export function WithdrawProvider({ children }: { children: ReactNode }) {
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [completedSurveys, setCompletedSurveys] = useState(0);
  const [devMode, setDevMode] = useState(false);

  // Inicializar o modo de desenvolvimento a partir do localStorage
  useEffect(() => {
    const savedDevMode = localStorage.getItem(DEV_MODE_KEY);
    if (savedDevMode === 'true') {
      setDevMode(true);
      setCompletedSurveys(8); // Definir surveys completas para 8 em modo dev
    }
  }, []);

  // Função para alternar o modo de desenvolvimento
  const toggleDevMode = () => {
    const newDevMode = !devMode;
    setDevMode(newDevMode);
    
    // Salvar a preferência no localStorage
    localStorage.setItem(DEV_MODE_KEY, newDevMode.toString());
    
    if (newDevMode) {
      setCompletedSurveys(8); // Definir surveys completas para 8 quando ativar o modo dev
      toast.success('🔧 Modo desenvolvedor ativado', { 
        icon: '🛠️',
        style: {
          background: '#1e1e2c',
          color: '#eaeaff',
          border: '1px solid #313147'
        }
      });
    } else {
      setCompletedSurveys(0); // Resetar quando desativar
      toast.success('Modo desenvolvedor desativado', {
        style: {
          background: '#1e1e2c',
          color: '#eaeaff',
          border: '1px solid #313147'
        }
      });
    }
  };

  const canWithdraw = () => {
    if (devMode) return true; // Sempre permitir saques no modo dev
    
    if (completedSurveys < MINIMUM_SURVEYS) {
      toast.error(`Complete pelo menos ${MINIMUM_SURVEYS} pesquisas para poder sacar!`);
      return false;
    }
    return true;
  };

  const checkWithdrawLimit = (earnedAmount: number) => {
    if (completedSurveys >= MINIMUM_SURVEYS) {
      const limitReached = WITHDRAW_LIMITS.some(({ min, max }) => 
        earnedAmount >= min && earnedAmount < max
      );

      if (limitReached) {
        toast.success("Você atingiu o limite diário! Faça seu saque agora.");
      }

      return limitReached;
    }
    return false;
  };

  const startWithdraw = () => {
    if (canWithdraw()) {
      setIsWithdrawing(true);
    }
  };

  const endWithdraw = () => setIsWithdrawing(false);
  
  const incrementCompletedSurveys = () => {
    if (!devMode) { // Só incrementa se não estiver em modo desenvolvedor
      setCompletedSurveys(prev => prev + 1);
    }
  };

  return (
    <WithdrawContext.Provider value={{ 
      checkWithdrawLimit, 
      isWithdrawing, 
      startWithdraw, 
      endWithdraw,
      completedSurveys,
      incrementCompletedSurveys,
      canWithdraw,
      devMode,
      toggleDevMode
    }}>
      {children}
    </WithdrawContext.Provider>
  );
}

export function useWithdraw() {
  const context = useContext(WithdrawContext);
  if (!context) {
    throw new Error('useWithdraw must be used within a WithdrawProvider');
  }
  return context;
}