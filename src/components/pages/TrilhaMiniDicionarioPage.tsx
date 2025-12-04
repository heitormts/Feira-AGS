import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const TrilhaMiniDicionarioPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
          <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-amber-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          5ª Trilha - Mini Dicionário de RH
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Seu guia prático para entender os principais termos do mundo profissional e de Recursos Humanos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-0">
        {/* Descrição da Trilha */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-amber-600 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-xl font-bold text-amber-800 mb-4">
                O que é o Mini Dicionário de RH?
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                A Trilha do Mini Dicionário de RH funciona como um <strong>caminho de aprendizado</strong>, 
                parecido com os níveis de um jogo, que explica de forma simples os principais termos usados 
                no mundo profissional e nas áreas de Recursos Humanos.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                Seu objetivo é ajudar quem está começando a entender palavras comuns nas empresas — como 
                <strong> onboarding, turnover e feedback</strong> — mostrando seus significados na prática.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ela serve para deixar tudo mais fácil, preparar para trabalhos e estudos, e traduzir o 
                <strong> "idioma do RH"</strong> para o dia a dia, apresentando cada termo com explicações 
                curtas e exemplos.
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0">
          {[
            {
              title: "Linguagem Simples",
              description: "Termos técnicos explicados de forma clara e objetiva",
              color: "amber"
            },
            {
              title: "Exemplos Práticos",
              description: "Situações reais para você entender como usar cada termo",
              color: "orange"
            },
            {
              title: "Preparação Profissional",
              description: "Vocabulário essencial para entrevistas e ambiente de trabalho",
              color: "yellow"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className={`text-sm sm:text-lg font-bold text-${item.color}-600 mb-3`}>{item.title}</h3>
              <p className="text-xs sm:text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Acesso ao Mini Dicionário */}
        <div className="bg-white border border-amber-200 rounded-xl p-4 sm:p-8 shadow-lg">
          <div className="text-center">
            <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-amber-800 mb-4">
              Acesse o Mini Dicionário de RH
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              Acesse o PDF completo com todos os termos essenciais de RH explicados de forma simples e prática.
            </p>
            
            <a
              href="https://pxllnk.co/j2zczltrh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <ExternalLink className="w-5 h-5" />
              Acessar o Mini Dicionário (PDF)
            </a>
          </div>
        </div>

        {/* Dica Final */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center mx-2 sm:mx-0">
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">
             Dica de Estudo
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Leia um termo por dia e tente usar em conversas ou situações do seu cotidiano. 
            Assim você vai fixar melhor o vocabulário profissional!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaMiniDicionarioPage;