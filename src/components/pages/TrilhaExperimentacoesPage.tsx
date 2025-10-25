import React, { useState } from 'react';
import { MessageSquare, MapPin, Users, Leaf, ExternalLink } from 'lucide-react';
import ImageModal from '../ImageModal';

const TrilhaExperimentacoesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('rodas');
  const [modalImage, setModalImage] = useState<{ url: string; alt: string } | null>(null);

  const rodasConversa = [
    {
      tema: "Quem é Profissional graduado em Recursos Humanos?",
      convidado: "Gestor de Pessoas e Psicólogo Rodrigo Ribeiro",
      imagens: [
        "https://i.ibb.co/Ngmrf254/rodas-conversa-rhrodrigoribeiro.jpg",
        "https://i.ibb.co/TBLLtkQY/rodas-conversa-rhrodrigoribeiro-4.jpg",
        "https://i.ibb.co/gFg75M6b/rodas-conversa-rhrodrigoribeiro-3.jpg",
        "https://i.ibb.co/RTcbVK07/rodas-conversa-rhrodrigoribeiro-2.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Psicologia?",
      convidado: "Psicóloga Júlia Sartório",
      imagens: [
        "https://i.ibb.co/DHbqrqnH/rodas-conversa-psicologia-julia-sartorio.jpg",
        "https://i.ibb.co/fYPmyShS/rodas-conversa-psicologia-julia-sartorio-4.jpg",
        "https://i.ibb.co/8464Lftg/rodas-conversa-psicologia-julia-sartorio-3.jpg",
        "https://i.ibb.co/gLFLWMVL/rodas-conversa-psicologia-julia-sartorio-2.jpg"
      ]
    },
    {
      tema: "Quem é o profissional graduado em Direito?",
      convidado: "Coordenador Curso de Direito Faculdade Anhanguera Cachoeiro – Victor Schiavo",
      imagens: [
        "https://i.ibb.co/nshYxn6f/rodas-conversa-vitin-direito.jpg",
        "https://i.ibb.co/5X0JP2hj/rodas-conversa-vitin-direito-2.jpg"
      ]
    },
    {
      tema: "Quem é o profissional graduado em Ciências Contábeis?",
      convidado: "Representante CRC Jovem - ES - Gustavo Brandão",
      imagens: [
        "https://i.ibb.co/7JZcCdpJ/rodas-conversa-ciencias-contabeis-4.jpg",
        "https://i.ibb.co/m5GrjNjc/rodas-conversa-ciencias-contabeis.jpg",
        "https://i.ibb.co/998cXyzp/rodas-conversa-ciencias-contabeis-2.jpg",
        "https://i.ibb.co/3yfNkbBk/rodas-conversa-ciencias-contabeis-3.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Enfermagem?",
      convidado: "Enfermeira Coordenadora Setor de Hemodiálise – HECI- Cachoeiro – Joelice Gonçalves",
      imagens: [
        "https://i.ibb.co/x8S7VV4B/rodas-conversa-enfermagem.jpg",
        "https://i.ibb.co/BHvS7jcz/rodas-conversa-enfermagem-4.jpg",
        "https://i.ibb.co/whm2wy7x/rodas-conversa-enfermagem-3.jpg",
        "https://i.ibb.co/9995rCLZ/rodas-conversa-enfermagem-2.jpg"
      ]
    },
    {
      tema: "Quem é o Profissional graduado em Medicina?",
      convidado: "Médico Nefrologista - HECI- Cachoeiro - Dr° Sérgio Damião",
      imagens: [
        "https://i.ibb.co/9CM4t9F/rodas-conversa-sergiodamiao.jpg",
        "https://i.ibb.co/chqf8JP5/rodas-conversa-sergiodamiao-4.jpg",
        "https://i.ibb.co/JWSX17Np/rodas-conversa-sergiodamiao-3.jpg",
        "https://i.ibb.co/8gKfVRMY/rodas-conversa-sergiodamiao-2.jpg"
      ]
    },
    {
      tema: "Como funciona uma Empresa do Mármore e Granito enfatizando o setor de Logística?",
      convidado: "Técnico em Administração – Inspetor de Qualidade. Empresa: Brazilian Stones",
      imagens: [
        "https://i.ibb.co/ttXp5hY/rodas-conversa-marmore-brazilian-Stones.jpg",
        "https://i.ibb.co/8g4Q2WSm/rodas-conversa-marmore-brazilian-Stones-3.jpg",
        "https://i.ibb.co/PsBnVP6F/rodas-conversa-marmore-brazilian-Stones-4.jpg",
        "https://i.ibb.co/7NGDKH2j/rodas-conversa-marmore-brazilian-Stones-2.jpg"
      ]
    },
    {
      tema: "Gerenciamento do Estresse: O Caminho para uma Vida de Qualidade",
      convidado: "Júlia Sartório – Psicóloga. Abordagem de Técnicas básicas de Tai Chi Chuan",
      imagens: [
        "https://i.ibb.co/spz9hCNb/rodas-conversa-estresse-julia.jpg",
        "https://i.ibb.co/7dzn8NYW/rodas-conversa-estresse-julia-3.jpg",
        "https://i.ibb.co/nNLLxmHB/rodas-conversa-estresse-julia-4.jpg",
        "https://i.ibb.co/C3q89hR9/rodas-conversa-estresse-julia-2.jpg"
      ]
    }
  ];

  const visitasTecnicas = [
    {
      titulo: "Feira do Mármore",
      imagens: [
        "https://i.ibb.co/r2DgGjcr/visita-tecnica-feira-marmore.jpg",
        "https://i.ibb.co/SX4MTd4P/visita-tecnica-feira-marmore-6.jpg",
        "https://i.ibb.co/zVLNkL5Z/visita-tecnica-feira-marmore-5.jpg",
        "https://i.ibb.co/x8SSGsph/visita-tecnica-feira-marmore-4.jpg",
        "https://i.ibb.co/rG7wZSwC/visita-tecnica-feira-marmore-3.jpg",
        "https://i.ibb.co/kgKBNjGh/visita-tecnica-feira-marmore-2.jpg"
      ]
    },
    {
      titulo: "Mundo Senai",
      imagens: [
        "https://i.ibb.co/Zp0d8SFY/visita-tecnica-senai.jpg",
        "https://i.ibb.co/TqbD7dwd/visita-tecnica-senai-6.jpg",
        "https://i.ibb.co/mx0pZ3H/visita-tecnica-senai-7.jpg",
        "https://i.ibb.co/twQ135BT/visita-tecnica-senai-5.jpg",
        "https://i.ibb.co/KpR9LhMK/visita-tecnica-senai-4.jpg",
        "https://i.ibb.co/prM3wGq1/visita-tecnica-senai-3.jpg",
        "https://i.ibb.co/HLLQ73HX/visita-tecnica-senai-2.jpg"
      ]
    },
    {
      titulo: "Visita Técnica a Empresa Cofril",
      imagens: [
        "https://i.ibb.co/C5Dg9Q7v/visita-tecnica-cofril-4.jpg",
        "https://i.ibb.co/q3ZfYsjD/visita-tecnica-cofril.jpg",
        "https://i.ibb.co/PzNLSRh1/visita-tecnica-cofril-3.jpg",
        "https://i.ibb.co/HTnTGfqs/visita-tecnica-cofril-2.jpg"
      ]
    },
    {
      titulo: "Mini curso de Educação Financeira",
      imagens: [
        "https://i.ibb.co/DHD0nVnQ/Mini-Curso-financeiro-9ano.jpg",
        "https://i.ibb.co/8nRgVpSn/Mini-Curso-financeiro-9ano-5.jpg",
        "https://i.ibb.co/bM2sGTc7/Mini-Curso-financeiro-9ano-4.jpg",
        "https://i.ibb.co/Dxp3NmW/Mini-Curso-financeiro-9ano-3.jpg",
        "https://i.ibb.co/VcnQ18kB/Mini-Curso-financeiro-9ano-2.jpg"
      ]
    }
  ];

  const praticaSustentavel = {
    titulo: "Prática Sustentável Empreendedora",
    descricao: "A Prática Sustentável Empreendedora é uma iniciativa que conecta educação, sustentabilidade e empreendedorismo. Os estudantes desenvolvem projetos que promovem práticas ambientalmente responsáveis, aprendendo sobre negócios sustentáveis e inovação social, preparando-se para ser agentes de mudança no mercado de trabalho.",
    imagens: [
      "https://i.ibb.co/RkpH80sk/inclusao-pratica-sustentavel-empreendora.jpg",
      "https://i.ibb.co/fdntY01M/inclusao-pratica-sustentavel-empreendora-8.jpg",
      "https://i.ibb.co/wr6kvLH0/inclusao-pratica-sustentavel-empreendora-7.jpg",
      "https://i.ibb.co/2YfS7n2B/inclusao-pratica-sustentavel-empreendora-6.jpg",
      "https://i.ibb.co/8nnkyTqR/inclusao-pratica-sustentavel-empreendora-5.jpg",
      "https://i.ibb.co/N6WSKxYg/inclusao-pratica-sustentavel-empreendora-4.jpg",
      "https://i.ibb.co/C55xxbJq/inclusao-pratica-sustentavel-empreendora-3.jpg",
      "https://i.ibb.co/20NJQXPS/inclusao-pratica-sustentavel-empreendora-2.jpg"
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
          5ª Trilha - Experimentações
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