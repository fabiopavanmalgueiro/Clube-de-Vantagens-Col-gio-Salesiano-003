

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  offer: string;
  offerDetails: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  address: string;
  discountCodePrefix: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  isFavorite?: boolean;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  avatarUrl: string;
  totalSavings: number;
  coins: number;
  level: number;
  xp: number;
  nextLevelXp: number;
  levelTitle: string;
  rankingPosition: number; // Global ranking position
  prizeBalance: number; // Balance for the R$ 1000 prize
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'offer' | 'system' | 'alert' | 'coin';
}

export interface NotificationPreference {
  id: string;
  label: string;
  enabled: boolean;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
  type: 'avatar' | 'voucher' | 'item';
  purchased?: boolean;
}