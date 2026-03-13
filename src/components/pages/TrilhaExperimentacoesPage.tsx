import React, { useState } from 'react';
import { MessageSquare, MapPin, Users, Leaf, ExternalLink } from 'lucide-react';
import ImageModal from '../ImageModal';

const TrilhaExperimentacoesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('rodas');
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null);

  const rodasConversa = [
    {
      tema: "Bate Papo de RH - Juventude Consciente: Cooperar, Poupar e Investir",
      convidado: "Equipe Sicoob CrediRochas Cachoeiro",
      objetivo: "Bater um papo sobre dinheiro e escolhas inteligentes - sempre com dicas que cabem na sua realidade.",
      imagens: [
        "https://i.ibb.co/d43BfGkk/juventude-conciente-rh-1.jpg",
        "https://i.ibb.co/MxkndVzW/juventude-conciente-rh-2.jpg",
        "https://i.ibb.co/90tgBV8/juventude-conciente-rh-3.jpg",
        "https://i.ibb.co/ks9BYCsq/juventude-conciente-rh-4.jpg",
        "https://i.ibb.co/Rp8JYtZK/juventude-conciente-rh-5.jpg",
        "https://i.ibb.co/v68W8dvc/juventude-conciente-rh-6.jpg",
        "https://i.ibb.co/VWRp20XL/juventude-conciente-rh-7.jpg",
        "https://i.ibb.co/Y4743X9L/juventude-conciente-rh-8.jpg"
      ]
    },
    {
      tema: "Quem é Profissional graduado em Recursos Humanos?",
      convidado: "Gestor de Pessoas e Psicólogo Rodrigo Ribeiro",
      imagens: [
        "https://i.ibb.co/qYWtGnmr/Whats-App-Image-2026-03-11-at-21-36-56.jpg",
        "https://i.ibb.co/0pbk3WX7/Whats-App-Image-2026-03-11-at-21-36-55-1.jpg",
        "https://i.ibb.co/s9HdhmKX/Whats-App-Image-2026-03-11-at-21-36-55.jpg",
        "https://i.ibb.co/TqKxN7gr/Whats-App-Image-2026-03-11-at-21-36-54.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Psicologia?",
      convidado: "Psicóloga Júlia Sartório",
      imagens: [
        "https://i.ibb.co/zhj6qhHr/Whats-App-Image-2026-03-11-at-21-36-58.jpg",
        "https://i.ibb.co/67XL2vRf/Whats-App-Image-2026-03-11-at-21-36-57-2.jpg",
        "https://i.ibb.co/4wT6Cs3H/Whats-App-Image-2026-03-11-at-21-36-57-1.jpg",
        "https://i.ibb.co/pBSJ4NV9/Whats-App-Image-2026-03-11-at-21-36-57.jpg"
      ]
    },
    {
      tema: "Quem é o profissional graduado em Direito?",
      convidado: "Coordenador Curso de Direito Faculdade Anhanguera Cachoeiro – Victor Schiavo",
      imagens: [
        "https://i.ibb.co/xZ7y3kC/Whats-App-Image-2026-03-11-at-21-36-59.jpg",
        "https://i.ibb.co/0RYFVXJY/Whats-App-Image-2026-03-11-at-21-36-58-1.jpg"
      ]
    },
    {
      tema: "Quem é o profissional graduado em Ciências Contábeis?",
      convidado: "Representante CRC Jovem - ES - Gustavo Brandão",
      imagens: [
        "https://i.ibb.co/JF5npb6d/Whats-App-Image-2026-03-11-at-21-37-00-2.jpg",
        "https://i.ibb.co/Kz0gZYdR/Whats-App-Image-2026-03-11-at-21-37-00-1.jpg",
        "https://i.ibb.co/gBg2vVN/Whats-App-Image-2026-03-11-at-21-37-00.jpg",
        "https://i.ibb.co/0pDnxVZX/Whats-App-Image-2026-03-11-at-21-36-59-1.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Enfermagem?",
      convidado: "Enfermeira Coordenadora Setor de Hemodiálise – HECI- Cachoeiro – Joelice Gonçalves",
      imagens: [
        "https://i.ibb.co/vxwjHBy3/Whats-App-Image-2026-03-11-at-21-37-01-3.jpg",
        "https://i.ibb.co/tPv3SJFY/Whats-App-Image-2026-03-11-at-21-37-01-2.jpg",
        "https://i.ibb.co/S4Rx7FVK/Whats-App-Image-2026-03-11-at-21-37-01-1.jpg",
        "https://i.ibb.co/yBhWTC14/Whats-App-Image-2026-03-11-at-21-37-01.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Medicina?",
      convidado: "Médico Nefrologista - HECI- Cachoeiro - Dr° Sérgio Damião",
      imagens: [
        "https://i.ibb.co/wZcnp799/Whats-App-Image-2026-03-11-at-21-37-04.jpg",
        "https://i.ibb.co/d0ZRym39/Whats-App-Image-2026-03-11-at-21-37-03-1.jpg",
        "https://i.ibb.co/fYnMmBgN/Whats-App-Image-2026-03-11-at-21-37-03.jpg",
        "https://i.ibb.co/39TZ6rK4/Whats-App-Image-2026-03-11-at-21-37-02.jpg"
      ]
    },
    {
      tema: "Como funciona uma Empresa do Mármore e Granito enfatizando o setor de Logística?",
      convidado: "Técnico em Administração – Inspetor de Qualidade. Empresa: Brazilian Stones",
      imagens: [
        "https://i.ibb.co/WvFm0P5b/Whats-App-Image-2026-03-11-at-21-37-06-1.jpg",
        "https://i.ibb.co/zHByB8Yx/Whats-App-Image-2026-03-11-at-21-37-06.jpg",
        "https://i.ibb.co/Kz5XCtNh/Whats-App-Image-2026-03-11-at-21-37-05.jpg",
        "https://i.ibb.co/yFLQqQFY/Whats-App-Image-2026-03-11-at-21-37-04-1.jpg"
      ]
    },
    {
      tema: "Gerenciamento do Estresse: O Caminho para uma Vida de Qualidade",
      convidado: "Júlia Sartório – Psicóloga. Abordagem de Técnicas básicas de Tai Chi Chuan",
      imagens: [
        "https://i.ibb.co/VG7Hfz7/Whats-App-Image-2026-03-11-at-21-37-07.jpg",
        "https://i.ibb.co/wN0CbCFQ/Whats-App-Image-2026-03-11-at-21-37-08-1.jpg",
        "https://i.ibb.co/wFVxLTkt/Whats-App-Image-2026-03-11-at-21-37-09.jpg",
        "https://i.ibb.co/0jYt8THC/Whats-App-Image-2026-03-11-at-21-37-08.jpg"
      ]
    }
  ];

  const visitasTecnicas = [
    {
      titulo: "Aula de Campo - Da massa à entrega - A logística por trás da pizza",
      imagens: [
        "https://i.ibb.co/wNWT4npc/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-1.jpg",
        "https://i.ibb.co/LXbG7KRZ/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-2.jpg",
        "https://i.ibb.co/rGp5N54k/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-5.jpg",
        "https://i.ibb.co/Wv7g2QhG/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-7.jpg",
        "https://i.ibb.co/778f2sH/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-8.jpg",
        "https://i.ibb.co/6k2JLWq/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-9.jpg",
        "https://i.ibb.co/wtMdNsd/Da-massa-entrega-A-log-stica-por-tr-s-da-pizza-10.jpg"
      ]
    },
    {
      titulo: "Feira do Mármore",
      imagens: [
        "https://i.ibb.co/7JMtLfZJ/Whats-App-Image-2026-03-11-at-21-37-23.jpg",
        "https://i.ibb.co/BVBWWNpz/Whats-App-Image-2026-03-11-at-21-37-16-2.jpg",
        "https://i.ibb.co/cXKBBRKR/Whats-App-Image-2026-03-11-at-21-37-16-1.jpg",
        "https://i.ibb.co/1pWc9rv/Whats-App-Image-2026-03-11-at-21-37-16.jpg",
        "https://i.ibb.co/vCrkHpDC/Whats-App-Image-2026-03-11-at-21-37-15.jpg",
        "https://i.ibb.co/gL2s3XCN/Whats-App-Image-2026-03-11-at-21-37-24.jpg"
      ]
    },
    {
      titulo: "Mundo Senai",
      imagens: [
        "https://i.ibb.co/fzvXsSMN/Whats-App-Image-2026-03-11-at-21-37-15.jpg",
        "https://i.ibb.co/d4DBpYtp/Whats-App-Image-2026-03-11-at-21-37-10.jpg",
        "https://i.ibb.co/9mLmxKK3/Whats-App-Image-2026-03-11-at-21-37-11.jpg",
        "https://i.ibb.co/GQf6vgTw/Whats-App-Image-2026-03-11-at-21-37-12.jpg",
        "https://i.ibb.co/20pjV6pP/Whats-App-Image-2026-03-11-at-21-37-13-1.jpg",
        "https://i.ibb.co/fV1QRHVP/Whats-App-Image-2026-03-11-at-21-37-13.jpg",
        "https://i.ibb.co/67ZhswJ6/Whats-App-Image-2026-03-11-at-21-37-14.jpg"
      ]
    },
    {
      titulo: "Visita Técnica a Empresa Cofril",
      imagens: [
        "https://i.ibb.co/vxdkqTpQ/Whats-App-Image-2026-03-11-at-21-37-18-1.jpg",
        "https://i.ibb.co/TMT2Kbf3/Whats-App-Image-2026-03-11-at-21-37-18.jpg",
        "https://i.ibb.co/zh0Xb8xQ/Whats-App-Image-2026-03-11-at-21-37-17-1.jpg",
        "https://i.ibb.co/B5P4R73p/Whats-App-Image-2026-03-11-at-21-37-17.jpg"
      ]
    },
    {
      titulo: "Mini curso de Educação Financeira",
      imagens: [
        "https://i.ibb.co/NHtK3Pv/Whats-App-Image-2026-03-11-at-21-37-20-1.jpg",
        "https://i.ibb.co/vvxN9wrJ/Whats-App-Image-2026-03-11-at-21-37-20.jpg",
        "https://i.ibb.co/pBzJXdmn/Whats-App-Image-2026-03-11-at-21-37-19-1.jpg",
        "https://i.ibb.co/whDn73N6/Whats-App-Image-2026-03-11-at-21-37-19.jpg",
        "https://i.ibb.co/S7RhNnxv/Whats-App-Image-2026-03-11-at-21-37-18-2.jpg"
      ]
    }
  ];

  const visitasComVideo = [
    {
      titulo: "Visita Técnica - Faculdade Americas Cachoeiro",
      videoUrl: "https://www.youtube.com/embed/tsaIf9qEvxY?si=Cg2ldVkKoSTA2IQg"
    }
  ];

  const praticaSustentavel = {
    titulo: "Prática Sustentável Empreendedora",
    descricao: "A Prática Sustentável Empreendedora é uma iniciativa que conecta educação, sustentabilidade e empreendedorismo. Os estudantes desenvolvem projetos que promovem práticas ambientalmente responsáveis, aprendendo sobre negócios sustentáveis e inovação social, preparando-se para ser agentes de mudança no mercado de trabalho.",
    imagens: [
      "https://i.ibb.co/HfvJ3LYz/Whats-App-Image-2026-03-11-at-21-37-25.jpg",
      "https://i.ibb.co/S7s4D42t/Whats-App-Image-2026-03-11-at-21-37-24.jpg",
      "https://i.ibb.co/S4vZDdK6/Whats-App-Image-2026-03-11-at-21-37-23.jpg",
      "https://i.ibb.co/3mDpSVbT/Whats-App-Image-2026-03-11-at-21-37-22-2.jpg",
      "https://i.ibb.co/tpnJnPs3/Whats-App-Image-2026-03-11-at-21-37-22-1.jpg",
      "https://i.ibb.co/Q7sRHdGv/Whats-App-Image-2026-03-11-at-21-37-22.jpg",
      "https://i.ibb.co/S4xyJndy/Whats-App-Image-2026-03-11-at-21-37-21.jpg",
      "https://i.ibb.co/39Vjr4XR/Whats-App-Image-2026-03-11-at-21-37-20-2.jpg"
    ]
  };

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      <div className="text-center mb-8">
        <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
          <MessageSquare className="w-12 h-12 text-purple-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          7ª Trilha - Experimentações
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Agora é a hora de participar das Rodas de Conversa de RH! Além disso, também vão rolar visitas técnicas 
          e projetos escolares, que ajudam a colocar tudo isso na prática.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        {/* Introdução */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8 mb-8">
          <h2 className="text-lg sm:text-2xl font-bold text-purple-800 mb-4">O que são as Rodas de Conversa?</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Elas são um <strong>espaço tranquilo e aberto</strong> onde todo mundo pode trocar ideias, contar experiências 
            e ouvir diferentes pontos de vista sobre um tema específico. A ideia é justamente essa: criar um ambiente leve, 
            onde rola diálogo de verdade, respeito, e aprendizado em grupo.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            É o tipo de vivência que faz a diferença na sua formação e no seu olhar para o mundo!
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setActiveSection('rodas')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'rodas'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Rodas de Conversa
          </button>
          <button
            onClick={() => setActiveSection('visitas')}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeSection === 'visitas'
                ? 'bg-violet-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MapPin className="w-5 h-5" />
            Visitas Técnicas
          </button>
          <button
            onClick={() => setActiveSection('pratica')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-base ${
              activeSection === 'pratica'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Leaf className="w-5 h-5" />
            <span className="text-center">Prática Sustentável</span>
          </button>
        </div>

        {/* Rodas de Conversa */}
        {activeSection === 'rodas' && (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-2xl font-bold text-purple-800 mb-6 text-center">
              Rodas de Conversa Realizadas
            </h2>
            
            {rodasConversa.map((roda, index) => (
              <div key={index} className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-purple-800 mb-2">{roda.tema}</h3>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Convidado:</span> {roda.convidado}
                    </p>
                    {roda.objetivo && (
                      <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg mb-4">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-purple-800">Objetivo:</span> {roda.objetivo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {roda.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="relative group cursor-pointer" onClick={() => openModal(imagem, `${roda.tema} - Imagem ${imgIndex + 1}`)}>
                      <img
                        src={imagem}
                        alt={`${roda.tema} - Imagem ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Visitas Técnicas */}
        {activeSection === 'visitas' && (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-2xl font-bold text-violet-800 mb-6 text-center">
              Visitas Técnicas Realizadas
            </h2>
            
            {visitasTecnicas.map((visita, index) => (
              <div key={index} className="bg-white border border-violet-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-violet-800 mb-4">{visita.titulo}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {visita.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="relative group cursor-pointer" onClick={() => openModal(imagem, `${visita.titulo} - Imagem ${imgIndex + 1}`)}>
                      <img
                        src={imagem}
                        alt={`${visita.titulo} - Imagem ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Visitas Técnicas com Vídeo */}
            {visitasComVideo.map((visita, index) => (
              <div key={`video-${index}`} className="bg-white border border-violet-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-violet-800 mb-4">{visita.titulo}</h3>
                
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-64 sm:h-80 rounded-lg"
                    src={visita.videoUrl}
                    title={visita.titulo}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prática Sustentável */}
        {activeSection === 'pratica' && (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-2xl font-bold text-green-800 mb-6 text-center">
              Prática Sustentável Empreendedora
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {praticaSustentavel.descricao}
              </p>
            </div>
            
            <div className="bg-white border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-800 mb-4">Galeria de Atividades</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {praticaSustentavel.imagens.map((imagem, imgIndex) => (
                  <div key={imgIndex} className="relative group cursor-pointer" onClick={() => openModal(imagem, `Prática Sustentável Empreendedora - Imagem ${imgIndex + 1}`)}>
                    <img
                      src={imagem}
                      alt={`Prática Sustentável Empreendedora - Imagem ${imgIndex + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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

export default TrilhaExperimentacoesPage;
