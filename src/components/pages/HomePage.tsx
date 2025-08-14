import React from 'react';
import { User, Target, Sparkles } from 'lucide-react';
import ImageModal from '../ImageModal';

const HomePage: React.FC = () => {
  const [modalImage, setModalImage] = React.useState<{ url: string; alt: string } | null>(null);

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="p-8">
      {/* Hero Section com Agostinho */}
      <div className="text-center mb-12">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img
              src="https://i.ibb.co/QjfsRffh/Whats-App-Image-2025-07-29-at-15-41-19-1.jpg" 
              alt="Agostinho - Mascote do Projeto"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal("https://i.ibb.co/QjfsRffh/Whats-App-Image-2025-07-29-at-15-41-19-1.jpg", "Agostinho - Mascote do Projeto")}
            />
            <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          
          <div className="relative max-w-4xl">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">
                    Ei, eu sou o Agostinho!
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quero te fazer um convite especial: se você é da <strong>geração Z</strong> (assim como eu), 
                    vem com a gente nessa jornada chamada <strong>Práticas de RH – Trilhas para o Sucesso!</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vai ser uma experiência super prática, cheia de aprendizados que vão te mostrar como funcionam 
                    várias profissões e o que você pode fazer pra conquistar seu primeiro emprego.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A ideia é te ajudar a ser o <strong>protagonista da sua própria história</strong> e fazer escolhas 
                    com mais autonomia — dois pontos chave para construir um projeto de vida com propósito.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    Ah, e se você é da <strong>geração Alpha</strong>, fica tranquilo(a), porque tudo isso também serve pra você!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards das Trilhas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          { 
            title: "Teste de Carreira", 
            description: "Descubra a profissão ideal para você",
            icon: Target,
            color: "blue"
          },
          { 
            title: "Qualificação", 
            description: "Aprenda sobre desenvolvimento profissional",
            icon: Target,
            color: "green"
          },
          { 
            title: "Construção de Currículo", 
            description: "Monte um currículo que se destaque",
            icon: Target,
            color: "purple"
          },
          { 
            title: "Experimentações", 
            description: "Rodas de conversa e visitas técnicas",
            icon: Target,
            color: "orange"
          },
          { 
            title: "Inclusão", 
            description: "Projeto 'Vamos nos Permitir'",
            icon: Target,
            color: "pink"
          },
          { 
            title: "Relato de Experiências", 
            description: "Histórias reais de sucesso",
            icon: Target,
            color: "indigo"
          }
        ].map((trilha, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`bg-${trilha.color}-100 p-3 rounded-xl w-fit mb-4`}>
              <trilha.icon className={`w-6 h-6 text-${trilha.color}-600`} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{trilha.title}</h3>
            <p className="text-gray-600">{trilha.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Pronto para começar sua jornada?
        </h3>
        <p className="text-gray-600">
          Use os botões de navegação abaixo para percorrer todas as trilhas no seu ritmo!
        </p>
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

export default HomePage;