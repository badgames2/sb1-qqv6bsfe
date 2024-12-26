import React from 'react';
import { Moon, Sun, Volume2, Wifi, Monitor } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Windows Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#323232] rounded-lg">
          <div className="flex items-center space-x-3">
            <Sun className="w-6 h-6" />
            <div>
              <h3 className="font-medium">Theme</h3>
              <p className="text-sm text-gray-400">Light/Dark mode</p>
            </div>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Toggle
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#323232] rounded-lg">
          <div className="flex items-center space-x-3">
            <Monitor className="w-6 h-6" />
            <div>
              <h3 className="font-medium">Display</h3>
              <p className="text-sm text-gray-400">Resolution and scaling</p>
            </div>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Configure
          </button>
        </div>

        {/* Add more settings sections as needed */}
      </div>
    </div>
  );
}