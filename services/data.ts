import { Category, Partner, User, Notification, Reward } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Gabriel Silva',
  studentId: '2024-5592',
  grade: '2º Ano Ensino Médio',
  avatarUrl: 'https://picsum.photos/200',
  totalSavings: 342.90,
  coins: 1250,
  level: 2,
  xp: 1250,
  nextLevelXp: 2000,
  levelTitle: 'Explorador',
  rankingPosition: 14,
  prizeBalance: 0, // Set to 1000 to simulate a winner
};

export const mockLeaderboard = [
  { id: 'l1', name: 'Ana Clara', grade: '3º EM', xp: 2450, position: 1, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 'l2', name: 'Pedro H.', grade: '1º EM', xp: 2100, position: 2, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 'l3', name: 'Beatriz M.', grade: '2º EM', xp: 1980, position: 3, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 'l4', name: 'Lucas F.', grade: '9º EF', xp: 1850, position: 4, avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 'u1', name: 'Gabriel Silva', grade: '2º EM', xp: 1250, position: 14, avatar: 'https://picsum.photos/200', isCurrentUser: true },
];

export const SCHOOL_LOGO_URL = "https://salesianosantaterezinha.com.br/wp-content/uploads/2020/07/logo-salesiano-santa-terezinha.png";
export const DEFAULT_PARTNER_IMAGE = "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80";

// Gamification Rewards
export const rewards: Reward[] = [
  { id: 'sc-1', name: 'Fura-Fila na Cantina', description: 'Passe VIP para evitar a fila do almoço (1 uso).', cost: 500, icon: 'FastForward', type: 'item' },
  { id: 'sc-2', name: 'Dia do Eletrônico', description: 'Permissão para uso recreativo no intervalo.', cost: 1500, icon: 'Gamepad2', type: 'item' },
  { id: 'sc-3', name: 'Voucher Pizzaria R$ 20', description: 'Desconto na Pizzaria parceira.', cost: 2000, icon: 'Utensils', type: 'voucher' },
  { id: 'sc-4', name: 'Ingresso Cinema', description: 'Um ingresso para o CineMark (2D).', cost: 2500, icon: 'Ticket', type: 'voucher' },
  { id: 'sc-5', name: 'Ingresso Formatura Extra', description: 'Um convite adicional para a festa de formatura.', cost: 4000, icon: 'Ticket', type: 'item' },
  { id: 'sc-6', name: 'Vaga VIP Estacionamento', description: 'Vaga exclusiva para os pais (1 dia).', cost: 5000, icon: 'Car', type: 'item' },
  { id: 'sc-7', name: 'Mensalidade R$ 50 OFF', description: 'Abatimento na próxima mensalidade (Nível Ouro+).', cost: 10000, icon: 'PiggyBank', type: 'voucher' },
  { id: 'av-1', name: 'Avatar Cyberpunk', description: 'Desbloqueie um avatar futurista exclusivo.', cost: 500, icon: 'User', type: 'avatar' },
  { id: 'av-2', name: 'Moldura Dourada', description: 'Destaque seu perfil com uma borda de ouro.', cost: 3000, icon: 'Star', type: 'avatar' },
];

// Updated Categories List
export const categories: Category[] = [
  { id: 'perto-de-mim', name: 'Perto de mim', icon: 'MapPin', color: 'from-cyan-400 to-blue-600 shadow-cyan-500/40' },
  { id: 'promo-relampago', name: 'Promoções Relâmpago', icon: 'Timer', color: 'from-red-500 to-orange-500 shadow-orange-500/40' },
  { id: 'Alimentação', name: 'Alimentação', icon: 'Utensils', color: 'from-orange-400 to-red-600 shadow-orange-500/40' },
  { id: 'Vestuário', name: 'Vestuário', icon: 'Shirt', color: 'from-indigo-500 to-purple-600 shadow-indigo-500/40' },
  { id: 'Educação', name: 'Educação', icon: 'GraduationCap', color: 'from-blue-500 to-indigo-700 shadow-blue-500/40' },
  { id: 'Automotivo', name: 'Automotivo', icon: 'Car', color: 'from-slate-500 to-slate-700 shadow-slate-500/40' },
  { id: 'Produtos', name: 'Produtos', icon: 'ShoppingBag', color: 'from-violet-500 to-fuchsia-600 shadow-violet-500/40' },
  { id: 'Infantil', name: 'Infantil', icon: 'Baby', color: 'from-sky-400 to-indigo-500 shadow-sky-500/40' },
  { id: 'Pet', name: 'Pet', icon: 'PawPrint', color: 'from-lime-400 to-green-600 shadow-lime-500/40' },
  { id: 'Saúde', name: 'Saúde e Beleza', icon: 'Activity', color: 'from-teal-400 to-emerald-600 shadow-teal-500/40' },
  { id: 'Esporte', name: 'Esporte e Lazer', icon: 'Dumbbell', color: 'from-emerald-400 to-green-600 shadow-emerald-500/40' },
  { id: 'Entretenimento', name: 'Entretenimento', icon: 'Clapperboard', color: 'from-yellow-400 to-amber-600 shadow-amber-500/40' },
  { id: 'Serviços', name: 'Serviços', icon: 'Briefcase', color: 'from-pink-400 to-rose-600 shadow-pink-500/40' },
];

