import React from 'react';
import { Video, Play } from 'lucide-react';

const TrilhaRelatos: React.FC = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="bg-indigo-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Video className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          7ª Trilha - Relato de Experiências dos Alunos
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aqui você vai conhecer os relatos dos estudantes que participaram do projeto 
          e suas experiências durante as trilhas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Espaço Reservado para Vídeos */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 text-center">
          <div className="bg-indigo-100 p-6 rounded-full w-fit mx-auto mb-6">
            <Play className="w-16 h-16 text-indigo-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Vídeos dos Estudantes
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Espaço reservado para os vídeos com os relatos de experiência dos estudantes 
            que participaram do projeto.
          </p>

          <div className="bg-white border border-indigo-200 rounded-lg p-6 mt-8">
            <p className="text-gray-600 italic">
              Os vídeos com os relatos dos estudantes serão adicionados aqui em breve.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl text-center">
          <p className="text-gray-700">
            Esta seção será atualizada com os vídeos dos relatos dos estudantes.
            ( EU SEI QUE VOCES ESTAO VENDO AIII NESSA REUNIAO DE HOJE COM A FABIANA , O SITE AGORA....)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaRelatos;
