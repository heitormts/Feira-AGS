import React from 'react';
import { ExternalLink, Target, Compass } from 'lucide-react';

const TrilhaTestePage: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      {/* Logo da Escola */}
      <div className="absolute top-4 right-4 z-10">
        <img
          src="https://i.ibb.co/VWJPNBDs/Whats-App-Image-2025-08-23-at-15-09-02.jpg"
          alt="Logo da Escola"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Logo da Escola */}
      <div className="absolute top-4 right-4 z-10">
        <img
          src="https://i.ibb.co/VWJPNBDs/Whats-App-Image-2025-08-23-at-15-09-02.jpg"
          alt="Logo da Escola"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-cyan-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Target className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          1ª Trilha - Teste de Carreira
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Nessa jornada, você vai poder se conhecer melhor e começar a pensar na profissão que tem mais a ver com você.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-0">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-cyan-600 p-3 rounded-full">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-xl font-bold text-cyan-800 mb-4">
                Descubra Sua Vocação Profissional
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                "Esta trilha oferece um recurso essencial para dar aquele empurrão no seu projeto de vida: 
                o <strong>teste de carreira</strong>. Fique ligado e aproveite para fazer o seu!"
              </p>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-cyan-200">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                  Faça Seu Teste de Carreira Agora
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Um teste completo que vai te ajudar a identificar suas habilidades, interesses e a carreira ideal para você.
                </p>
                <a
                  href="https://share.google/J0pKDXyPmYxUZRZMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full text-sm sm:text-base"
                >
                  <ExternalLink className="w-5 h-5" />
                  Iniciar Teste de Carreira
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios do Teste */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 px-2 sm:px-0">
          {[
            {
              title: "Autoconhecimento",
              description: "Descubra suas habilidades naturais e interesses genuínos",
              color: "cyan"
            },
            {
              title: "Direcionamento",
              description: "Tenha clareza sobre quais carreiras combinam com seu perfil",
              color: "green"
            },
            {
              title: "Confiança",
              description: "Tome decisões sobre seu futuro com mais segurança",
              color: "purple"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className={`text-sm sm:text-lg font-bold text-${item.color}-600 mb-3`}>{item.title}</h3>
              <p className="text-xs sm:text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-xl mx-2 sm:mx-0">
          <h3 className="text-sm sm:text-lg font-semibold text-yellow-800 mb-2">💡 Dica Importante</h3>
          <p className="text-sm sm:text-base text-yellow-700">
            Reserve um momento tranquilo para fazer o teste. Responda com honestidade - não existe resposta certa ou errada, 
            apenas o que é verdadeiro para você neste momento da sua vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaTestePage;