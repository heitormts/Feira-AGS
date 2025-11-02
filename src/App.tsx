import React, { useState } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import HomePage from './components/pages/HomePage';
import TrilhaTestePage from './components/pages/TrilhaTestePage';
import TrilhaQualificacaoPage from './components/pages/TrilhaQualificacaoPage';
import TrilhaCurriculoPage from './components/pages/TrilhaCurriculoPage';
import TrilhaEntrevistaPage from './components/pages/TrilhaEntrevistaPage';
import TrilhaExperimentacoesPage from './components/pages/TrilhaExperimentacoesPage';
import TrilhaInclusaoPage from './components/pages/TrilhaInclusaoPage';
import TrilhaRelatos from './components/pages/TrilhaRelatos';
import TrilhaCidadaniaPage from './components/pages/TrilhaCidadaniaPage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentTrilha, setCurrentTrilha] = useState(0);

  const trilhas = [
    { 
      id: 0, 
      title: "Início", 
      color: "blue", 
      bgColor: "from-blue-50 to-cyan-50",
      cardBg: "bg-blue-50"
    },
    { 
      id: 1, 
      title: "Teste de Carreira", 
      color: "cyan", 
      bgColor: "from-cyan-50 to-blue-50",
      cardBg: "bg-cyan-50"
    },
    { 
      id: 2, 
      title: "Qualificação", 
      color: "orange", 
      bgColor: "from-orange-50 to-amber-50",
      cardBg: "bg-orange-50"
    },
    { 
      id: 3, 
      title: "Construção de Currículo", 
      color: "green", 
      bgColor: "from-green-50 to-emerald-50",
      cardBg: "bg-green-50"
    },
    { 
      id: 4, 
      title: "Entrevista para o Primeiro Emprego", 
      color: "teal", 
      bgColor: "from-teal-50 to-cyan-50",
      cardBg: "bg-teal-50"
    },
    { 
      id: 5, 
      title: "Experimentações", 
      color: "purple", 
      bgColor: "from-purple-50 to-violet-50",
      cardBg: "bg-purple-50"
    },
    { 
      id: 6, 
      title: "Inclusão", 
      color: "pink", 
      bgColor: "from-rose-50 to-pink-50",
      cardBg: "bg-rose-50"
    },
    { 
      id: 7, 
      title: "Serviço de Cidadania", 
      color: "indigo", 
      bgColor: "from-indigo-50 to-blue-50",
      cardBg: "bg-indigo-50"
    },
    { 
      id: 8, 
      title: "Relato de Experiências", 
      color: "yellow", 
      bgColor: "from-yellow-50 to-amber-50",
      cardBg: "bg-yellow-50"
    }
  ];

  const handleTrilhaClick = (index: number) => {
    setCurrentTrilha(index);
  };

  const nextTrilha = () => {
    if (currentTrilha < trilhas.length - 1) {
      setCurrentTrilha(currentTrilha + 1);
    }
  };

  const prevTrilha = () => {
    if (currentTrilha > 0) {
      setCurrentTrilha(currentTrilha - 1);
    }
  };

  const renderCurrentPage = () => {
    switch (currentTrilha) {
      case 0:
        return <HomePage />;
      case 1:
        return <TrilhaTestePage />;
      case 2:
        return <TrilhaQualificacaoPage />;
      case 3:
        return <TrilhaCurriculoPage />;
      case 4:
        return <TrilhaEntrevistaPage />;
      case 5:
        return <TrilhaExperimentacoesPage />;
      case 6:
        return <TrilhaInclusaoPage />;
      case 7:
        return <TrilhaCidadaniaPage />;
      case 8:
        return <TrilhaRelatos />;
      default:
        return <HomePage />;
    }
  };

  const getButtonColors = (trilhaColor: string) => {
    switch (trilhaColor) {
      case 'orange':
        return {
          bg: 'bg-orange-500 hover:bg-orange-600',
          disabled: 'bg-gray-300'
        };
      case 'teal':
        return {
          bg: 'bg-teal-500 hover:bg-teal-600',
          disabled: 'bg-gray-300'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500 hover:bg-yellow-600',
          disabled: 'bg-gray-300'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500 hover:bg-cyan-600',
          disabled: 'bg-gray-300'
        };
      case 'green':
        return {
          bg: 'bg-green-500 hover:bg-green-600',
          disabled: 'bg-gray-300'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500 hover:bg-purple-600',
          disabled: 'bg-gray-300'
        };
      case 'pink':
        return {
          bg: 'bg-rose-500 hover:bg-rose-600',
          disabled: 'bg-gray-300'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-500 hover:bg-indigo-600',
          disabled: 'bg-gray-300'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-500 hover:bg-indigo-600',
          disabled: 'bg-gray-300'
        };
      default:
        return {
          bg: 'bg-blue-500 hover:bg-blue-600',
          disabled: 'bg-gray-300'
        };
    }
  };

  const buttonColors = getButtonColors(trilhas[currentTrilha].color);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${trilhas[currentTrilha].bgColor} transition-all duration-500`}>
      <Header currentTrilha={trilhas[currentTrilha]} />
      
      <div className="container mx-auto px-4 py-6">
        <ProgressBar 
          current={currentTrilha} 
          total={trilhas.length} 
          trilhas={trilhas}
          onTrilhaClick={handleTrilhaClick}
        />
        
        <div className="mt-8">
          {renderCurrentPage()}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 sm:mt-8 px-2 sm:px-4">
          <button
            onClick={prevTrilha}
            disabled={currentTrilha === 0}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white text-sm sm:text-base ${
              currentTrilha === 0 ? buttonColors.disabled : buttonColors.bg
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Anterior
          </button>
          
          <span className="text-gray-600 font-medium text-sm sm:text-base">
            {currentTrilha + 1} de {trilhas.length}
          </span>
          
          <button
            onClick={nextTrilha}
            disabled={currentTrilha === trilhas.length - 1}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white text-sm sm:text-base ${
              currentTrilha === trilhas.length - 1 ? buttonColors.disabled : buttonColors.bg
            }`}
          >
            Próxima
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-8 sm:mt-12 py-4 sm:py-6 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 Práticas de RH - Trilhas para o Sucesso. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;