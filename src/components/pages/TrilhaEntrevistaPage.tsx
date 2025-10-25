import React, { useState } from 'react';
import { Users, MessageCircle, CheckCircle, AlertCircle, Lightbulb, User } from 'lucide-react';

const TrilhaEntrevistaPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dicas');

  const perguntasComuns = [
    {
      pergunta: "Fale um pouco sobre você.",
      resposta: "Meu nome é Emanuel, tenho 15 anos e estudo na EEEFM Agostinho Simonato. Estou no ensino médio e sempre fui muito dedicado e responsável com minhas tarefas. Estou buscando minha primeira oportunidade de trabalho porque quero aprender, crescer profissionalmente e ajudar minha família."
    },
    {
      pergunta: "Por que você quer trabalhar aqui?",
      resposta: "Pesquisei sobre a empresa e gostei muito da forma como ela valoriza os funcionários. Acredito que aqui posso aprender muito e me desenvolver. Quero começar minha vida profissional em um lugar sério e com boas oportunidades."
    },
    {
      pergunta: "Quais são seus pontos fortes?",
      resposta: "Sou pontual, educado e gosto de fazer as coisas bem feitas. Também aprendo rápido e me dou bem com todo tipo de pessoa."
    },
    {
      pergunta: "E seus pontos fracos?",
      resposta: "Às vezes fico um pouco nervoso em situações novas, como entrevistas, mas estou trabalhando isso e me esforçando para sair da minha zona de conforto."
    },
    {
      pergunta: "Você já teve alguma experiência, mesmo que não seja de trabalho?",
      resposta: "Nunca trabalhei com carteira assinada, mas já participei de projetos escolares e ajudo em casa com responsabilidade. Essas experiências me ensinaram sobre organização e compromisso."
    },
    {
      pergunta: "Como você lida com críticas ou orientações?",
      resposta: "Levo como aprendizado. Se alguém me corrige, é porque quer que eu melhore, e eu gosto disso, porque quero sempre fazer o meu melhor."
    },
    {
      pergunta: "Como você trabalha em equipe?",
      resposta: "Gosto de trabalhar com outras pessoas. Sempre tento ajudar e ouvir o que os outros têm a dizer. Acho que juntos a gente consegue mais."
    },
    {
      pergunta: "Onde você se vê daqui a alguns anos?",
      resposta: "Quero estar mais experiente, com uma carreira começando a se formar e, quem sabe, ainda na empresa, crescendo. Também quero continuar estudando e me desenvolvendo."
    },
    {
      pergunta: "Você está disposto a aprender, mesmo começando com tarefas simples?",
      resposta: "Sim, com certeza. Estou começando agora e sei que cada tarefa, por mais simples que pareça, é uma chance de aprender. Estou aqui pra somar e crescer."
    },
    {
      pergunta: "Tem alguma pergunta ou consideração final?",
      resposta: "Quero agradecer pela entrevista e pela atenção. Estou muito animado com essa oportunidade e pronto para começar. Se for escolhido, vou me dedicar de verdade."
    }
  ];

  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      <div className="text-center mb-8">
        <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Users className="w-12 h-12 text-teal-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          4ª Trilha - Entrevista para o Primeiro Emprego
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Um guia prático para mandar bem na sua primeira entrevista! Dicas simples, objetivas e fáceis de aplicar 
          para te ajudar a se preparar com confiança na hora de encarar sua primeira entrevista de emprego.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setActiveSection('dicas')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'dicas'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Dicas Práticas
          </button>
          <button
            onClick={() => setActiveSection('simulacao')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'simulacao'
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Simulação de Entrevista
          </button>
        </div>

        {/* Dicas Práticas */}
        {activeSection === 'dicas' && (
          <div className="space-y-8">
            {/* Antes da Entrevista */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-bold text-teal-800 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Antes da Entrevista
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-teal-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Pesquise sobre a empresa</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Saiba o que ela faz, qual é o público, onde está localizada e quais são seus valores. 
                    Isso mostra interesse e maturidade.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-teal-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Pense nas suas qualidades</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Mesmo sem experiência, você pode destacar: responsabilidade, vontade de aprender, pontualidade, 
                    trabalho em equipe, etc. Lembre de situações da escola, projetos, cursos ou voluntariado que mostrem isso.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-teal-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Prepare-se para perguntas comuns</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3">Exemplos:</p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>• "Fale um pouco sobre você."</li>
                    <li>• "Por que quer trabalhar aqui?"</li>
                    <li>• "Quais são seus pontos fortes e fracos?"</li>
                    <li>• "Como lida com desafios?"</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-teal-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Treine em voz alta</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Fale na frente do espelho ou com alguém da sua confiança. Isso ajuda a se sentir mais seguro.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg p-6 border border-teal-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Vista-se com cuidado</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Roupa limpa, discreta e adequada para o ambiente da empresa (mesmo que seja informal).
                </p>
              </div>
            </div>

            {/* Durante a Entrevista */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Durante a Entrevista
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Seja pontual</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Chegue com pelo menos 10 minutos de antecedência.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Cumprimente com educação</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Um sorriso, um "bom dia" e um aperto de mão (ou o cumprimento que for comum) fazem diferença.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Mantenha postura</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Sente-se direito, olhe nos olhos, evite mexer muito no celular ou ficar balançando as pernas.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Fale com clareza</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Responda as perguntas com calma, sem pressa. Não tem problema dizer "não sei", 
                    se for com honestidade e vontade de aprender.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Demonstre interesse</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Mostre que está ali para aprender, crescer e contribuir, mesmo começando agora. 
                  Pode dizer algo como: "Estou buscando minha primeira oportunidade e quero muito aprender."
                </p>
              </div>
            </div>

            {/* O que Evitar */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                Evite
              </h2>
              
              <div className="bg-white rounded-lg p-6 border border-red-200">
                <ul className="text-sm sm:text-base text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Falar mal de outras pessoas ou lugares (mesmo da escola)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Usar gírias ou falar de forma muito informal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Mostrar desânimo ou desinteresse
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Mentir sobre suas habilidades ou experiências
                  </li>
                </ul>
              </div>
            </div>

            {/* Depois da Entrevista */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-bold text-blue-800 mb-6">Depois da Entrevista</h2>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <p className="text-sm sm:text-base text-gray-700">
                  Se quiser, envie uma mensagem simples de agradecimento (se for por e-mail ou WhatsApp, 
                  algo como: "Agradeço pela oportunidade da entrevista. Estou animado para contribuir com a equipe!")
                </p>
              </div>
            </div>

            {/* Dica Final */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 sm:p-8 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-yellow-800 mb-4"> Dica Final</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Você não precisa saber tudo. O que mais conta é sua atitude, sua vontade de aprender e sua responsabilidade. 
                Mostre que você está começando agora, mas está pronto para dar o seu melhor.
              </p>
            </div>
          </div>
        )}

        {/* Simulação de Entrevista */}
        {activeSection === 'simulacao' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 sm:p-8 text-center">
              <div className="bg-cyan-100 p-4 rounded-full w-fit mx-auto mb-4">
                <User className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-cyan-800 mb-4">
                Simulação de Entrevista – Emanuel, 15 anos
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Primeiro Emprego – Menor Aprendiz
              </p>
            </div>

            <div className="space-y-6">
              {perguntasComuns.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-lg font-bold text-blue-800 mb-2">
                          ENTREVISTADOR:
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 font-medium">
                          {index + 1}. {item.pergunta}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <User className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-green-800 mb-2">Sua resposta:</h4>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          "{item.resposta}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dicas Finais para Emanuel */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-purple-800 mb-6">
                 Dicas Finais para Você, Emanuel:
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Pratique essas respostas em voz alta</strong> — pode treinar com alguém da sua família ou no espelho.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Seja você mesmo</strong>, com educação, respeito e vontade de aprender.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Leve um currículo simples</strong>, mesmo que não tenha experiência, com seus dados, escola e alguma atividade que você já fez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrilhaEntrevistaPage;