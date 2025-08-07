'use client';

import React, { useState } from 'react';
import Desktop from '@/components/Desktop';
import Window from '@/components/Window';
import Dock from '@/components/Dock';
import MenuBar from '@/components/MenuBar';
import HomeWindow from '@/components/windows/HomeWindow';
import AboutWindow from '@/components/windows/AboutWindow';
import ProjectsWindow from '@/components/windows/ProjectsWindow';
import ContactWindow from '@/components/windows/ContactWindow';

interface WindowState {
  id: string;
  isOpen: boolean;
  zIndex: number;
}

export default function Portfolio() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'home', isOpen: true, zIndex: 1 },
    { id: 'about', isOpen: false, zIndex: 1 },
    { id: 'projects', isOpen: false, zIndex: 1 },
    { id: 'contact', isOpen: false, zIndex: 1 },
  ]);

  const [activeApp, setActiveApp] = useState<string>('home');

  const handleAppClick = (appId: string) => {
    setWindows(prev => 
      prev.map(window => ({
        ...window,
        isOpen: window.id === appId ? true : window.isOpen,
        zIndex: window.id === appId ? Math.max(...prev.map(w => w.zIndex)) + 1 : window.zIndex
      }))
    );
    setActiveApp(appId);
  };

  const handleWindowClose = (windowId: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === windowId ? { ...window, isOpen: false } : window
      )
    );
  };

  const handleWindowMaximize = (windowId: string) => {
    // Handle maximize logic if needed
  };

  const handleWindowMinimize = (windowId: string) => {
    // Handle minimize logic if needed
  };

  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case 'home':
        return <HomeWindow />;
      case 'about':
        return <AboutWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'contact':
        return <ContactWindow />;
      default:
        return null;
    }
  };

  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case 'home':
        return 'Welcome';
      case 'about':
        return 'About Me';
      case 'projects':
        return 'Projects';
      case 'contact':
        return 'Contact';
      default:
        return 'Window';
    }
  };

  const getWindowPosition = (windowId: string) => {
    switch (windowId) {
      case 'home':
        return { x: 100, y: 100 };
      case 'about':
        return { x: 150, y: 150 };
      case 'projects':
        return { x: 200, y: 200 };
      case 'contact':
        return { x: 250, y: 250 };
      default:
        return { x: 100, y: 100 };
    }
  };

  return (
    <Desktop>
      {/* Menu Bar */}
      <MenuBar />

      {/* Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={getWindowTitle(window.id)}
          isOpen={window.isOpen}
          zIndex={window.zIndex}
          defaultPosition={getWindowPosition(window.id)}
          onClose={() => handleWindowClose(window.id)}
          onMaximize={() => handleWindowMaximize(window.id)}
          onMinimize={() => handleWindowMinimize(window.id)}
        >
          {getWindowContent(window.id)}
        </Window>
      ))}

      {/* Dock */}
      <Dock onAppClick={handleAppClick} activeApp={activeApp} />
    </Desktop>
  );
}
