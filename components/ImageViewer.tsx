'use client';

import { useEffect, useState } from 'react';

interface ImageViewerProps {
  imagePath: string;
  fileName: string;
  onClose: () => void;
}

export function ImageViewer({ imagePath, fileName, onClose }: ImageViewerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] bg-[#2d2d2d] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[#3c3c3c] rounded-t-lg border-b border-[#4d4d4d]">
          <div className="flex gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#fc5753] hover:bg-[#fc5753]/80 transition-colors"
            />
            <div className="w-3 h-3 rounded-full bg-[#fdbc40]" />
            <div className="w-3 h-3 rounded-full bg-[#33c748]" />
          </div>
          <span className="text-white text-sm font-mono ml-2">{fileName}</span>
        </div>

        <div className="p-4 flex items-center justify-center">
          <img
            src={imagePath}
            alt={fileName}
            className="max-w-full max-h-[80vh] object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}
