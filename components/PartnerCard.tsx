
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Utensils, GraduationCap, Car, ShoppingBag, Activity, Gamepad2, Briefcase, PawPrint, Baby, Share2, Heart, Ticket, Shirt, Dumbbell, Clapperboard, Timer, CheckCircle } from 'lucide-react';
import { Partner } from '../types';
import { DEFAULT_PARTNER_IMAGE, categories, toggleFavorite } from '../services/data';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const [isFavorite, setIsFavorite] = useState(partner.isFavorite || false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName || c.id === categoryName);
    const iconName = category?.icon || 'Utensils';
    const props = { size: 12, className: "stroke-[3]" };

    switch (iconName) {
      case 'MapPin': return <MapPin {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Car': return <Car {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Gamepad2': return <Gamepad2 {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'PawPrint': return <PawPrint {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'Ticket': return <Ticket {...props} />;
      case 'Shirt': return <Shirt {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Clapperboard': return <Clapperboard {...props} />;
      case 'Timer': return <Timer {...props} />;
      default: return <Utensils {...props} />;
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert('Compartilhar não implementado ainda.');
  };

  const handleFavorite = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const newState = toggleFavorite(partner.id);
      setIsFavorite(newState);
      
      // Trigger pop animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Link to={`/partner/${partner.id}`} className="block group">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-lg overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl hover:ring-1 hover:ring-red-500 dark:hover:ring-red-900 border border-slate-100 dark:border-slate-700">
        <div className="relative h-32 bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <img 
            src={partner.imageUrl || DEFAULT_PARTNER_IMAGE} 
            alt={partner.name}
            onError={(e) => { e.currentTarget.src = DEFAULT_PARTNER_IMAGE; }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-100 dark:opacity-90"
          />
          
          {/* Actions Top */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-20">
              {/* Share Button */}
              <button 
                onClick={handleShare}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-salesiano-light shadow-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                title="Compartilhar"
              >
                <Share2 size={16} />
              </button>

              <div className="flex flex-col gap-2 items-end">
                  {/* Rating */}
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-slate-800 dark:text-gray-200">{partner.rating}</span>
                    <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium ml-1">({partner.reviewCount})</span>
                  </div>

                  {/* Favorite Button */}
                  <button 
                    onClick={handleFavorite}
                    className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                    title="Favoritar"
                  >
                    <Heart 
                        size={16} 
                        className={`transition-all duration-300 ${isFavorite ? 'fill-salesiano-light text-salesiano-light' : 'text-gray-400'} ${isAnimating ? 'animate-pop' : ''}`} 
                    />
                  </button>
              </div>
          </div>

          <div className="absolute bottom-3 left-3 z-10">
             <div className="flex items-center gap-1.5 text-white text-[10px] font-bold bg-salesiano-red/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-white/10">
               {getCategoryIcon(partner.category)}
               <span className="uppercase tracking-wide">{partner.category}</span>
             </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        <div className="p-4 relative bg-white dark:bg-slate-800 transition-colors duration-300">
          <h3 className="font-bold text-slate-800 dark:text-gray-100 truncate text-lg transition-colors group-hover:text-salesiano-light">{partner.name}</h3>
          <div className="flex items-center text-slate-500 dark:text-gray-400 text-xs mt-1 mb-3">
            <MapPin size={12} className="mr-1 text-salesiano-light" />
            <span className="truncate">{partner.address}</span>
          </div>
          
          {/* Offer Section with Tooltip */}
          <div className="relative group/tooltip">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl p-2 text-center transition-colors group-hover:bg-red-100 dark:group-hover:bg-red-900/30 cursor-help relative z-10">
              <p className="text-red-600 dark:text-red-400 font-bold text-sm">{partner.offer}</p>
              <p className="text-slate-600 dark:text-gray-400 text-[10px] leading-tight mt-0.5 truncate group-hover/tooltip:text-slate-800 dark:group-hover/tooltip:text-gray-300 transition-colors">
                {partner.offerDetails}
              </p>
            </div>

            {/* Tooltip Content */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-white dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none z-50 transform scale-95 group-hover/tooltip:scale-100 origin-bottom">
              <div className="text-[10px] font-bold text-salesiano-light uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Ticket size={12} />
                <span>Detalhes da Oferta</span>
                <CheckCircle size={12} />
              </div>
              <p className="text-xs text-slate-700 dark:text-gray-200 leading-relaxed text-center">
                {partner.offerDetails}
              </p>
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-900 border-b border-r border-slate-200 dark:border-slate-700 transform rotate-45"></div>
            </div>
          </div>
          
          {/* Category Banner - Styled as Link */}
          <div className="mt-3 flex items-center gap-1.5 w-fit">
             {React.cloneElement(getCategoryIcon(partner.category) as React.ReactElement, { size: 12, className: "text-salesiano-red dark:text-salesiano-light" })}
             <span className="text-[10px] font-bold text-salesiano-red dark:text-salesiano-light uppercase tracking-wider hover:underline cursor-pointer transition-colors">
               {partner.category}
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PartnerCard;
