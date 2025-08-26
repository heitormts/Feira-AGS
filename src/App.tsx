import React, { useState } from 'react';
import { Heart, Users, Briefcase, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import ImageModal from './components/ImageModal';

const TrilhaInclusaoPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('sobre');
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null);

  const atividades: Array<{titulo: string; imagens: string[]}> = [];

  const reunioes = [
    {
      titulo: "Reunião com a Equipe AEE",
      objetivo: "Conhecer melhor as principais características dos alunos com deficiência (PcDs) da escola, por meio de uma troca de ideias super proveitosa.",
      imagem: "https://i.ibb.co/39H3nzCD/reuniao-equipe-aee.jpg"
    },
    {
      titulo: "Entrevista com Thaís - Psicóloga Programa APOIE – SEDU",
      objetivo: "Ouvir o relato da entrevistada sobre sua experiência ajudando a montar o edital do processo de Recrutamento e Seleção de pessoas com deficiência (PcDs) na Câmara Municipal de Cachoeiro de Itapemirim — destacando como um currículo bem feito faz diferença na hora da contratação.",
      imagem: "https://i.ibb.co/TxPbvrMn/Entrevista-com-Tha-s-Psic-loga.jpg"
    },
    {
      titulo: "Entrevista com Matheus - Analista de RH Grupo Perim",
      objetivo: "Entender como a empresa faz o processo de Recrutamento e Seleção, principalmente na hora de contratar pessoas com deficiência (PCD).",
      imagens: [
        "https://i.ibb.co/jv49w7b2/entrevista-matheus-rh-analista.jpg",
        "https://i.ibb.co/67hmLt96/entrevista-matheus-rh-analista-2.jpg"
      ]
    },
    {
      titulo: "Reunião com Mônica Pitanga - Fundadora da ONG Mova-se",
      objetivo: "Compreender o papel da instituição como ferramenta de inclusão na sociedade cachoeirense.",
      imagem: "https://i.ibb.co/35g69fPL/Reuniao-com-Monica-Pitanga.jpg"
    },
    {
      titulo: "Reunião com Dr. Djailson Martins Rocha - Procurador do Ministério Público do Trabalho",
      objetivo: "Entender como funciona a Lei de Cotas para pessoas com deficiência (PCDs) nas empresas, qual é o papel do Ministério Público do Trabalho de Cachoeiro para garantir que ela seja cumprida, e ouvir do Procurador como essa lei está sendo aplicada nas empresas da nossa cidade.",
      imagem: "https://i.ibb.co/N6RRHJy2/reuniao-Dr-Djailson-Martins.jpg"
    }
  ];

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

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

      <div className="text-center mb-8">
        <div className="bg-rose-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Heart className="w-12 h-12 text-rose-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          5ª Trilha - Inclusão
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-rose-700 mb-4 px-2">
          Projeto "Vamos nos Permitir"
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setActiveSection('sobre')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'sobre'
                ? 'bg-rose-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart className="w-5 h-5" />
            Sobre o Projeto
          </button>
          <button
            onClick={() => setActiveSection('atividades')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'atividades'
                ? 'bg-pink-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Users className="w-5 h-5" />
            Atividades
          </button>
          <button
            onClick={() => setActiveSection('reunioes')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'reunioes'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Reuniões e Entrevistas
          </button>
        </div>

        {/* Sobre o Projeto */}
        {activeSection === 'sobre' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-8">
              <h2 className="text-lg sm:text-2xl font-bold text-rose-800 mb-6">Sobre o Projeto "Vamos nos Permitir"</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-rose-200">
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-rose-600" />
                    Objetivo Principal
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    O projeto tem como objetivo <strong>incluir estudantes do Atendimento Educacional Especializado (AEE) 
                    no mercado de trabalho</strong>, promovendo autonomia, protagonismo e pertencimento dos alunos com deficiência (PCD).
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-pink-600" />
                    Focos do Projeto
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Além de preparar os jovens para oportunidades como <strong>menor ou jovem aprendiz</strong>, 
                    o projeto incentiva:
                  </p>
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      O desenvolvimento acadêmico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      O empreendedorismo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      A participação social
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-red-600" />
                    Importância da Inclusão
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    A inclusão de pessoas com deficiência no mercado de trabalho não é apenas uma questão legal, 
                    mas também uma oportunidade de criar um ambiente mais diverso, criativo e humano. 
                    O projeto visa quebrar barreiras e mostrar que <strong>todos têm potencial para contribuir 
                    significativamente no mundo do trabalho</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Atividades */}
        {activeSection === 'atividades' && (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-2xl font-bold text-pink-800 mb-6 text-center">
              Atividades do Projeto
            </h2>
            
            {atividades.map((atividade, index) => (
              <div key={index} className="bg-white border border-pink-200 rounded-xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 text-center sm:text-left">{atividade.titulo}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {atividade.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <img 
                        src={imagem} 
                        alt={`${atividade.titulo} - Foto ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(imagem, `${atividade.titulo} - Foto ${imgIndex + 1}`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reuniões e Entrevistas */}
        {activeSection === 'reunioes' && (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-2xl font-bold text-red-800 mb-6 text-center">
              Reuniões e Entrevistas Realizadas
            </h2>
            
            {reunioes.map((reuniao, index) => (
              <div key={index} className="bg-white border border-red-200 rounded-xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-3 break-words">{reuniao.titulo}</h3>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <h4 className="text-sm sm:text-base font-semibold text-red-800 mb-2">Objetivo:</h4>
                      <p className="text-xs sm:text-base text-gray-700 leading-relaxed">{reuniao.objetivo}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                  {reuniao.imagem && (
                    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <img 
                        src={reuniao.imagem} 
                        alt={reuniao.titulo}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(reuniao.imagem!, reuniao.titulo)}
                      />
                    </div>
                  )}
                  {reuniao.imagens && reuniao.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <img 
                        src={imagem} 
                        alt={`${reuniao.titulo} - Foto ${imgIndex + 1}`}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(imagem, `${reuniao.titulo} - Foto ${imgIndex + 1}`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl text-center mx-2 sm:mx-0">
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">
            Juntos Construindo um Futuro Inclusivo
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            O projeto "Vamos nos Permitir" representa a crença de que todos merecem oportunidades iguais de 
            crescer, aprender e contribuir para a sociedade. Cada ação realizada é um passo em direção a 
            um mundo mais inclusivo e justo.
          </p>
        </div>
      </div>

      <ImageModal
        isOpen={modalImage !== null}
        imageUrl={modalImage?.url || ''}
        imageAlt={modalImage?.alt || ''}
        onClose={closeModal}
      />
    </div>
  );
};

export default TrilhaInclusaoPage;
