import React from 'react';

const featuredApps = [
  {
    name: 'Visual Studio Code',
    icon: '💻',
    description: 'Code editing. Redefined.',
  },
  {
    name: 'Spotify',
    icon: '🎵',
    description: 'Music for everyone.',
  },
  {
    name: 'Adobe Photoshop',
    icon: '🎨',
    description: 'Create with passion.',
  },
];

export default function AppStore() {
  return (
    <div className="bg-[#202020] text-white h-full p-6 overflow-auto">
      <h1 className="text-2xl font-semibold mb-6">Microsoft Store</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Apps</h2>
          <div className="grid grid-cols-3 gap-4">
            {featuredApps.map((app) => (
              <div key={app.name} className="bg-[#323232] p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{app.icon}</span>
                  <h3 className="font-semibold">{app.name}</h3>
                </div>
                <p className="text-sm text-gray-400">{app.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                  Get
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}