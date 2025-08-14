import React from 'react';
import { ExternalLink, Target, Compass } from 'lucide-react';

const TrilhaTestePage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Target className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Trilha Teste de Carreira
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Nessa jornada, você vai poder se conhecer melhor e começar a pensar na profissão que tem mais a ver com você.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-800 mb-4">
                Descubra Sua Vocação Profissional
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Esta trilha oferece um recurso essencial para dar aquele empurrão no seu projeto de vida: 
                o <strong>teste de carreira</strong>. Fique ligado e aproveite para fazer o seu!"
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Faça Seu Teste de Carreira Agora
                </h3>
                <p className="text-gray-600 mb-4">
                  Um teste completo que vai te ajudar a identificar suas habilidades, interesses e a carreira ideal para você.
                </p>
                <a
                  href="https://share.google/J0pKDXyPmYxUZRZMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  Iniciar Teste de Carreira
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios do Teste */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Autoconhecimento",
              description: "Descubra suas habilidades naturais e interesses genuínos",
              color: "blue"
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
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <h3 className={`text-lg font-bold text-${item.color}-600 mb-3`}>{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Dica Importante</h3>
          <p className="text-yellow-700">
            Reserve um momento tranquilo para fazer o teste. Responda com honestidade - não existe resposta certa ou errada, 
            apenas o que é verdadeiro para você neste momento da sua vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaTestePage;