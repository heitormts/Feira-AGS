import React from 'react';
import { Gamepad2, Trophy, Target, ExternalLink, Sparkles, Users } from 'lucide-react';

const TrilhaGamificacaoPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-indigo-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Gamepad2 className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          6ª Trilha - Gamificação
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Aprender pode ser divertido!
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-2 sm:px-0">
        {/* Introdução */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-indigo-600 p-3 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-xl font-bold text-indigo-800 mb-4">
                O que é a Trilha de Gamificação?
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                A Trilha de Gamificação em RH transforma os conteúdos do site em atividades interativas, 
                com desafios, missões e recompensas que deixam o aprendizado mais interessante.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Nessa trilha, o participante aprende na prática, participa de desafios de forma saudável 
                e avança passo a passo, como em um jogo, desenvolvendo habilidades importantes para o mundo do trabalho.
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios da Gamificação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {[
            {
              title: "Aprendizado Divertido",
              description: "Transforme estudos em experiências envolventes e prazerosas",
              icon: Gamepad2,
              color: "indigo"
            },
            {
              title: "Desafios Progressivos",
              description: "Avance passo a passo, conquistando novos níveis de conhecimento",
              icon: Target,
              color: "purple"
            },
            {
              title: "Recompensas e Conquistas",
              description: "Celebre cada vitória e mantenha a motivação sempre alta",
              icon: Trophy,
              color: "yellow"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`bg-${item.color}-100 p-3 rounded-full w-fit mb-4`}>
                <item.icon className={`w-6 h-6 text-${item.color}-600`} />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-xs sm:text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Atividades Gamificadas */}
        <div className="space-y-6 sm:space-y-8">
          {/* Kahoot */}
          <div className="bg-white border border-green-200 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-green-800 mb-4">
                  Quiz Interativo - Trilhas de RH
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Teste seus conhecimentos sobre RH de forma divertida! Participe do nosso quiz interativo 
                  no Kahoot e descubra o quanto você aprendeu nas trilhas anteriores.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-green-800 mb-2">Como participar:</h4>
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1 text-left">
                    <li>• Clique no botão abaixo para acessar o desafio</li>
                    <li>• Responda as perguntas no seu ritmo</li>
                    <li>• Veja sua pontuação e compare com outros participantes</li>
                    <li>• Divirta-se aprendendo!</li>
                  </ul>
                </div>
                
                <a
                  href="https://kahoot.it/challenge/0192344?challenge-id=bf0380d0-4088-4a3e-88b9-bd5d96f2fc47_1765932164822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <Gamepad2 className="w-5 h-5" />
                  Jogar Quiz no Kahoot
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Baralho Projeto de Vida */}
          <div className="bg-white border border-purple-200 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-purple-800 mb-4">
                  Baralho do Projeto de Vida
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Explore o Baralho do Projeto de Vida de forma interativa! Uma ferramenta gamificada 
                  que te ajuda a refletir sobre seus objetivos, sonhos e planos para o futuro.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-purple-800 mb-2">O que você vai encontrar:</h4>
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1 text-left">
                    <li>• Cartas interativas para reflexão</li>
                    <li>• Atividades de autoconhecimento</li>
                    <li>• Exercícios de planejamento de carreira</li>
                    <li>• Dicas para construir seu projeto de vida</li>
                  </ul>
                </div>
                
                <a
                  href="https://online.fliphtml5.com/vrpiu/vhbo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <Trophy className="w-5 h-5" />
                  Acessar Baralho Interativo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dicas para Aproveitar a Gamificação */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-yellow-800 mb-6 text-center">
             Dicas para Aproveitar ao Máximo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-yellow-200">
              <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-3">Para o Quiz (Kahoot)</h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                <li>• Revise as trilhas anteriores antes de jogar</li>
                <li>• Não se preocupe com erros - eles fazem parte do aprendizado</li>
                <li>• Tente novamente para melhorar sua pontuação</li>
                <li>• Compartilhe com amigos para tornar mais divertido</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-yellow-200">
              <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-3">Para o Baralho do Projeto de Vida</h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                <li>• Reserve um tempo tranquilo para a reflexão</li>
                <li>• Seja honesto(a) consigo mesmo(a)</li>
                <li>• Anote suas descobertas em um caderno</li>
                <li>• Volte às atividades sempre que precisar</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mensagem Final */}
        <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-4">
             Transforme Aprendizado em Diversão!
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            A gamificação torna o processo de aprender sobre RH e carreira muito mais envolvente. 
            Aproveite essas ferramentas para descobrir mais sobre você mesmo e sobre o mundo profissional 
            de uma forma leve e divertida!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaGamificacaoPage;