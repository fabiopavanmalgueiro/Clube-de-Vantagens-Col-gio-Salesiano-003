import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Home, Coins, Lock, CheckCircle, User, Utensils, Ticket, Star, FastForward, Gamepad2, Car, PiggyBank } from 'lucide-react';
import { currentUser, rewards, spendCoins } from '../services/data';

const CoinStore: React.FC = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(currentUser.coins);
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);

  const handlePurchase = (id: string, cost: number, name: string) => {
    if (purchasedItems.includes(id)) return;
    
    if (balance < cost) {
      alert("Saldo insuficiente de CoinZ! Interaja com o clube para ganhar mais.");
      return;
    }

    if (confirm(`Deseja gastar ${cost} CoinZ em "${name}"?`)) {
        if (spendCoins(cost)) {
            setBalance(currentUser.coins);
            setPurchasedItems(prev => [...prev, id]);
            alert(`Parabéns! Você adquiriu: ${name}`);
        }
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User size={24} className="text-purple-400" />;
      case 'Utensils': return <Utensils size={24} className="text-orange-400" />;
      case 'Ticket': return <Ticket size={24} className="text-blue-400" />;
      case 'Star': return <Star size={24} className="text-yellow-400" />;
      case 'FastForward': return <FastForward size={24} className="text-red-400" />;
      case 'Gamepad2': return <Gamepad2 size={24} className="text-green-400" />;
      case 'Car': return <Car size={24} className="text-slate-400" />;
      case 'PiggyBank': return <PiggyBank size={24} className="text-emerald-400" />;
      default: return <Star size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      {/* Header */}
      <div className="bg-slate-900 px-6 pt-6 pb-6 shadow-sm border-b border-slate-800 sticky top-0 z-10">
         <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-4">
                 <button onClick={() => navigate(-1)} className="text-gray-400 hover:bg-slate-800 p-2 -ml-2 rounded-full transition"><ArrowLeft /></button>
                 <h1 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                    Loja CoinZ <Coins size={20} className="fill-yellow-400" />
                 </h1>
             </div>
             <Link to="/" className="text-gray-500 hover:text-salesiano-light p-2 rounded-full hover:bg-slate-800 transition">
                <Home size={24} />
             </Link>
         </div>
         
         {/* Balance Card */}
         <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl p-4 flex items-center justify-between text-white shadow-lg">
            <div>
                <p className="text-xs opacity-90 font-medium uppercase tracking-wide">Seu Saldo</p>
                <h2 className="text-3xl font-bold mt-1">{balance} <span className="text-sm font-normal opacity-80">CoinZ</span></h2>
            </div>
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Coins size={32} className="text-white fill-white/20" />
            </div>
         </div>
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold mb-4">Itens Disponíveis</h3>
        
        <div className="grid grid-cols-1 gap-4">
            {rewards.map((item) => {
                const canAfford = balance >= item.cost;
                const isPurchased = purchasedItems.includes(item.id);

                return (
                    <div key={item.id} className={`bg-slate-900 border ${isPurchased ? 'border-green-500/30' : 'border-slate-800'} p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden`}>
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${isPurchased ? 'bg-green-500/20' : 'bg-slate-800 border border-slate-700'}`}>
                            {getIcon(item.icon)}
                        </div>
                        
                        <div className="flex-1">
                            <h4 className="text-gray-200 font-bold">{item.name}</h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">{item.description}</p>
                            
                            <div className="mt-2 flex items-center gap-2">
                                <span className={`text-sm font-bold flex items-center gap-1 ${canAfford ? 'text-yellow-400' : 'text-gray-600'}`}>
                                    <Coins size={12} className={canAfford ? "fill-yellow-400" : "fill-gray-600"} />
                                    {item.cost}
                                </span>
                            </div>
                        </div>

                        <button 
                            onClick={() => handlePurchase(item.id, item.cost, item.name)}
                            disabled={!canAfford || isPurchased}
                            className={`p-3 rounded-xl transition-all ${
                                isPurchased 
                                    ? 'bg-green-500 text-white' 
                                    : canAfford 
                                        ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-md font-bold' 
                                        : 'bg-slate-800 text-gray-600 cursor-not-allowed'
                            }`}
                        >
                            {isPurchased ? <CheckCircle size={20} /> : canAfford ? 'Comprar' : <Lock size={20} />}
                        </button>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default CoinStore;