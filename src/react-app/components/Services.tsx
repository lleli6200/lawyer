import { Building2, Users, Briefcase, Home, Car, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Consultoria Jurídica Empresarial",
      description: "Consultoria personalizada desde orientações do dia a dia até revisão completa das práticas empresariais, garantindo crescimento sustentável.",
      features: ["Auditoria Trabalhista", "Elaboração de Contratos", "Defesa em Reclamações", "Plantão de Dúvidas"]
    },
    {
      icon: Users,
      title: "Auditoria e Compliance",
      description: "Auditoria trabalhista com foco no cumprimento da legislação e prevenção do contencioso, incluindo normas de SST.",
      features: ["Auditoria Trabalhista", "Compliance SST", "Políticas Internas", "Acompanhamento Perícias"]
    },
    {
      icon: Briefcase,
      title: "Suporte Operacional",
      description: "Suporte jurídico completo em todas as operações empresariais, com foco preventivo e consultivo.",
      features: ["Suporte Operacional", "Consultoria Preventiva", "Acompanhamento Contínuo", "Soluções Personalizadas"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://mocha-cdn.com/019837ea-6653-789d-b2b6-1920481adc12/services-bg-courtroom.jpg"
          alt="Courtroom background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções Empresariais <span className="text-blue-400">Completas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos consultoria jurídica personalizada e serviços especializados em SST, 
            garantindo crescimento sustentável e conformidade legal para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-gray-900" />
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
              
              <button className="w-full bg-transparent border border-blue-500/30 text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Conheça Também Nossos Serviços de SST
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Oferecemos também serviços especializados em Saúde e Segurança do Trabalho, 
              incluindo treinamentos, gerenciamento de riscos e avaliações ambientais.
            </p>
            <Link
              to="/sst"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto inline-flex"
            >
              <span>Conheça Nossos Serviços SST</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
