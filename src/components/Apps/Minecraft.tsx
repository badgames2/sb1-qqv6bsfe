import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Minecraft() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#1f1f1f] space-y-4">
      <Gamepad2 className="w-16 h-16 text-green-500" />
      <h2 className="text-xl font-bold">Minecraft</h2>
      <p className="text-gray-400">Demo Version</p>
      <button className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
        Play Game
      </button>
    </div>
  );
}