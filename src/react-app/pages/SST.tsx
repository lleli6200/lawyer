import { useEffect } from 'react';
import SSTHeader from '@/react-app/components/SSTHeader';
import Footer from '@/react-app/components/Footer';
import WhatsAppFloat from '@/react-app/components/WhatsAppFloat';
import ServiceCard from '@/react-app/components/common/ServiceCard';
import { HardHat, Shield, FileCheck, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { sstServices } from '@/react-app/data/mockData';

export default function SSTPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = [HardHat, Shield, FileCheck];

  const specialists = [
    {
      name: "Fernando Brasil",
      role: "Especialista em SST",
      description: "Engenheiro de Produção e Segurança do Trabalho com foco no gerenciamento eficiente dos normativos legais em SST.",
      image: "/images/fer.png",
      achievements: ["Engenheiro de Produção", "Engenheiro de Segurança do Trabalho", "Especialista em normativos legais SST"]
    },
    {
      name: "Leandro Moreira Evangelista",
      role: "Engenheiro de Segurança do Trabalho",
      description: "Formado pela UFMG em 2004, especialista em gestão de riscos ocupacionais e prevenção de acidentes.",
      image: "/images/WhatsApp Image 2025-07-24 at 14.56.52.jpeg",
      achievements: ["Engenheiro de Segurança - UFMG (2004)", "Gestão de riscos ocupacionais", "Prevenção de acidentes"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SSTHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="SST background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <HardHat className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Saúde e Segurança do Trabalho</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-blue-400 bg-clip-text text-transparent">
              Especialistas em SST
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas em Saúde e Segurança do Trabalho, com foco na prevenção 
            de acidentes e promoção de ambientes seguros.
          </p>

          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto">
            <span>Entrar em Contato</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 rounded-full px-6 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium uppercase tracking-wide">Nossa Equipe SST</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Especialistas em <span className="text-blue-600">SST</span>
            </h2>
          </div>

          {specialists.map((specialist, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index > 0 ? 'mt-20' : ''}`}>
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <div className="relative">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-96 object-cover object-center rounded-2xl shadow-2xl"
                  />
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} bg-blue-500 text-white p-6 rounded-xl shadow-xl`}>
                    <h4 className="font-bold text-lg mb-2">Especialização</h4>
                    <p className="text-sm">{specialist.role}</p>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{specialist.name}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{specialist.description}</p>

                <div className="space-y-4">
                  {specialist.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
              Soluções completas em Saúde e Segurança do Trabalho para garantir ambientes seguros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sstServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={serviceIcons[index]}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}