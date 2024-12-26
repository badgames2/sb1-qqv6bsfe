import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Window({ id, title, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, bringToFront } = useAppStore();
  const window = useAppStore((state) => state.activeWindows.find((w) => w.id === id));

  if (!window) return null;

  const windowClass = window.isMaximized
    ? 'fixed inset-0'
    : 'absolute left-1/4 top-1/4 w-2/3 h-2/3';

  return (
    <div
      className={`${windowClass} bg-[#202020] text-white rounded-lg shadow-xl flex flex-col`}
      style={{ zIndex: window.zIndex }}
      onClick={() => bringToFront(id)}
    >
      <div className="flex items-center justify-between p-2 bg-[#323232] rounded-t-lg">
        <span className="text-sm font-medium">{title}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => minimizeWindow(id)}
            className="p-1 hover:bg-white/10 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={() => maximizeWindow(id)}
            className="p-1 hover:bg-white/10 rounded"
          >
            <Square className="w-4 h-4" />
          </button>
          <button
            onClick={() => closeWindow(id)}
            className="p-1 hover:bg-red-500 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        {children}
      </div>
    </div>
  );
}