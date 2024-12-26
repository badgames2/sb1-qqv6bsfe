import React from 'react';
import { Search, Settings, Power, Store } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

interface StartMenuProps {
  onClose: () => void;
}

export default function StartMenu({ onClose }: StartMenuProps) {
  const { openWindow, installedApps } = useAppStore();

  const handleAppClick = (appId: string) => {
    openWindow(appId);
    onClose();
  };

  const systemApps = [
    { id: 'settings', name: 'Settings', Icon: Settings },
    { id: 'store', name: 'Store', Icon: Store },
  ];

  return (
    <div 
      className="fixed bottom-12 left-1/2 -translate-x-1/2 w-[650px] h-[600px] bg-[#202020]/95 backdrop-blur-lg rounded-t-xl p-6 text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col h-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Type to search"
            className="w-full bg-[#323232] rounded-md py-2 pl-10 pr-4 outline-none"
          />
        </div>
        
        <div className="mt-6">
          <h2 className="text-sm font-semibold mb-3">System</h2>
          <div className="grid grid-cols-6 gap-4">
            {systemApps.map(({ id, name, Icon }) => (
              <button
                key={id}
                onClick={() => handleAppClick(id)}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10"
              >
                <Icon className="w-8 h-8 mb-1 text-white" />
                <span className="text-xs">{name}</span>
              </button>
            ))}
          </div>
        </div>

        {installedApps.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-3">Installed Apps</h2>
            <div className="grid grid-cols-6 gap-4">
              {installedApps.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleAppClick(id)}
                  className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10"
                >
                  <Icon className="w-8 h-8 mb-1 text-white" />
                  <span className="text-xs">{name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <button className="flex items-center space-x-2 hover:bg-white/10 p-2 rounded-lg">
            <Power className="w-5 h-5" />
            <span>Power</span>
          </button>
        </div>
      </div>
    </div>
  );
}