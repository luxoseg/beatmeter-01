import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Step {
  title: string;
  content: string;
  action?: string;
  highlight?: string;
}

const steps: Step[] = [
  {
    title: "Bem-vindo ao SpotifyOpina! 👋",
    content: "Vamos te mostrar como ganhar dinheiro avaliando seus artistas favoritos. São apenas 4 passos simples!",
    action: "Próximo"
  },
  {
    title: "Passo 1: Veja seu Saldo 💰",
    content: "Aqui em cima você pode acompanhar seu saldo atual. Ele aumenta a cada pesquisa que você completa!",
    action: "Próximo",
    highlight: "balance-display"
  },
  {
    title: "Passo 2: Escolha um Artista 🎵",
    content: "Escolha qualquer artista da lista abaixo e clique em 'Avaliar' para começar sua primeira pesquisa. Cada avaliação tem uma recompensa diferente!",
    action: "Próximo",
    highlight: "artist-card"
  },
  {
    title: "Passo 3: Responda 3 Perguntas ✍️",
    content: "Dê sua opinião honesta sobre o artista respondendo 3 perguntas rápidas. Você receberá sua recompensa imediatamente após concluir!",
    action: "Próximo"
  },
  {
    title: "Passo 4: Complete 8 Pesquisas e Saque 🏦",
    content: "Após completar 8 pesquisas, você poderá sacar seu dinheiro clicando no botão 'Saque' no menu inferior. É rápido e fácil!",
    action: "Começar",
    highlight: "withdraw-button"
  }
];

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tutorialCompleted = localStorage.getItem('tutorial-completed');
    if (tutorialCompleted) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const highlightElement = steps[currentStep].highlight;
    if (highlightElement) {
      const element = document.querySelector(`[data-tutorial="${highlightElement}"]`);
      if (element) {
        element.classList.add('ring-4', 'ring-green-500', 'ring-opacity-50');
      }

      return () => {
        if (element) {
          element.classList.remove('ring-4', 'ring-green-500', 'ring-opacity-50');
        }
      };
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsVisible(false);
      localStorage.setItem('tutorial-completed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 left-4 right-4 z-50"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-600">
                {steps[currentStep].content}
              </p>
            </div>

            <div className="flow-step-indicator flex mb-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1 rounded-full mx-0.5 ${
                    index === currentStep 
                      ? 'bg-green-500' 
                      : index < currentStep 
                        ? 'bg-green-300' 
                        : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Passo {currentStep + 1} de {steps.length}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                {steps[currentStep].action}
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}