import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BanknotesIcon, QuestionMarkCircleIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/withdraw', icon: BanknotesIcon, label: 'Saque', dataTutorial: 'withdraw-button' },
    { path: '/home', icon: HomeIcon, label: 'Início' },
    { path: '/testimonials', icon: ChatBubbleBottomCenterTextIcon, label: 'Depoimentos' },
    { path: '/faq', icon: QuestionMarkCircleIcon, label: 'Ajuda' },
  ];

  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 left-5 right-5 z-50"
    >
      <div className="container mx-auto">
        <div className="glass-panel backdrop-blur-xl rounded-2xl shadow-neo border border-dark-border/30">
          <div className="flex justify-around py-3">
            {navItems.map(({ path, icon: Icon, label, dataTutorial }) => (
              <Link 
                key={path}
                to={path}
                className={`flex flex-col items-center gap-1 px-6 py-2 ${
                  location.pathname === path 
                    ? 'nav-link active' 
                    : 'nav-link'
                }`}
                data-tutorial={dataTutorial}
              >
                <Icon className="h-6 w-6" />
                <motion.span 
                  className="text-xs font-medium font-mono"
                  animate={{ 
                    y: location.pathname === path ? 0 : 3, 
                    opacity: location.pathname === path ? 1 : 0.7,
                    textShadow: location.pathname === path ? 
                      ['0 0 5px rgba(0, 240, 255, 0.7)', '0 0 10px rgba(0, 240, 255, 0.5)', '0 0 5px rgba(0, 240, 255, 0.7)'] : 
                      'none'
                  }}
                  transition={{ duration: 2, repeat: location.pathname === path ? Infinity : 0 }}
                >
                  {label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}