import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  total: number;
  trilhas: Array<{ id: number; title: string; color: string; bgColor: string; cardBg: string }>;
  onTrilhaClick: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, trilhas, onTrilhaClick }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Progresso das Trilhas</h3>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {trilhas.map((trilha, index) => (
          <button
            key={trilha.id}
            onClick={() => onTrilhaClick(index)}
            className={`flex items-center justify-center sm:justify-start gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm min-h-[40px] ${
              index === current
                ? `bg-${trilha.color}-600 text-white shadow-lg`
                : index < current
                ? `bg-${trilha.color}-100 text-${trilha.color}-700 hover:bg-${trilha.color}-200`
                : `bg-gray-100 text-gray-600 hover:bg-${trilha.color}-50`
            }`}
          >
            {index < current ? (
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            ) : (
              <Circle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            )}
            <span className="truncate text-center sm:text-left leading-tight">{trilha.title}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
          <span>Progresso</span>
          <span>{current + 1} de {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`bg-gradient-to-r from-${trilhas[current].color}-600 to-green-600 h-2 rounded-full transition-all duration-500`}
            style={{ width: `${((current + 1) / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;