import React from 'react';
import { Video, Play } from 'lucide-react';

const TrilhaRelatos: React.FC = () => {
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
        <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Video className="w-12 h-12 text-yellow-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          6ª Trilha - Relato de Experiências dos Alunos
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Aqui você vai conhecer os relatos dos estudantes que participaram do projeto 
          e suas experiências durante as trilhas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        {/* Espaço Reservado para Vídeos */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
          <div className="bg-yellow-100 p-6 rounded-full w-fit mx-auto mb-6">
            <Play className="w-16 h-16 text-yellow-600" />
          </div>
          
          <h2 className="text-xl sm:text-3xl font-bold text-yellow-800 mb-4">
            Vídeos dos Estudantes
          </h2>
          
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Espaço reservado para os vídeos com os relatos de experiência dos estudantes 
            que participaram do projeto.
          </p>

          <div className="bg-white border border-yellow-200 rounded-lg p-6 mt-8">
            <p className="text-sm sm:text-base text-gray-600 italic">
              Os vídeos com os relatos dos estudantes serão adicionados aqui em breve.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl text-center mx-2 sm:mx-0">
          <p className="text-sm sm:text-base text-gray-700">
            Esta seção será atualizada com os vídeos dos relatos dos estudantes.
            ( EU SEI QUE VOCES ESTAO VENDO AI NESSA REUNIAO DE HOJE COM A FABIANA , O SITE AGORA....)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaRelatos;