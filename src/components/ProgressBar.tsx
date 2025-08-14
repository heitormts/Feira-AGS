import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  total: number;
  trilhas: Array<{ id: number; title: string }>;
  onTrilhaClick: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, trilhas, onTrilhaClick }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Progresso das Trilhas</h3>
      <div className="flex flex-wrap gap-2">
        {trilhas.map((trilha, index) => (
          <button
            key={trilha.id}
            onClick={() => onTrilhaClick(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              index === current
                ? 'bg-blue-600 text-white shadow-lg'
                : index < current
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {index < current ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Circle className="w-4 h-4" />
            )}
            <span className="text-sm">{trilha.title}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progresso</span>
          <span>{current + 1} de {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;