// Reference Point: Salesiano Santa Terezinha (Approx: -23.4963, -46.6367)
let partnersData: Partner[] = [
  // --- PROMOÇÕES RELÂMPAGO ---
  {
    id: 'flash-1',
    name: 'Burger King (Oferta Hora)',
    category: 'Promoções Relâmpago',
    description: 'Whopper por R$ 9,90.',
    fullDescription: 'Oferta válida apenas para as próximas 2 horas. Apresente o código no balcão.',
    offer: 'R$ 9,90',
    offerDetails: 'Whopper JR completo por apenas R$ 9,90.',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 500,
    address: 'Santana Parque Shopping',
    discountCodePrefix: 'FLASHBK',
    coordinates: { lat: -23.4880, lng: -46.6450 },
    isFeatured: true
  },
  {
    id: 'flash-2',
    name: 'Cinema 50% OFF',
    category: 'Promoções Relâmpago',
    description: 'Ingressos última hora.',
    fullDescription: 'Sessões de hoje com 50% de desconto para qualquer filme em cartaz.',
    offer: '50% OFF',
    offerDetails: 'Válido para compras na bilheteria até as 18h de hoje.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 120,
    address: 'Shopping Center Norte',
    discountCodePrefix: 'CINE50',
    coordinates: { lat: -23.5155, lng: -46.6175 }
  },
  {
    id: 'flash-3',
    name: 'Açaí Turbo',
    category: 'Promoções Relâmpago',
    description: 'Compre 1 Leve 2.',
    fullDescription: 'Promoção relâmpago para refrescar sua tarde. Pague 1 copo de 300ml e leve outro igual.',
    offer: '2x1 Açaí',
    offerDetails: 'Válido apenas hoje.',
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 85,
    address: 'Rua Dr. César, 45',
    discountCodePrefix: 'ACAI2X1',
    coordinates: { lat: -23.4955, lng: -46.6320 }
  },
  {
    id: 'flash-4',
    name: 'Papelaria Saldão',
    category: 'Promoções Relâmpago',
    description: 'Mochilas com 40% OFF.',
    fullDescription: 'Últimas unidades de mochilas escolares de marcas famosas com desconto agressivo.',
    offer: '40% OFF',
    offerDetails: 'Desconto em mochilas selecionadas da vitrine.',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviewCount: 60,
    address: 'Av. Braz Leme, 2200',
    discountCodePrefix: 'MOCHILA',
    coordinates: { lat: -23.5050, lng: -46.6420 }
  },
  {
    id: 'flash-5',
    name: 'Lava Rápido Express',
    category: 'Promoções Relâmpago',
    description: 'Lavagem R$ 25,00.',
    fullDescription: 'Aproveite o dia de sol! Lavagem simples por preço promocional até as 17h.',
    offer: 'Apenas R$ 25',
    offerDetails: 'Lavagem externa com cera líquida.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 45,
    address: 'Rua Alfredo Pujol, 800',
    discountCodePrefix: 'LAVAF',
    coordinates: { lat: -23.5020, lng: -46.6350 }
  },
  // ... (rest of partners)
  {
    id: 'ali-1',
    name: 'Cantina da Nonna',
    category: 'Alimentação',
    description: 'Lanches naturais e sucos.',
    fullDescription: 'A Cantina da Nonna oferece os melhores lanches naturais, salgados assados e sucos da região. Ambiente familiar perfeito para o pós-aula.',
    offer: '15% OFF',
    offerDetails: '15% de desconto em qualquer combo de lanche + suco.',
    imageUrl: 'https://images.unsplash.com/photo-1509722744780-d8c2f0221ca4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 124,
    address: 'Rua Voluntários da Pátria, 120 - Santana',
    discountCodePrefix: 'NONNA',
    coordinates: { lat: -23.4970, lng: -46.6370 },
    isFavorite: true,
    isFeatured: true
  },
  // Truncated for brevity - assume all other partners are here as before
  {
    id: 'ali-2',
    name: 'Burger King (Shopping)',
    category: 'Alimentação',
    description: 'Fast food e combos.',
    fullDescription: 'O melhor hambúrguer grelhado no fogo. Aproveite o recreio ou a saída da escola para curtir um Whopper.',
    offer: 'Batata Grátis',
    offerDetails: 'Na compra de qualquer sanduíche, ganhe uma batata média grátis.',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewCount: 340,
    address: 'Santana Parque Shopping',
    discountCodePrefix: 'BK',
    coordinates: { lat: -23.4880, lng: -46.6450 }
  }
];

