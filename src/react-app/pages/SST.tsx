import { useEffect } from 'react';
import SSTHeader from '@/react-app/components/SSTHeader';
import Footer from '@/react-app/components/Footer';
import WhatsAppFloat from '@/react-app/components/WhatsAppFloat';
import { HardHat, Shield, FileCheck, Award, ArrowRight, CheckCircle } from 'lucide-react';

export default function SSTPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: HardHat,
      title: "Treinamentos em SST",
      description: "Os treinamentos de Segurança e Saúde no Trabalho (SST) são cruciais para a prevenção de acidentes e doenças ocupacionais, além de promoverem um ambiente de trabalho mais seguro e produtivo. Eles visam conscientizar os trabalhadores sobre os riscos existentes, capacitando-os a adotar medidas preventivas e a cumprir as normas regulamentadoras.",
      features: ["Treinamentos Específicos", "Conscientização Equipes", "Capacitação Gestores", "Normas Regulamentadoras"]
    },
    {
      icon: Shield,
      title: "Gerenciamento de Riscos em SST",
      description: "O gerenciamento de riscos em Segurança e Saúde no Trabalho (SST) é crucial para a prevenção de acidentes e doenças ocupacionais, promovendo um ambiente de trabalho mais seguro e saudável. Ele envolve a identificação, avaliação e controle dos riscos, garantindo a conformidade legal e a proteção da saúde dos trabalhadores.",
      features: ["Identificação de Riscos", "Avaliação e Controle", "Conformidade Legal", "Proteção Trabalhadores"]
    },
    {
      icon: FileCheck,
      title: "Avaliações Ambientais em SST",
      description: "As avaliações ambientais em Segurança e Saúde no Trabalho (SST) são cruciais para identificar e controlar riscos ambientais, prevenindo doenças ocupacionais e acidentes. Elas permitem a análise e mitigação de impactos ambientais, garantindo a segurança dos trabalhadores e a proteção do meio ambiente.",
      features: ["Análise Ambiental", "Controle de Riscos", "Prevenção Doenças", "Proteção Ambiental"]
    }
  ];

  const treinamentos = [
    "Treinamento Introdutório de Segurança",
    "Treinamento Introdutório referente a NR-18",
    "Treinamento de CIPA e Designado de CIPA",
    "Treinamento sobre Uso, Guarda e Conservação de EPI",
    "Treinamento sobre Manuseio Seguro de Produtos Químicos",
    "Treinamento sobre Trabalho em Altura - NR 35",
    "Treinamento sobre Noções de Primeiros Socorros",
    "Treinamento sobre Prevenção e Controle de Perdas em SMS",
    "Treinamento sobre Noções de Prevenção e Combate a Sinistros (Incêndio)",
    "Palestra sobre Qualidade de Vida e Qualidade de Vida no Trabalho",
    "Palestras sobre Drogas e Alcoolismo",
    "Palestra sobre DST/IST",
    "Palestra sobre Motivação Organizacional",
    "Palestra sobre Acidentes Domésticos",
    "Palestra sobre Gestão do Tempo (pessoal e profissional)",
    "Treinamento sobre melhoria contínua de processo e suas ferramentas de análises",
    "Outros treinamentos desenvolvidos especialmente sob demanda da empresa"
  ];

  const documentacao = [
    "Elaboração de PGR (Indústria da Construção)",
    "Elaboração de PGR (Demais empresas)",
    "Elaboração de LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)",
    "Elaboração de PAE (Plano de Atendimento de Emergências)",
    "Elaboração de PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
    "Elaboração de Laudo de Insalubridade e Periculosidade",
    "Acompanhamento de Perícia",
    "Auditoria interna em Sistemas de Gestão de Segurança, Meio Ambiente e Saúde Ocupacional com base nas diretrizes da ISO 45001 e ISO 14001",
    "Implementação da Gestão de Químicos",
    "Elaboração de Inventário de Risco Químico",
    "Implementação da Gestão de Prevenção e Controle de Perdas na área de SMS",
    "Visitas Técnicas",
    "Elaboração de Ordem de Serviços",
    "Elaboração de Fichas de EPI",
    "Elaboração de Análise de Riscos",
    "Análise Ergonômica Preliminar - AEP",
    "Análise Ergonômica do Trabalho - AET",
    "Demais documentação direcionada para a Segurança, Meio Ambiente e Saúde Ocupacional"
  ];

  const avaliacoes = [
    "Vibração VCITVMB",
    "Dosimetria",
    "IBUTG",
    "Luximetria",
    "Avaliação de agentes químicos completa ou específica por agente"
  ];

  return (
    <div className="min-h-screen">
      <SSTHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="SST background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <HardHat className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">
                Saúde e Segurança do Trabalho
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-blue-400 bg-clip-text text-transparent">
              Especialistas em SST
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas em Saúde e Segurança do Trabalho, com foco na prevenção 
            de acidentes e promoção de ambientes de trabalho seguros e saudáveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2">
              <span>Entrar em Contato</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Fernando Brasil */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500/10 rounded-full px-6 py-2 mb-6">
                <Award className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 text-sm font-medium uppercase tracking-wide">
                  Especialista SST
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fernando Brasil
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traz consigo uma abordagem meticulosa e comprometimento excepcional. Com formação na área de 
                <strong className="text-blue-600"> Engenharia de Produção e Engenharia de Segurança do Trabalho</strong>, 
                possui como foco o gerenciamento eficiente dos normativos legais em SST.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Em conjunto com uma visão estratégica de operacionalização de atividades, assegura uma maior 
                segurança no cumprimento dos normativos legais, com maior qualidade na ligação entre SST e 
                Operação e com menor perdas (PCP).
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engenheiro de Produção</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engenheiro de Segurança do Trabalho</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Especialista em normativos legais SST</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visão estratégica de operacionalização</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/fer.png"
                alt="Fernando Brasil"
                className="w-full h-96 object-cover object-center rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-xl shadow-xl">
                <h4 className="font-bold text-lg mb-2">Especialização</h4>
                <p className="text-sm">Gerenciamento eficiente de normativos SST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="SST background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos Serviços <span className="text-blue-400">SST</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em Saúde e Segurança do Trabalho para garantir 
              ambientes seguros e conformidade legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serviços <span className="text-blue-600">Detalhados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Treinamentos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
                  <HardHat className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Treinamentos</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {treinamentos.map((treinamento, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{treinamento}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentação */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Documentação</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {documentacao.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avaliações */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Avaliações</h3>
              <div className="space-y-3">
                {avaliacoes.map((avaliacao, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{avaliacao}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}