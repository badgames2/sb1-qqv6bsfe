import { create } from 'zustand';
import { App, WindowState } from '../types/apps';

interface AppStore {
  installedApps: App[];
  activeWindows: WindowState[];
  addApp: (app: App) => void;
  removeApp: (appId: string) => void;
  openWindow: (appId: string) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  maximizeWindow: (windowId: string) => void;
  bringToFront: (windowId: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  installedApps: [],
  activeWindows: [],
  addApp: (app) =>
    set((state) => ({
      installedApps: [...state.installedApps, app],
    })),
  removeApp: (appId) =>
    set((state) => ({
      installedApps: state.installedApps.filter((app) => app.id !== appId),
      activeWindows: state.activeWindows.filter((window) => window.appId !== appId),
    })),
  openWindow: (appId) =>
    set((state) => ({
      activeWindows: [
        ...state.activeWindows,
        {
          id: crypto.randomUUID(),
          appId,
          isMinimized: false,
          isMaximized: false,
          zIndex: Math.max(...state.activeWindows.map((w) => w.zIndex), 0) + 1,
        },
      ],
    })),
  closeWindow: (windowId) =>
    set((state) => ({
      activeWindows: state.activeWindows.filter((w) => w.id !== windowId),
    })),
  minimizeWindow: (windowId) =>
    set((state) => ({
      activeWindows: state.activeWindows.map((w) =>
        w.id === windowId ? { ...w, isMinimized: !w.isMinimized } : w
      ),
    })),
  maximizeWindow: (windowId) =>
    set((state) => ({
      activeWindows: state.activeWindows.map((w) =>
        w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    })),
  bringToFront: (windowId) =>
    set((state) => ({
      activeWindows: state.activeWindows.map((w) => ({
        ...w,
        zIndex: w.id === windowId ? Math.max(...state.activeWindows.map((w) => w.zIndex)) + 1 : w.zIndex,
      })),
    })),
}));