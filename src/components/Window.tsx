'use client';

import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  minWidth?: number;
  minHeight?: number;
  isOpen?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  zIndex?: number;
}

export default function Window({
  title,
  children,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 400, height: 300 },
  minWidth = 300,
  minHeight = 200,
  isOpen = true,
  onClose,
  onMinimize,
  onMaximize,
  zIndex = 1
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Cursor-responsive motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [5, -5]);
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const mouseEvent = e as MouseEvent;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = mouseEvent.clientX - rect.left - centerX;
      const y = mouseEvent.clientY - rect.top - centerY;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    const windowElement = document.querySelector(`[data-window-id="${title}"]`);
    if (windowElement) {
      windowElement.addEventListener('mousemove', handleMouseMove);
      return () => windowElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, [title, mouseX, mouseY]);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize?.();
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    onMinimize?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ zIndex }}
        data-window-id={title}
      >
        <Rnd
          default={{
            x: defaultPosition.x,
            y: defaultPosition.y,
            width: isMaximized ? window.innerWidth - 40 : defaultSize.width,
            height: isMaximized ? window.innerHeight - 100 : defaultSize.height,
          }}
          minWidth={isMaximized ? window.innerWidth - 40 : minWidth}
          minHeight={isMaximized ? window.innerHeight - 100 : minHeight}
          bounds="parent"
          disableDragging={isMaximized}
          disableResizing={isMaximized}
          className="liquid-glass liquid-glass-cursor liquid-drip rounded-lg overflow-hidden"
          style={{
            transform: isMaximized 
              ? 'none' 
              : `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full">
            {/* Window Header with enhanced glass effect */}
            <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm border-b border-white/20 liquid-glass">
              <div className="flex items-center gap-2">
                <div className="window-controls">
                  <button
                    className="control-button control-close"
                    onClick={handleClose}
                    title="Close"
                  />
                  <button
                    className="control-button control-minimize"
                    onClick={handleMinimize}
                    title="Minimize"
                  />
                  <button
                    className="control-button control-maximize"
                    onClick={handleMaximize}
                    title={isMaximized ? "Restore" : "Maximize"}
                  />
                </div>
                <span className="text-sm font-medium text-white/90 ml-2">{title}</span>
              </div>
              <div className="flex items-center gap-1">
                {isMaximized ? (
                  <Minimize2 size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
                ) : (
                  <Maximize2 size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
                )}
              </div>
            </div>

            {/* Window Content with liquid glass scrollbar */}
            <div className="p-4 h-full overflow-auto glass-scrollbar">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </Rnd>
      </motion.div>
    </AnimatePresence>
  );
} 