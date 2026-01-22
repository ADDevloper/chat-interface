
export enum NavTab {
  StylistChat = 'Stylist Chat',
  MyWardrobe = 'My Wardrobe',
  DailyOutfits = 'Daily Outfits',
  Dashboard = 'Dashboard'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface WardrobeItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  color: string;
}
