import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';

const TrilhaCurriculoPage: React.FC = () => {
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
        <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
          <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-green-700" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          3ª Trilha - Construção de Currículo
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Vamos falar sobre currículo? Esse documento é sua carta de apresentação profissional!
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-2 sm:px-0">
        {/* O que é Currículo */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-green-800 mb-4">O que é um Currículo?</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Sabe aquele documento que você envia ao procurar emprego? Esse é o <strong>currículo</strong>! 
            Ele tem a função de apresentar quem você é como profissional: suas experiências, habilidades, 
            formações e tudo o que pode te ajudar a conquistar a vaga dos seus sonhos.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            É por meio dele que o recrutador avalia se o seu perfil se encaixa com o que a empresa está buscando.
          </p>
        </div>

        {/* Elementos Essenciais */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-6">Elementos Essenciais do Currículo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Dados Pessoais",
                description: "Nome completo, telefone, e-mail, cidade",
                color: "blue"
              },
              {
                title: "Objetivo Profissional",
                description: "Descreva brevemente o que você busca",
                color: "green"
              },
              {
                title: "Formação Acadêmica",
                description: "Cursos em andamento ou concluídos",
                color: "purple"
              },
              {
                title: "Experiências",
                description: "Trabalhos, estágios, voluntariado",
                color: "orange"
              },
              {
                title: "Cursos Complementares",
                description: "Qualificações extras",
                color: "pink"
              },
              {
                title: "Habilidades",
                description: "Idiomas, informática, competências comportamentais",
                color: "green"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-4 h-4 bg-${item.color}-500 rounded-full`}></div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modelos de Currículo */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-green-800 mb-6 text-center">
            Modelos de Currículo para Download
          </h2>
          <p className="text-sm sm:text-base text-gray-700 text-center mb-6 sm:mb-8">
            Aqui você pode ver exemplos reais de currículos para estudantes do ensino médio e se inspirar!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
            {/* Currículo com Experiência */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-green-200">
              <div className="text-center mb-4">
                <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">
                  Estudante COM Experiência
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Modelo para quem já teve trabalhos, estágios ou atividades profissionais
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Experiências profissionais destacadas
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Habilidades desenvolvidas no trabalho
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Referências profissionais
                </div>
              </div>
              
              <a
                href="https://docs.google.com/document/d/18xt61GO71dpun13BDTpkRK35k6kNTt42/edit?usp=sharing&ouid=105786342409223073619&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Modelo
              </a>
            </div>

            {/* Currículo sem Experiência */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-green-200">
              <div className="text-center mb-4">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-3">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">
                  Estudante SEM Experiência
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Modelo para quem está começando e ainda não teve experiências profissionais
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Foco em formação e cursos
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Atividades escolares e voluntariado
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Habilidades e interesses
                </div>
              </div>
              
              <a
                href="https://docs.google.com/document/d/1bEwQoo0Te8s6QKv6G3Jm4C6MgTMGFE7k/edit?usp=sharing&ouid=105786342409223073619&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Modelo
              </a>
            </div>
          </div>
        </div>

        {/* Dicas Importantes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-yellow-800 mb-6">Dicas Importantes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-yellow-200">
                <h4 className="text-xs sm:text-base font-bold text-green-800 mb-2">Faça</h4>
                <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                  <li>- Seja claro e objetivo</li>
                  <li>- Use uma foto profissional</li>
                  <li>- Mantenha as informações atualizadas</li>
                  <li>- Destaque suas conquistas</li>
                  <li>- Revise antes de enviar</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-red-200">
                <h4 className="text-xs sm:text-base font-bold text-red-800 mb-2">Evite</h4>
                <ul className="text-gray-700 space-y-1 text-xs sm:text-sm">
                  <li>- Informações falsas ou exageradas</li>
                  <li>- Currículo muito longo</li>
                  <li>- Erros de português</li>
                  <li>- Fotos casuais ou inadequadas</li>
                  <li>- Informações desnecessárias</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl mx-2 sm:mx-0">
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">
            Lembre-se: Seu currículo é seu cartão de visitas!
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Dedique tempo para fazer um documento que realmente represente o melhor de você.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaCurriculoPage;