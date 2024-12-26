import React from 'react';
import Desktop from './components/Desktop/Desktop';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
  return (
    <div className="h-screen overflow-hidden relative">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;