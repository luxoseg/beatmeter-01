import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBalance } from '../contexts/BalanceContext';
import { useWithdraw } from '../contexts/WithdrawContext';
import WithdrawModal from '../components/withdraw/WithdrawModal';
import { IdentificationIcon, PhoneIcon, EnvelopeIcon, QrCodeIcon } from '@heroicons/react/24/outline';

type PixKeyType = 'cpf' | 'phone' | 'email' | 'random';

export default function Withdraw() {
  const { balance } = useBalance();
  const { canWithdraw, completedSurveys, devMode } = useWithdraw();
  const [selectedMethod, setSelectedMethod] = useState<PixKeyType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pixKey, setPixKey] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState('');

  // Para usuários em modo dev, preencher automaticamente alguns campos
  useEffect(() => {
    if (devMode && !selectedMethod) {
      setSelectedMethod('random');
      setPixKey('chave-aleatoria-dev');
      setWithdrawAmount(balance.toString());
    }
  }, [devMode, balance, selectedMethod]);

  const handleSelectMethod = (method: PixKeyType) => {
    setSelectedMethod(method);
    setError('');
  };

  const handleSubmit = () => {
    if (!pixKey) {
      setError('Este campo é obrigatório');
      return;
    }
    setShowModal(true);
  };

  const getPlaceholder = () => {
    switch (selectedMethod) {
      case 'cpf': return 'Digite seu CPF';
      case 'phone': return 'Digite seu telefone';
      case 'email': return 'Digite seu email';
      case 'random': return 'Digite sua chave aleatória';
      default: return 'Selecione um método primeiro';
    }
  };

  return (
    <div className="min-h-screen bg-dark pb-24">
      <div className="max-w-md mx-auto px-4 pt-6">
        <h1 className="text-light text-2xl font-bold mb-8 text-center">Selecione o método de saque</h1>
        
        {devMode && (
          <div className="mb-6 bg-neon-accent/10 border border-neon-accent rounded-xl p-4">
            <div className="text-neon-accent font-bold text-sm mb-2 flex items-center">
              <span className="mr-2">🛠️</span>
              Modo Desenvolvedor Ativo
            </div>
            <p className="text-dim text-xs">
              O modo desenvolvedor permite testar o processo de saque sem precisar completar todas as pesquisas. Os campos foram preenchidos automaticamente para testes.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-2 transition-colors ${
              selectedMethod === 'cpf' 
                ? 'bg-neon-accent/10 border-neon-accent' 
                : 'bg-dark-surface border-dark-border/40'
            }`}
            onClick={() => handleSelectMethod('cpf')}
          >
            <IdentificationIcon className={`w-6 h-6 ${selectedMethod === 'cpf' ? 'text-neon-accent' : 'text-dim'}`} />
            <span className={`text-sm ${selectedMethod === 'cpf' ? 'text-light' : 'text-dim'}`}>CPF</span>
          </button>
          
          <button 
            className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-2 transition-colors ${
              selectedMethod === 'phone' 
                ? 'bg-neon-accent/10 border-neon-accent' 
                : 'bg-dark-surface border-dark-border/40'
            }`}
            onClick={() => handleSelectMethod('phone')}
          >
            <PhoneIcon className={`w-6 h-6 ${selectedMethod === 'phone' ? 'text-neon-accent' : 'text-dim'}`} />
            <span className={`text-sm ${selectedMethod === 'phone' ? 'text-light' : 'text-dim'}`}>Telefone</span>
          </button>
          
          <button 
            className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-2 transition-colors ${
              selectedMethod === 'email' 
                ? 'bg-neon-accent/10 border-neon-accent' 
                : 'bg-dark-surface border-dark-border/40'
            }`}
            onClick={() => handleSelectMethod('email')}
          >
            <EnvelopeIcon className={`w-6 h-6 ${selectedMethod === 'email' ? 'text-neon-accent' : 'text-dim'}`} />
            <span className={`text-sm ${selectedMethod === 'email' ? 'text-light' : 'text-dim'}`}>Email</span>
          </button>
          
          <button 
            className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-2 transition-colors ${
              selectedMethod === 'random' 
                ? 'bg-neon-accent/10 border-neon-accent' 
                : 'bg-dark-surface border-dark-border/40'
            }`}
            onClick={() => handleSelectMethod('random')}
          >
            <QrCodeIcon className={`w-6 h-6 ${selectedMethod === 'random' ? 'text-neon-accent' : 'text-dim'}`} />
            <span className={`text-sm ${selectedMethod === 'random' ? 'text-light' : 'text-dim'}`}>Chave Aleatória</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-dim mb-2">Chave PIX</label>
            <input
              type={selectedMethod === 'email' ? 'email' : 'text'}
              value={pixKey}
              onChange={(e) => {
                setPixKey(e.target.value);
                setError('');
              }}
              placeholder={getPlaceholder()}
              disabled={!selectedMethod}
              className="w-full px-4 py-3 rounded-lg bg-white text-dark-900 placeholder-gray-400 focus:outline-none"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>

          <div>
            <label className="block text-dim mb-2">Valor do saque</label>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Digite o valor"
              className="w-full px-4 py-3 rounded-lg bg-white text-dark-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!selectedMethod}
            className="w-full bg-neon-accent text-dark font-bold py-4 rounded-lg flex items-center justify-center"
          >
            Realizar Saque
          </motion.button>
        </div>
      </div>

      <WithdrawModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}