export interface App {
  id: string;
  name: string;
  icon: any; // Lucide icon component
  description?: string;
  category: 'system' | 'productivity' | 'gaming' | 'entertainment';
  component: React.ComponentType;
}

export interface WindowState {
  id: string;
  appId: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}