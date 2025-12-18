import React from 'react';
import { Users, ExternalLink, QrCode, Heart, FileText, CreditCard, Car, Droplets, HandHeart } from 'lucide-react';

const TrilhaCidadaniaPage: React.FC = () => {
  const servicos = [
    {
      titulo: "Acesso Cidadão",
      descricao: "É tipo um portal que junta vários serviços do Governo do Estado em um só lugar — tudo mais fácil e rápido pra você acessar.",
      instrucoes: "É simples! Aponte a câmera do seu celular para o QR Code aqui do lado ou acesse o link e siga os passos.",
      link: "https://acessocidadao.es.gov.br/Conta/Entrar?ReturnUrl=%2F",
      qrCode: "https://i.ibb.co/yng8r5C9/QR-CODE-acesso-Cidadao.png",
      icon: Users,
      color: "blue"
    },
    {
      titulo: "Portal GOV BR",
      descricao: "É um site oficial que junta vários serviços e informações do Governo Federal, tudo em um só lugar, pra você acessar fácil e rápido.",
      instrucoes: "É só apontar a câmera do celular para o QR Code aqui do lado ou entrar no link e seguir as instruções. Pronto, você já pode usar o portal!",
      link: "https://sso.acesso.gov.br/login?client_id=www.gov.br&authorization_id=193df9d6c8b",
      qrCode: "https://i.ibb.co/7xBQbxsk/QR-CODE-portal-gov.png",
      icon: FileText,
      color: "green"
    },
    {
      titulo: "E-Título",
      descricao: "O E-Título é a versão digital do seu título de eleitor. Ele é super importante para você votar nas eleições e lembrar da importância de exercer seu direito democrático.",
      instrucoes: "Aponte a câmera do celular para o QR Code aqui do lado ou acesse o link e confira todas as informações.",
      link: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/",
      qrCode: "https://i.ibb.co/6RznsJFH/QR-CODE-E-titulo.png",
      icon: Users,
      color: "purple"
    },
    {
      titulo: "Conecte SUS",
      descricao: "Aqui você acessa rapidinho suas informações de saúde, marca consultas e usa vários serviços para cuidar bem da sua saúde.",
      instrucoes: "É só apontar a câmera do celular para o QR Code ao lado ou entre no link e seguir os passos.",
      link: "https://conectesus-paciente.saude.gov.br/login",
      qrCode: "https://i.ibb.co/5hB8T0Ws/QR-CODE-Connect-sus.png",
      icon: Heart,
      color: "red"
    },
    {
      titulo: "ID Jovem",
      descricao: "O ID Jovem é um documento que te garante descontos ou até entrada grátis em shows, eventos esportivos, cinema e muito mais. Também ajuda a conseguir vagas grátis ou com desconto no transporte interestadual.",
      instrucoes: "Aponte a câmera do celular para o QR Code aqui do lado ou entre pelo link e seguir as instruções.",
      link: "https://idjovem.juventude.gov.br/emitir-id-jovem",
      qrCode: "https://i.ibb.co/m5dK1hzQ/QR-CODE-ID-jovem.png",
      icon: CreditCard,
      color: "orange"
    },
    {
      titulo: "Carteira de Identidade (RG)",
      descricao: "O RG é seu documento oficial de identificação, que prova quem você é. Ele é um dos principais documentos que todo brasileiro precisa ter. Você pode tirar o seu nos órgãos de segurança do seu estado ou no Distrito Federal.",
      instrucoes: "É só apontar a câmera do celular para o QR Code ao lado ou acesse o link e seguir as instruções.",
      link: "https://agenda.es.gov.br/",
      qrCode: "https://i.ibb.co/Ps8693tB/QR-CODE-RG.png",
      icon: FileText,
      color: "green"
    },
    {
      titulo: "Carteira de Trabalho (CTPS)",
      descricao: "A Carteira de Trabalho é o documento que registra sua vida profissional e garante seus direitos no trabalho. Hoje em dia, ela é emitida principalmente no formato digital, mas em casos especiais ainda tem a versão física.",
      instrucoes: "Aponte a câmera do celular para o QR Code ao lado ou entre no link e seguir os passos.",
      link: "https://servicos.mte.gov.br/spme-v2/#/login",
      qrCode: "https://i.ibb.co/dwTSsrZN/QR-CODE-carteira-trabalho.png",
      icon: CreditCard,
      color: "slate"
    },
    {
      titulo: "CNH Social",
      descricao: "É um programa que oferece a Carteira de Motorista (CNH) de graça ou com desconto pra quem tem 18 anos ou mais e se encaixa nos critérios do programa. É uma chance legal de tirar a CNH sem pagar tudo do próprio bolso!",
      instrucoes: "Aponta a câmera do seu celular pro QR Code aqui do lado ou acesse o link e veja como se inscrever.",
      link: "https://detran.es.gov.br/cnhsocial",
      qrCode: "https://i.ibb.co/hFpWgzGb/QR-CODE-Cnh.png",
      icon: Car,
      color: "cyan"
    },
    {
      titulo: "Doação de Sangue",
      descricao: "Doar sangue é um ato de solidariedade que salva vidas e mostra que você se importa com os outros. No Brasil, quem tem a partir de 16 anos, está com boa saúde e tem autorização dos responsáveis, já pode doar! Uma única doação pode ajudar até 4 pessoas que estão precisando.",
      instrucoes: "Aponte a câmera do celular para o QR Code aqui do lado ou acesse o link.",
      links: [
        "https://www.heci.com.br/noticia/banco-de-sangue-do-hospital-evangelico--cachoeiro-necessita-de-doadores",
        "https://santacasacachoeiro.com.br/pacientes-e-visitantes/banco-de-sangue/"
      ],
      qrCodes: [
        "https://i.ibb.co/Spbq656/QR-Code-Doacao-sangue.png",
        "https://i.ibb.co/pvXtSGzB/QR-code-doacao-sangue-2.png"
      ],
      icon: Droplets,
      color: "red"
    },
    {
      titulo: "Programa de Voluntariado",
      descricao: "Ser voluntário é usar seu tempo, atenção e habilidades pra ajudar pessoas ou causas - sem esperar nada em troca. É coisa de quem quer fazer a diferença, seja no próprio bairro ou até em ações maiores, com impacto no mundo. Faz parte do exercício da cidadania de verdade!",
      instrucoes: "O portal OngsBrasil mostra várias oportunidades de voluntariado por município. Aponta a câmera para o QR Code aqui do lado ou entre no link e confira!",
      link: "https://www.ongsbrasil.com.br/default.asp?Pag=18&Estado=ES&Origem=Trabalho-Voluntario-no-ESPiRITO-SANTO",
      qrCode: "https://i.ibb.co/fzBSQkkt/QR-CODE-volutanrio.png",
      icon: HandHeart,
      color: "pink"
    }
  ];

  return (
    <div className="p-4 sm:p-8 overflow-x-hidden">
      <div className="text-center mb-8">
        <div className="bg-indigo-100 p-4 rounded-full w-fit mx-auto mb-4">
          <Users className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
          9ª Trilha - Serviço de Cidadania
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        {/* Introdução */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 sm:p-8 mb-8">
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Ser cidadão é mais do que só viver em um lugar — é <strong>fazer parte dele de verdade</strong>. 
              Significa conhecer e correr atrás dos seus direitos, cumprir seus deveres, respeitar os outros 
              e ajudar no que for bom pra todo mundo.
            </p>
            <p>
              Também é votar, participar das decisões e lutar por justiça, igualdade e respeito.
            </p>
            <p>
              Nesta trilha de RH, a ideia é mostrar como alguns <strong>serviços importantes</strong> podem 
              ajudar muito na sua vida como estudante - deixando as coisas mais fáceis, acessíveis e mostrando 
              como você pode fazer a diferença na sua escola e comunidade.
            </p>
            <p className="font-semibold text-indigo-800">
              Esses serviços são aliados na hora de construir uma cidadania de verdade, com atitude e consciência.
            </p>
          </div>
        </div>

        {/* Serviços */}
        <div className="space-y-8">
          {servicos.map((servico, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Conteúdo Principal */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-${servico.color}-100 p-3 rounded-full`}>
                      <servico.icon className={`w-6 h-6 text-${servico.color}-600`} />
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">{servico.titulo}</h2>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    {servico.descricao}
                  </p>
                  
                  <div className={`bg-${servico.color}-50 border border-${servico.color}-200 rounded-lg p-4`}>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Como criar sua conta:</h3>
                    <p className="text-xs sm:text-sm text-gray-700 mb-4">{servico.instrucoes}</p>
                    
                    {servico.titulo !== "Doação de Sangue" && (
                      <a
                        href={servico.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 bg-${servico.color}-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-${servico.color}-700 transition-colors duration-300 text-xs sm:text-sm`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Acessar Serviço
                      </a>
                    )}
                  </div>
                </div>
                
                {/* QR Code */}
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                  {servico.qrCodes ? (
                    <div className="space-y-4">
                      {servico.qrCodes.map((qrCode, qrIndex) => (
                        <div key={qrIndex} className="flex flex-col items-center">
                          <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                            <img
                              src={qrCode}
                              alt={`QR Code ${qrIndex + 1} para ${servico.titulo}`}
                              className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                            />
                          </div>
                          {servico.links && servico.links[qrIndex] && (
                            <a
                              href={servico.links[qrIndex]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 bg-${servico.color}-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-${servico.color}-700 transition-colors duration-300 text-xs mb-2`}
                            >
                              <ExternalLink className="w-3 h-3" />
                              Acessar {qrIndex === 0 ? 'HECI' : 'Santa Casa'}
                            </a>
                          )}
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-gray-600">
                        <QrCode className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium">Escaneie os QR Codes</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                        <img
                          src={servico.qrCode}
                          alt={`QR Code para ${servico.titulo}`}
                          className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <QrCode className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium">Escaneie o QR Code</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem Final */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
             Exercite sua Cidadania!
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Esses serviços são ferramentas poderosas para você exercer seus direitos e deveres como cidadão. 
            Use-os para facilitar sua vida, acessar oportunidades e contribuir para uma sociedade mais justa e participativa.
          </p>
          <p className="text-sm sm:text-base text-indigo-700 font-semibold mt-4">
            Lembre-se: ser cidadão é um exercício diário de participação e responsabilidade!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrilhaCidadaniaPage;