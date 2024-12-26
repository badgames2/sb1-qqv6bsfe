import React, { useState } from 'react';
import { Menu, Search, Wifi, Volume2, Battery, MessageSquare } from 'lucide-react';
import StartMenu from './StartMenu';

export default function Taskbar() {
  const [startOpen, setStartOpen] = useState(false);
  const time = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric',
    minute: '2-digit',
    hour12: true 
  });
  
  return (
    <>
      {startOpen && <StartMenu onClose={() => setStartOpen(false)} />}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#202020]/80 backdrop-blur-lg flex items-center px-3 z-50">
        <button 
          onClick={() => setStartOpen(!startOpen)}
          className="p-2 hover:bg-white/10 rounded-md transition-colors"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
        
        <button className="p-2 mx-1 hover:bg-white/10 rounded-md transition-colors">
          <Search className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex-1" />
        
        <div className="flex items-center space-x-2 px-2">
          <Wifi className="w-4 h-4 text-white" />
          <Volume2 className="w-4 h-4 text-white" />
          <Battery className="w-4 h-4 text-white" />
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="text-white text-sm">{time}</span>
        </div>
      </div>
    </>
  );
}