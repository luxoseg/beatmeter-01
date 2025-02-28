import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWithdraw } from '../contexts/WithdrawContext';
import { WrenchIcon } from '@heroicons/react/24/outline';

export default function DevModeToggle() {
  const { devMode, toggleDevMode } = useWithdraw();
  const [showCounter, setShowCounter] = useState(false);
  const [counter, setCounter] = useState(0);
  
  // Reset counter após um tempo sem cliques
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(0);
        setShowCounter(false);
      }, 5000); // 5 segundos
      
      return () => clearTimeout(timer);
    }
  }, [counter]);
  
  const handleClick = () => {
    setCounter(prev => {
      const newCount = prev + 1;
      if (newCount === 1) {
        setShowCounter(true);
      }
      if (newCount >= 5) {
        // Ativa o modo desenvolvedor após 5 cliques rápidos
        toggleDevMode();
        setCounter(0);
        setShowCounter(false);
        return 0;
      }
      return newCount;
    });
  };
  
  return (
    <div className="fixed bottom-24 left-4 z-40">
      <div className="relative">
        {showCounter && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-8 left-0 bg-dark-card px-2 py-1 rounded-md text-xs text-dim font-mono"
          >
            {5 - counter} mais
          </motion.div>
        )}
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className={`p-2 rounded-full ${devMode ? 'bg-neon-accent text-dark' : 'bg-dark-card text-dim opacity-50'}`}
        >
          <WrenchIcon className="w-4 h-4" />
        </motion.button>
        
        {devMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -right-2 -top-2 w-3 h-3 bg-neon-accent rounded-full"
          />
        )}
      </div>
    </div>
  );
}