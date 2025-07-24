import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { useSiteSettings } from '@/react-app/hooks/useSiteSettings';

export default function Hero() {
  const { getSetting } = useSiteSettings();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://mocha-cdn.com/019837ea-6653-789d-b2b6-1920481adc12/hero-bg-justice.jpg"
          alt="Justice background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/5 to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-blue-400 bg-clip-text text-transparent">
            Consultoria Jurídica e SST Para Seu Negócio
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Na CFL Centro de Soluções Empresariais, oferecemos consultoria personalizada em direito empresarial e saúde e segurança do trabalho. Garantimos crescimento sustentável e práticas alinhadas aos requisitos legais.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2">
            <span>Entrar em Contato</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            Nossos Serviços
          </button>
        </div>

      </div>
    </section>
  );
}