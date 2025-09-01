import { Building2, Users, Briefcase, ArrowRight, HardHat, Shield, FileCheck } from 'lucide-react';
import { Link } from 'react-router';
import ServiceCard from '@/react-app/components/common/ServiceCard';
import { companyServices, sstServices } from '@/react-app/data/mockData';

export default function Services() {
  const serviceIcons = [Building2, Users, Briefcase];
  const sstIcons = [HardHat, Shield, FileCheck];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            Oferecemos consultoria jurídica personalizada e serviços especializados em SST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={serviceIcons[index]}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Conheça Também Nossos Serviços de SST
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Oferecemos também serviços especializados em Saúde e Segurança do Trabalho.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {sstServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={sstIcons[index]}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
            
            <Link
              to="/sst"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
            >
              <span>Saiba Mais sobre SST</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}