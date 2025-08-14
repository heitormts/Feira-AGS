import React from 'react';
import { BookOpen, Users } from 'lucide-react';

interface HeaderProps {
  currentTrilha: {
    id: number;
    title: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentTrilha }) => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Práticas de RH - Trilhas para o Sucesso
              </h1>
              <p className="text-gray-600 font-medium">
                {currentTrilha.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Geração Z & Alpha</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;