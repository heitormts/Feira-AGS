import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, imageAlt, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full max-h-[80vh] sm:max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 sm:-top-12 sm:-right-12 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain"
          />
          <div className="p-3 sm:p-4 bg-gray-50">
            <p className="text-sm sm:text-base text-gray-700 font-medium text-center">
              {imageAlt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;