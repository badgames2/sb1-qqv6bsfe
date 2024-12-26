import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Chrome() {
  const [url, setUrl] = useState('https://www.google.com');
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center space-x-2 p-2 bg-[#2b2b2b] rounded-t-lg">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-[#3b3b3b] px-3 py-1 rounded text-sm outline-none"
        />
      </div>
      <div className="flex-1 bg-white">
        <iframe
          src={url}
          className="w-full h-full"
          title="Chrome Browser"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
}