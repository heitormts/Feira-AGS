import React from 'react';
import { BookOpen, Users } from 'lucide-react';

interface HeaderProps {
  currentTrilha: {
    id: number;
    title: string;
    color: string;
    bgColor: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentTrilha }) => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 relative">
        {/* Logo da Escola - Melhor posicionamento para mobile */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 sm:block">
          <img
            src="https://i.ibb.co/VWJPNBDs/Whats-App-Image-2025-08-23-at-15-09-02.jpg"
            alt="Logo da Escola"
            className="w-8 h-8 sm:w-16 sm:h-16 rounded-lg shadow-lg object-cover"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 pr-10 sm:pr-20">
            <div className="bg-blue-600 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-2xl font-bold text-gray-800 text-center sm:text-left leading-tight">
                Práticas de RH - Trilhas para o Sucesso
              </h1>
              <p className="text-sm sm:text-base text-gray-600 font-medium text-center sm:text-left">
                {currentTrilha.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-xl hidden sm:flex">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm sm:text-base"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;