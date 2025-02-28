import { motion } from 'framer-motion';
import { BanknotesIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useStats } from '../contexts/StatsContext';

export default function Stats() {
  const { stats } = useStats();

  return (
    <div className="flex flex-row gap-6 items-center justify-center text-xs font-mono">
      <motion.div 
        className="flex items-center gap-1.5"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-2 h-2 rounded-full bg-neon-secondary"></div>
        <BanknotesIcon className="w-4 h-4 text-neon-secondary" />
        <span className="text-dim">TOTAL PAGO HOJE: <span className="text-light">R$ {stats.totalPaid.toFixed(2)}</span></span>
      </motion.div>
      <motion.div 
        className="flex items-center gap-1.5"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <div className="w-2 h-2 rounded-full bg-neon-primary"></div>
        <UsersIcon className="w-4 h-4 text-neon-primary" />
        <span className="text-dim">USUÁRIOS ONLINE: <span className="text-light">{stats.totalRecipients}</span></span>
      </motion.div>
    </div>
  );
}