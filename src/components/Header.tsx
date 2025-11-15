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
  const getHeaderColor = (color: string) => {
    switch (color) {
      case 'orange':
        return 'border-orange-500';
      case 'yellow':
        return 'border-yellow-500';
      case 'cyan':
        return 'border-cyan-500';
      case 'green':
        return 'border-green-500';
      case 'purple':
        return 'border-purple-500';
      case 'pink':
        return 'border-rose-500';
      case 'teal':
        return 'border-teal-500';
      case 'indigo':
        return 'border-indigo-500';
      default:
        return 'border-blue-500';
    }
  };

  return (
    <header className={`bg-white shadow-lg border-b-4 ${getHeaderColor(currentTrilha.color)} transition-all duration-500`}>
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="https://i.ibb.co/7NvxDgqJ/Whats-App-Image-2025-10-03-at-12-32-30-1.jpg"
              alt="Logo da Escola"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-sm sm:text-2xl font-bold text-gray-800 text-center sm:text-left leading-tight">
                Práticas de RH - Trilhas para o Sucesso
              </h1>
              <p className="text-xs sm:text-base text-gray-600 font-medium text-center sm:text-left mt-1">
                {currentTrilha.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-xl hidden lg:flex">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm sm:text-base"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;