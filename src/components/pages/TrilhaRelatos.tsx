import React from 'react';
import { Video, Play } from 'lucide-react';

const TrilhaRelatos: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
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
        {/* Vídeos dos Estudantes */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Video className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-yellow-800 text-center sm:text-left">
              Relatos dos Estudantes
            </h2>
          </div>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 text-center">
            Conheça as experiências e aprendizados dos estudantes que participaram das trilhas do projeto.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vídeo 1 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/OhEnUHpSQRQ?si=c86G_QbiV1p2FUxE" 
                  title="Relato de Experiência - Estudante 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 1
              </h4>
            </div>
            
            {/* Vídeo 2 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/B0mIpjSY8ic?si=ocSBBoE3DTHQcfVZ" 
                  title="Relato de Experiência - Estudante 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 2
              </h4>
            </div>
            
            {/* Vídeo 3 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/6wHu1Pd3O-w?si=W0fXKZKQ_njLO3Qd" 
                  title="Relato de Experiência - Estudante 3" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 3
              </h4>
            </div>
            
            {/* Vídeo 4 */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/q6p2C3SjQJ8?si=czxphlHSW64qPQFU" 
                  title="Relato de Experiência - Estudante 4" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 4
              </h4>
            </div>
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