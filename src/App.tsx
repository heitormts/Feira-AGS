import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, ExternalLink, Download } from 'lucide-react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import HomePage from './components/pages/HomePage';
import TrilhaTestePage from './components/pages/TrilhaTestePage';
import TrilhaQualificacaoPage from './components/pages/TrilhaQualificacaoPage';
import TrilhaCurriculoPage from './components/pages/TrilhaCurriculoPage';
import TrilhaExperimentacoesPage from './components/pages/TrilhaExperimentacoesPage';
import TrilhaInclusaoPage from './components/pages/TrilhaInclusaoPage';
import TrilhaRelatos from './components/pages/TrilhaRelatos';

const trilhas = [
  { id: 0, title: 'Início', component: HomePage },
  { id: 1, title: 'Teste de Carreira', component: TrilhaTestePage },
  { id: 2, title: 'Qualificação', component: TrilhaQualificacaoPage },
  { id: 3, title: 'Construção de Currículo', component: TrilhaCurriculoPage },
  { id: 4, title: 'Experimentações', component: TrilhaExperimentacoesPage },
  { id: 5, title: 'Inclusão', component: TrilhaInclusaoPage },
  { id: 6, title: 'Relato de Experiências', component: TrilhaRelatos }
];

function App() {
  const [currentTrilha, setCurrentTrilha] = useState(0);
  const CurrentComponent = trilhas[currentTrilha].component;

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

  const goToTrilha = (index: number) => {
    setCurrentTrilha(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header currentTrilha={trilhas[currentTrilha]} />
      
      <div className="container mx-auto px-4 py-6">
        <ProgressBar 
          current={currentTrilha} 
          total={trilhas.length} 
          trilhas={trilhas}
          onTrilhaClick={goToTrilha}
        />
        
        <div className="mt-8 bg-white rounded-2xl shadow-xl min-h-[600px]">
          <CurrentComponent />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 px-4">
          <button
            onClick={prevTrilha}
            disabled={currentTrilha === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentTrilha === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Trilha Anterior
          </button>

          <button
            onClick={() => goToTrilha(0)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Início
          </button>

          <button
            onClick={nextTrilha}
            disabled={currentTrilha === trilhas.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentTrilha === trilhas.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105 shadow-lg'
            }`}
          >
            Próxima Trilha
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;