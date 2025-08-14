import React, { useState } from 'react';
import { MessageSquare, MapPin, Users, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
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

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
          <MessageSquare className="w-12 h-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          4ª Trilha - Experimentações
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Agora é a hora de participar das Rodas de Conversa de RH! Além disso, também vão rolar visitas técnicas 
          e projetos escolares, que ajudam a colocar tudo isso na prática.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Introdução */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">O que são as Rodas de Conversa?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elas são um <strong>espaço tranquilo e aberto</strong> onde todo mundo pode trocar ideias, contar experiências 
            e ouvir diferentes pontos de vista sobre um tema específico. A ideia é justamente essa: criar um ambiente leve, 
            onde rola diálogo de verdade, respeito, e aprendizado em grupo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            É o tipo de vivência que faz a diferença na sua formação e no seu olhar para o mundo!
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveSection('rodas')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeSection === 'rodas'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Rodas de Conversa
          </button>
          <button
            onClick={() => setActiveSection('visitas')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeSection === 'visitas'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MapPin className="w-5 h-5" />
            Visitas Técnicas
          </button>
        </div>

        {/* Rodas de Conversa */}
        {activeSection === 'rodas' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Rodas de Conversa Realizadas
            </h2>
            
            {rodasConversa.map((roda, index) => (
              <div key={index} className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{roda.tema}</h3>
                    <p className="text-blue-700 font-semibold">Convidado(a): {roda.convidado}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roda.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <img 
                        src={imagem} 
                        alt={`${roda.tema} - Foto ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(imagem, `${roda.tema} - Foto ${imgIndex + 1}`)}
                      />
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
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Dicas para Conhecer Profissões - Visitas Técnicas
            </h2>
            
            {visitasTecnicas.map((visita, index) => (
              <div key={index} className="bg-white border border-green-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{visita.titulo}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visita.imagens.map((imagem, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <img 
                        src={imagem} 
                        alt={`${visita.titulo} - Foto ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(imagem, `${visita.titulo} - Foto ${imgIndex + 1}`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            A Importância da Experimentação
          </h3>
          <p className="text-gray-700">
            Essas experiências práticas são fundamentais para você conhecer diferentes profissões e descobrir 
            qual caminho profissional faz mais sentido para o seu futuro!
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

export default TrilhaExperimentacoesPage;