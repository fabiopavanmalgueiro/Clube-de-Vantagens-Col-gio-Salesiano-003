
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, QrCode, Settings, CreditCard, PiggyBank, Heart, Home } from 'lucide-react';
import { currentUser, partners } from '../services/data';
import PartnerCard from '../components/PartnerCard';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  // Force re-render to ensure favorites are up to date when navigating back
  const [favorites, setFavorites] = useState(partners.filter(p => p.isFavorite));

  useEffect(() => {
      setFavorites(partners.filter(p => p.isFavorite));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-24 transition-colors duration-300">
      <div className="relative h-48 bg-gradient-to-r from-salesiano-red to-pink-900">
         <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
             <button onClick={() => navigate(-1)} className="text-white hover:bg-white/10 p-2 -ml-2 rounded-full transition"><ArrowLeft size={24} /></button>
             <Link to="/" className="text-white hover:bg-white/10 p-2 rounded-full transition">
                <Home size={24} />
             </Link>
         </div>
      </div>
      
      <div className="px-6 -mt-16 text-center relative z-10">
        <div className="inline-block p-1 bg-white dark:bg-slate-900 rounded-full shadow-lg transition-colors">
            <img src={currentUser.avatarUrl} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-900" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">{currentUser.name}</h2>
        <p className="text-slate-500 dark:text-gray-400">{currentUser.grade}</p>
        <div className="mt-2 inline-block bg-slate-100 dark:bg-slate-800 px-4 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-slate-700">ID: {currentUser.studentId}</div>
      </div>

      {/* Savings Card */}
      <div className="px-6 mt-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-sm border border-green-200 dark:border-green-500/30 p-5 flex items-center justify-between">
             <div>
               <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Você já economizou</p>
               <h3 className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-500">
                 {currentUser.totalSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
               </h3>
               <p className="text-[10px] text-emerald-700 dark:text-emerald-600 mt-1">Continue usando o app para economizar mais!</p>
             </div>
             <div className="bg-white dark:bg-slate-900 p-3 rounded-full text-emerald-500 shadow-sm border border-emerald-100 dark:border-emerald-900/20">
               <PiggyBank size={32} strokeWidth={2} />
             </div>
          </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 px-6 space-y-4">
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
