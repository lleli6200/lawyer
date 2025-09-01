import { CheckCircle, Scale, Shield, Users } from 'lucide-react';
import SectionHeader from '@/react-app/components/common/SectionHeader';

export default function About() {
  const values = [
    { icon: Scale, title: "Justiça", description: "Buscamos sempre a solução mais justa e equilibrada." },
    { icon: Shield, title: "Integridade", description: "Mantemos os mais altos padrões éticos." },
    { icon: Users, title: "Compromisso", description: "Cada cliente recebe nossa dedicação total." }
  ];

  const achievements = [
    "Centro de soluções fundado com foco empresarial",
    "Especialização em Direito Empresarial e SST",
    "Consultoria personalizada para cada cliente",
    "Equipe multidisciplinar qualificada"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://mocha-cdn.com/019837ea-6653-789d-b2b6-1920481adc12/about-bg-library.jpg"
          alt="Law library background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-gray-100/95"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          icon={Scale}
          badge="Sobre Nós"
          title="Soluções Empresariais Completas"
          subtitle="A CFL Centro de Soluções Empresariais oferece consultoria jurídica personalizada e serviços especializados em SST."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <strong className="text-blue-600">CFL Centro de Soluções Empresariais</strong> nasceu da visão de oferecer 
              soluções completas para empresas, combinando consultoria jurídica especializada 
              com serviços de Saúde e Segurança do Trabalho.
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">Nossa Missão</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "Oferecer consultoria jurídica e em SST personalizada, caminhando 
                lado a lado com as empresas para garantir crescimento sustentável."
              </p>
              
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <p className="text-blue-400 font-semibold text-center">
                  "Soluções personalizadas para cada cliente!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}