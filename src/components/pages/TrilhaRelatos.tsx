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
          9ª Trilha - Relato de Experiências dos Alunos
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 sm:p-6 mb-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              A Trilha Relato de Experiência mostra o quanto é incrível conectar o que você aprende no Ensino Médio 
              com tudo o que vivencia nos cursos técnicos em <strong>Recursos Humanos e Administração</strong>. 
              Essa combinação te prepara de verdade para o futuro e aumenta suas chances de conquistar o primeiro emprego 
              — um diferencial que faz toda a diferença!
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Ao longo dessa jornada, você aprende sobre <strong>gestão de pessoas, liderança, empreendedorismo, 
              planejamento, comunicação e trabalho em equipe</strong>, colocando tudo isso em prática em situações 
              reais do mercado de trabalho.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              As <strong>Trilhas de RH</strong> são o seu guia de orientação, ajudando a transformar sonhos e metas 
              em conquistas e sucesso profissional.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              E você, visitante do site <strong>RH AGS</strong>, pode aproveitar as dicas e experiências compartilhadas 
              por aqui para se inspirar, começar a construir sua trajetória profissional e até descobrir qual carreira 
              combina com você!
            </p>
            <p className="text-sm sm:text-base text-yellow-800 font-semibold text-center">
              Um grande abraço,<br />
              <strong>Equipe Trilhas de RH – 2025</strong>
            </p>
          </div>
        </div>
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
            Conheça as experiências e aprendizados dos estudantes com o curso técnico integral.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/ZMxWbFdlM0s?si=ahDdvb2oiKMYFbUi" 
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
            
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/Y71rcLcQ9j0?si=UpfqgV9Mxv0eGTHu" 
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
            
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/NbH4ZcKQMHk?si=hPNnF-qAFQJeFN6A" 
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
            
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/t7go-v4x7DI?si=X9HMmA77Xc5A3UpX" 
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
            
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/stKuDO5Q5_U?si=tP6T2taNX2XZoM6J" 
                  title="Relato de Experiência - Estudante 5" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 5
              </h4>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/4i1rSeMBJk8?si=prIT3FlfO1eb8vWG" 
                  title="Relato de Experiência - Estudante 6" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                Relato de Experiência - Estudante 6
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl text-center mx-2 sm:mx-0">
          <p className="text-sm sm:text-base text-gray-700">
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaRelatos;