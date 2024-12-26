import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import Window from '../Window/Window';
import Settings from '../Apps/Settings';
import Store from '../Apps/Store';

export default function Desktop() {
  const { activeWindows, installedApps } = useAppStore();

  const getAppComponent = (appId: string) => {
    if (appId === 'settings') return Settings;
    if (appId === 'store') return Store;
    
    const installedApp = installedApps.find(app => app.id === appId);
    return installedApp?.component;
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-4 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1920&q=80")'
      }}
    >
      {activeWindows
        .filter((window) => !window.isMinimized)
        .map((window) => {
          const AppComponent = getAppComponent(window.appId);
          if (!AppComponent) return null;

          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.appId.charAt(0).toUpperCase() + window.appId.slice(1)}
            >
              <AppComponent />
            </Window>
          );
        })}
    </div>
  );
}