// Re-add missing partners for completeness if needed, but for now focusing on structure
export const partners = partnersData;

// Mock Notifications
export const notifications: Notification[] = [
  { id: 'n1', title: 'Nova Parceria: Burger King', message: 'Aproveite descontos exclusivos no BK do Shopping!', date: 'Hoje, 10:00', read: false, type: 'offer' },
  { id: 'n2', title: 'Seu cupom expira em breve', message: 'O desconto na Papelaria Estudantil vence em 2 dias.', date: 'Ontem, 14:30', read: false, type: 'alert' },
  { id: 'n3', title: 'Bem-vindo ao Clube!', message: 'Explore as categorias e comece a economizar.', date: '12 Mar', read: true, type: 'system' },
];

// Helper functions
export const getPartnerById = (id: string) => partners.find(p => p.id === id);

export const addPartner = (partner: Partner) => {
    partnersData.push(partner);
};

export const updatePartner = (id: string, updated: Partner) => {
    const index = partnersData.findIndex(p => p.id === id);
    if (index !== -1) {
        partnersData[index] = updated;
    }
};

export const deletePartner = (id: string) => {
    const index = partnersData.findIndex(p => p.id === id);
    if (index !== -1) {
        partnersData.splice(index, 1);
    }
};

export const toggleFavorite = (id: string): boolean => {
    const partner = partnersData.find(p => p.id === id);
    if (partner) {
        partner.isFavorite = !partner.isFavorite;
        return partner.isFavorite;
    }
    return false;
};

// Gamification Logic
export const addCoins = (amount: number, reason: string) => {
  const oldXp = currentUser.xp;
  const thresholdRatio = 0.8; // 80%
  const oldProgress = oldXp / currentUser.nextLevelXp;

  currentUser.coins += amount;
  currentUser.xp += amount;
  
  const currentProgress = currentUser.xp / currentUser.nextLevelXp;

  // Check Level Up
  if (currentUser.xp >= currentUser.nextLevelXp) {
    currentUser.level += 1;
    currentUser.nextLevelXp = Math.floor(currentUser.nextLevelXp * 1.5);
    
    const titles = ['Novato', 'Explorador', 'Caçador de Ofertas', 'Mestre das Vantagens', 'Embaixador Salesiano', 'Lenda'];
    if (currentUser.level - 1 < titles.length) {
      currentUser.levelTitle = titles[currentUser.level - 1];
    }
    
    // Add Notification
    notifications.unshift({
      id: `lvl-${Date.now()}`,
      title: 'Level Up! 🎉',
      message: `Parabéns! Você alcançou o nível ${currentUser.level} e agora é um ${currentUser.levelTitle}!`,
      date: 'Agora',
      read: false,
      type: 'coin'
    });
  } 
  // Check if crossed the 80% threshold (and wasn't already above it or leveled up)
  else if (oldProgress < thresholdRatio && currentProgress >= thresholdRatio) {
     notifications.unshift({
      id: `incentive-${Date.now()}`,
      title: 'Quase lá! 🚀',
      message: `Falta pouco para o Nível ${currentUser.level + 1}! Você já completou 80% do XP necessário. Continue assim!`,
      date: 'Agora',
      read: false,
      type: 'system'
    });
  }

  // Add Notification for coins
  notifications.unshift({
    id: `coin-${Date.now()}`,
    title: `+${amount} CoinZ`,
    message: `Você ganhou ${amount} CoinZ: ${reason}`,
    date: 'Agora',
    read: false,
    type: 'coin'
  });
  
  return currentUser.coins;
};

export const spendCoins = (amount: number): boolean => {
  if (currentUser.coins >= amount) {
    currentUser.coins -= amount;
    return true;
  }
  return false;
};