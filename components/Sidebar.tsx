import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, User, Share2, LayoutGrid, LogOut, Bell, ShieldCheck, Handshake, Sun, Moon, Coins } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/profile', label: 'Meu Perfil', icon: User },
    { path: '/coin-rules', label: 'Regras & Diretrizes', icon: Coins }, 
    { path: '/categories', label: 'Categorias', icon: LayoutGrid },
    { path: '/notifications', label: 'Notificações', icon: Bell },
    { path: '/refer', label: 'Indique um Parceiro', icon: Share2 },
    { path: '/become-partner', label: 'Quero ser um Parceiro', icon: Handshake },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 z-[70] shadow-2xl border-r border-slate-200 dark:border-slate-800 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
             <div className={`text-sm font-black uppercase tracking-tighter leading-tight max-w-[150px] ${theme === 'dark' ? 'text-white' : 'text-salesiano-red'}`}>
                LOGO DO COLÉGIO AQUI
             </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-400">
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'bg-salesiano-red text-white shadow-md font-semibold' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-salesiano-red dark:hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Admin Link Separator */}
            <div className="my-4 border-t border-slate-200 dark:border-slate-800"></div>
            
            <Link
                to="/admin"
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-salesiano-red dark:hover:text-white transition-all duration-200"
            >
                <ShieldCheck size={20} />
                <span>Admin</span>
            </Link>

            {/* Theme Toggle */}
             <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-salesiano-red dark:hover:text-white transition-all duration-200"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
            </button>

          </nav>

          <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
            <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 w-full rounded-xl transition-colors">
              <LogOut size={20} />
              <span>Sair</span>
            </button>
            <div className="mt-4 text-xs text-center text-gray-400 dark:text-gray-600">
              Clube Salesiano v1.1.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;