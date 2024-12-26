import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Chrome, Gamepad2, Music2, Video, Mail, Calendar } from 'lucide-react';
import ChromeApp from './Chrome';
import MinecraftApp from './Minecraft';

const availableApps = [
  {
    id: 'chrome',
    name: 'Chrome',
    icon: Chrome,
    description: 'Fast and secure web browser',
    category: 'productivity',
    component: ChromeApp
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    icon: Gamepad2,
    description: 'Build and explore blocky worlds',
    category: 'gaming',
    component: MinecraftApp
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: Music2,
    description: 'Music streaming platform',
    category: 'entertainment',
    component: () => <div>Spotify App</div>
  },
  {
    id: 'netflix',
    name: 'Netflix',
    icon: Video,
    description: 'Video streaming service',
    category: 'entertainment',
    component: () => <div>Netflix App</div>
  }
];

export default function Store() {
  const [activeTab, setActiveTab] = useState('apps');
  const { addApp, installedApps } = useAppStore();

  const isAppInstalled = (appId: string) => {
    return installedApps.some(app => app.id === appId);
  };

  const handleInstall = (app: any) => {
    if (!isAppInstalled(app.id)) {
      addApp({
        ...app,
        category: app.category || 'productivity'
      });
    }
  };

  const filteredApps = availableApps.filter((app) => 
    activeTab === 'apps' 
      ? app.category !== 'gaming' 
      : app.category === 'gaming'
  );

  return (
    <div className="h-full">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === 'apps' ? 'bg-blue-600' : 'bg-[#323232]'
          }`}
          onClick={() => setActiveTab('apps')}
        >
          Apps
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === 'games' ? 'bg-blue-600' : 'bg-[#323232]'
          }`}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredApps.map((app) => (
          <div key={app.id} className="bg-[#323232] p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <app.icon className="w-8 h-8" />
              <div>
                <h3 className="font-medium">{app.name}</h3>
                <p className="text-sm text-gray-400">{app.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleInstall(app)}
              className={`mt-4 w-full px-4 py-2 rounded-md transition-colors ${
                isAppInstalled(app.id)
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isAppInstalled(app.id) ? 'Installed' : 'Install'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}