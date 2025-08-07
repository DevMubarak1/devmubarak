'use client';

import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

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
  id,
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ zIndex }}
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
          className="liquid-glass rounded-lg overflow-hidden"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm border-b border-white/20">
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
                <Minimize2 size={16} className="text-white/70 hover:text-white cursor-pointer" />
              ) : (
                <Maximize2 size={16} className="text-white/70 hover:text-white cursor-pointer" />
              )}
            </div>
          </div>

          {/* Window Content */}
          <div className="p-4 h-full overflow-auto glass-scrollbar">
            {children}
          </div>
        </Rnd>
      </motion.div>
    </AnimatePresence>
  );
} 