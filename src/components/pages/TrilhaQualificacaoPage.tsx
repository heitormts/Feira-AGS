import React from 'react';
import { GraduationCap, Briefcase, TrendingUp, ExternalLink } from 'lucide-react';

const TrilhaQualificacaoPage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
          <GraduationCap className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Trilha Qualificação
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Nessa trilha, você vai entender direitinho o que é qualificação profissional e por que ela é tão importante 
          para conseguir (ou melhorar) um trabalho.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Conceito de Qualificação */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">O que é Qualificação Profissional?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Qualificar-se significa <strong>aprender coisas novas e desenvolver habilidades em uma área específica</strong>. 
            Isso pode acontecer por meio de estudos, cursos, experiências de trabalho ou até participando de projetos 
            e atividades que te preparem melhor para conquistar uma vaga de emprego.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Existem várias formas de se qualificar, seja para garantir um emprego imediato ou começar a construir 
            uma carreira profissional sólida.
          </p>
        </div>

        {/* Trabalho Imediato */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Chance para Trabalho Imediato</h2>
          </div>
          
          <p className="text-gray-700 mb-6 font-semibold">
            <strong>Objetivo:</strong> aprender na prática e dar os primeiros passos no mundo do trabalho, 
            ideais para ganhar experiência enquanto estudam.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                Programas Menor e Jovem Aprendiz (14 a 24 anos)
              </h3>
              <p className="text-gray-700 mb-4">
                Programas que combinam estudo e trabalho, com carteira assinada, salário, férias e outros direitos garantidos por lei.
              </p>
              <p className="text-gray-700 font-semibold mb-3">Disponíveis em:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>SENAI, SESI</strong> – Indústria (mármore e granito, Selita, Fábrica de Cimento Nassau...)</li>
                <li>• <strong>SENAC, SESC</strong> – Comércio (Supermercados, Horti Fruti...)</li>
                <li>• <strong>SENAT, SEST</strong> – Prestação de serviços (Hospitais, empresas de transporte...)</li>
                <li>• <strong>SENAR</strong> – Agricultura</li>
                <li>• <strong>SESCOOP</strong> – Cooperativismo (Sicoob, Sicred...)</li>
                <li>• <strong>SEBRAE</strong> – Pequenos negócios (empreendedorismo)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-3">
                Estágio (a partir de 16 anos)
              </h3>
              <p className="text-gray-700 mb-4">
                Ideal para estudantes do ensino médio, técnico ou superior. Permite colocar em prática o que você 
                aprende na sala de aula e ainda receber uma bolsa e auxílio-transporte.
              </p>
              
              <h3 className="text-lg font-bold text-orange-800 mb-3 mt-6">
                Cursos Técnicos Integrado ao Ensino Médio
              </h3>
              <p className="text-gray-700">
                Oferecem formação específica em áreas com alta demanda no mercado, como: Administração, 
                Recursos Humanos, Logística, Informática, etc. Esses cursos aumentam suas chances de conseguir 
                um emprego logo após a conclusão.
              </p>
            </div>
          </div>
        </div>

        {/* Dicas para Turbinar */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Dicas para Turbinar sua Qualificação</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-800 mb-3">1. Invista em cursos rápidos (cursos livres) online</h3>
              <p className="text-gray-700 mb-4">
                Explore temas como idiomas, empreendedorismo, tecnologia, sustentabilidade e muito mais — 
                tudo isso em sites gratuitos e com certificação para turbinar ainda mais o seu currículo!
              </p>
              
              <div className="mb-4">
                <img 
                  src="https://i.ibb.co/XrYYnXj2/Foto-Cursos-Online.jpg" 
                  alt="Plataformas de Cursos Online"
                  className="w-full max-w-md mx-auto rounded-lg border border-gray-300"
                />
              </div>
              
              <p className="text-gray-700 mb-3"><strong>Outros sites recomendados:</strong></p>
              <div className="flex flex-wrap gap-2">
                {['Kultivi', 'Senai', 'Qualificar Es', 'Sest Senat', 'Senac', 'Anhanguera', 'Multivix'].map((site, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {site}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Aproveite sua escola",
                  description: "Cursos, palestras, oficinas e eventos agregam valor ao seu currículo!",
                  icon: GraduationCap,
                  color: "green"
                },
                {
                  title: "Monte um currículo bacana",
                  description: "Inclua cursos, habilidades, projetos escolares, voluntariado... tudo conta!",
                  icon: Briefcase,
                  color: "blue"
                },
                {
                  title: "Fique atento às tendências",
                  description: "Saber o que está em alta te ajuda a fazer escolhas mais estratégicas.",
                  icon: TrendingUp,
                  color: "purple"
                }
              ].map((dica, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className={`bg-${dica.color}-100 p-2 rounded-lg w-fit mb-3`}>
                    <dica.icon className={`w-5 h-5 text-${dica.color}-600`} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{dica.title}</h4>
                  <p className="text-gray-600 text-sm">{dica.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trabalho Futuro */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Trabalho Futuro: Construção de Carreira</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Depois de dar os primeiros passos com experiências práticas e oportunidades de trabalho imediato, 
            é hora de pensar no futuro e na construção da sua carreira profissional.
          </p>
          
          <div className="bg-white rounded-lg p-6 border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Faculdade (Graduação)</h3>
            <p className="text-gray-700 leading-relaxed">
              Fazer uma faculdade ainda faz muita diferença em várias áreas. Isso porque você aprofunda seus conhecimentos, 
              ganha prática, conhece gente da área e pode até chegar em cargos mais tops, tipo liderança.
            </p>
            <p className="text-indigo-700 font-semibold mt-4">
              Mas o segredo é escolher algo que tenha a ver com você, com seu jeito, seus interesses e seu projeto de vida.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Lembre-se</h3>
          <p className="text-green-700">
            Aproveitar essas oportunidades te dá experiência profissional e te ajuda a entender melhor qual caminho quer seguir. 
            Cada passo conta na construção do seu projeto de vida!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaQualificacaoPage;