import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, QrCode, Settings, CreditCard, PiggyBank, Heart, Home, Coins, Trophy, ShoppingCart } from 'lucide-react';
import { currentUser, partners } from '../services/data';
import PartnerCard from '../components/PartnerCard';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  // Force re-render to ensure favorites are up to date when navigating back
  const [favorites, setFavorites] = useState(partners.filter(p => p.isFavorite));

  useEffect(() => {
      setFavorites(partners.filter(p => p.isFavorite));
  }, []);

  const progressPercentage = Math.min(100, Math.floor((currentUser.xp / currentUser.nextLevelXp) * 100));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-24 transition-colors duration-300">
      <div className="relative h-56 bg-gradient-to-r from-salesiano-red to-pink-900">
         <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
             <button onClick={() => navigate(-1)} className="text-white hover:bg-white/10 p-2 -ml-2 rounded-full transition"><ArrowLeft size={24} /></button>
             <Link to="/" className="text-white hover:bg-white/10 p-2 rounded-full transition">
                <Home size={24} />
             </Link>
         </div>
         
         {/* Gamification Level Info */}
         <div className="absolute bottom-20 left-6 right-6 flex justify-between items-end text-white">
            <div>
                 <div className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Nível {currentUser.level}</div>
                 <div className="text-2xl font-bold flex items-center gap-2">
                    <Trophy size={20} className="text-yellow-400 fill-yellow-400" />
                    {currentUser.levelTitle}
                 </div>
            </div>
            <div className="text-right">
                <div className="text-xs opacity-80 mb-1">XP {currentUser.xp} / {currentUser.nextLevelXp}</div>
            </div>
         </div>

         {/* XP Progress Bar */}
         <div className="absolute bottom-16 left-6 right-6 h-2 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
             <div 
                className="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
             ></div>
         </div>
      </div>
      
      <div className="px-6 -mt-12 text-center relative z-10">
        <div className="inline-block p-1 bg-white dark:bg-slate-900 rounded-full shadow-lg transition-colors">
            <img src={currentUser.avatarUrl} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-900" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{currentUser.name}</h2>
        <p className="text-sm text-slate-500 dark:text-gray-400">{currentUser.grade}</p>
        <div className="mt-1 inline-block bg-slate-100 dark:bg-slate-800 px-3 py-0.5 rounded-full text-[10px] font-mono text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-slate-700">ID: {currentUser.studentId}</div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center gap-2">
             <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <PiggyBank size={20} />
             </div>
             <div className="text-center">
                <span className="block text-lg font-bold text-slate-900 dark:text-white">{currentUser.totalSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wide">Economia</span>
             </div>
          </div>

          <div 
             onClick={() => navigate('/coin-store')}
             className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-yellow-400/50 transition"
          >
             <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                <Coins size={20} />
             </div>
             <div className="text-center">
                <span className="block text-lg font-bold text-slate-900 dark:text-white">{currentUser.coins}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wide">CoinZ (Ir para Loja)</span>
             </div>
          </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 px-6 space-y-3">
        <button 
            onClick={() => navigate('/coin-store')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl shadow-md hover:shadow-lg transition transform active:scale-[0.98]"
        >
            <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg text-white"><ShoppingCart size={20} /></div>
                <div className="text-left">
                    <span className="block font-bold">Loja CoinZ</span>
                    <span className="text-xs opacity-90">Troque suas moedas por prêmios</span>
                </div>
            </div>
            <ArrowLeft size={16} className="rotate-180" />
        </button>

        <button 
            onClick={() => navigate('/digital-card')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
        >
            <div className="flex items-center gap-3">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg text-salesiano-red dark:text-red-400"><QrCode size={20} /></div>
                <span className="font-medium text-slate-800 dark:text-gray-200">Minha Carteirinha Digital</span>
            </div>
        </button>
        <button 
            onClick={() => navigate('/usage-history')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
        >
            <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg text-blue-600 dark:text-blue-400"><CreditCard size={20} /></div>
                <span className="font-medium text-slate-800 dark:text-gray-200">Histórico de Uso</span>
            </div>
        </button>
        <button 
            onClick={() => navigate('/notifications/settings')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
        >
            <div className="flex items-center gap-3">
                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-gray-400"><Settings size={20} /></div>
                <span className="font-medium text-slate-800 dark:text-gray-200">Configurações</span>
            </div>
        </button>
      </div>

      {/* Favorite Partners Section */}
      <div className="px-6 mt-8 mb-6">
        <h3 className="font-bold text-slate-900 dark:text-gray-200 mb-4 text-lg">Meus Parceiros Favoritos</h3>
        {favorites.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
                {favorites.map(partner => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
            </div>
        ) : (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-slate-100 dark:bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-slate-400 dark:text-gray-500">
                    <Heart size={24} />
                </div>
                <p className="text-slate-500 dark:text-gray-400 font-medium text-sm">Você ainda não tem favoritos.</p>
                <p className="text-slate-400 dark:text-gray-600 text-xs mt-1 max-w-[200px]">Explore as categorias e clique no coração para salvar seus parceiros preferidos aqui.</p>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-4 text-salesiano-red dark:text-salesiano-light text-xs font-bold uppercase tracking-wide hover:underline"
                >
                    Explorar Parceiros
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Profile;