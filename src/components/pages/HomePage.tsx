import React, { useState, useRef, useEffect } from 'react';
import { User, Target, Sparkles, Play, Pause, Volume2 } from 'lucide-react';
import ImageModal from '../ImageModal';

const HomePage: React.FC = () => {
  const [modalImage, setModalImage] = React.useState<{ url: string; alt: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // URL do áudio do Agostinho hospedado no Google Drive
  const AGOSTINHO_AUDIO_URL = 'https://drive.google.com/uc?export=download&id=1jR2bmd62F3p64X9ny_wgtdPWYNwJsQQG';

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(AGOSTINHO_AUDIO_URL);
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Erro ao reproduzir áudio:', error);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      {/* Hero Section com Agostinho */}
      <div className="text-center mb-4 sm:mb-12">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img
              src="https://i.ibb.co/pjRZns9g/AGOSTINHO.jpg" 
              alt="Agostinho - Mascote do Projeto"
              className="w-16 h-16 sm:w-32 sm:h-32 rounded-full object-cover shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal("https://i.ibb.co/pjRZns9g/AGOSTINHO.jpg", "Agostinho - Mascote do Projeto")}
            />
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-blue-600 text-white p-1 sm:p-2 rounded-full">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
          
          <div className="relative max-w-4xl w-full px-3 sm:px-2">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-6 rounded-r-xl shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-left w-full">
                  <h2 className="text-sm sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3 text-center sm:text-left">
                    Ei, eu sou o Agostinho!
                  </h2>
                  <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    Quero te fazer um convite especial: se você é da <strong>geração Z</strong> (assim como eu), 
                    vem com a gente nessa jornada chamada <strong>Práticas de RH – Trilhas para o Sucesso!</strong>
                  </p>
                  <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    Vai ser uma experiência super prática, cheia de aprendizados que vão te mostrar como funcionam 
                    várias profissões e o que você pode fazer pra conquistar seu primeiro emprego.
                  </p>
                  <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    A ideia é te ajudar a ser o <strong>protagonista da sua própria história</strong> e fazer escolhas 
                    com mais autonomia — dois pontos chave para construir um projeto de vida com propósito.
                  </p>
                  <p className="text-xs sm:text-base text-blue-700 font-semibold break-words">
                    Ah, e se você é da <strong>geração Alpha</strong>, fica tranquilo(a), porque tudo isso também serve pra você!
                  </p>
                  
                  {/* Botão de Áudio do Agostinho */}
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <div className="flex items-center gap-2 text-blue-700">
                        <Volume2 className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium">Ouça a mensagem do Agostinho:</span>
                      </div>
                      <button
                        onClick={togglePlayPause}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4" />
                            Pausar
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            Reproduzir
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards das Trilhas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-12 px-3 sm:px-0">
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
            title: "Entrevista para o Primeiro Emprego", 
            description: "Dicas práticas para mandar bem na sua primeira entrevista",
            icon: Target,
            color: "teal"
          },
          { 
            title: "Mini Dicionário de RH", 
            description: "Vocabulário essencial do mundo profissional",
            icon: Target,
            color: "amber"
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
            title: "Serviço de Cidadania", 
            description: "Portais e serviços para exercer sua cidadania",
            icon: Target,
            color: "indigo"
          },
          { 
            title: "Relato de Experiências", 
            description: "Histórias reais de sucesso",
            icon: Target,
            color: "indigo"
          }
        ].map((trilha, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
            <div className={`bg-${trilha.color}-100 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4`}>
              <trilha.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${trilha.color}-600`} />
            </div>
            <h3 className="text-xs sm:text-lg font-bold text-gray-800 mb-2 break-words leading-tight">{trilha.title}</h3>
            <p className="text-xs sm:text-base text-gray-600 break-words leading-relaxed">{trilha.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 sm:mt-12 p-3 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl mx-3 sm:mx-0">
        <h3 className="text-sm sm:text-xl font-bold text-gray-800 mb-2">
          Pronto para começar sua jornada?
        </h3>
        <p className="text-xs sm:text-base text-gray-600">
          Use os botões de navegação abaixo para percorrer todas as trilhas no seu ritmo!
        </p>
      </div>

      {/* Seção da Equipe - NOVO */}
      <div className="mt-8 sm:mt-16 p-4 sm:p-8 bg-white rounded-xl shadow-lg mx-3 sm:mx-0">
        <h2 className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Equipe de Construção do Projeto
        </h2>
        
        {/* Orientação */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-sm sm:text-lg font-bold text-blue-800 mb-2">Professora Orientadora</h3>
          <p className="text-xs sm:text-base text-gray-700">
            <strong>Fabiana S. Souto Tomé</strong> - Especialista em RH
          </p>
        </div>

        {/* Desenvolvimento */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-600">
          <h3 className="text-sm sm:text-lg font-bold text-purple-800 mb-2">Desenvolvimento</h3>
          <p className="text-xs sm:text-base text-gray-700">
            <strong>Heitor Motta</strong> - Desenvolvedor do Site (2ª RH)
          </p>
        </div>

        {/* Equipe de Colaboradores */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-600">
          <h3 className="text-sm sm:text-lg font-bold text-green-800 mb-4">Equipe de Colaboradores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { nome: "Ana Carolina", turma: "2ª ADM2" },
              { nome: "Eduardo", turma: "2ª RH" },
              { nome: "Heitor", turma: "2ª ADM1" },
              { nome: "Iury", turma: "2ª ADM1" },
              { nome: "Jackson", turma: "2ª ADM1" },
              { nome: "Jean", turma: "2ª ADM1" },
              { nome: "João", turma: "1ª ADM" },
              { nome: "Luiza", turma: "2ª ADM1" },
              { nome: "Mariana", turma: "2ª ADM2" },
              { nome: "Matheus", turma: "2ª ADM2" },
              { nome: "Shopia", turma: "2ª ADM1" },
              { nome: "Yuri", turma: "3ª ADM1" }
            ].map((membro, index) => (
              <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">{membro.nome}</p>
                <p className="text-xs text-gray-600">{membro.turma}</p>
              </div>
            ))}
          </div>
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

export default HomePage;
