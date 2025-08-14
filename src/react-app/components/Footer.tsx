import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const services = [
    "Consultoria Jurídica",
    "Auditoria Trabalhista",
    "Treinamentos SST",
    "Gerenciamento de Riscos",
    "Avaliações Ambientais",
    "Suporte Operacional"
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
    { name: "Blog", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/images/WhatsApp Image 2025-07-24 at 12.11.39-Photoroom.png" 
                alt="CFL Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Oferecemos consultoria jurídica personalizada e serviços especializados em SST, 
              garantindo crescimento sustentável e conformidade legal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-blue-500/20 p-2 rounded-lg transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-blue-500/20 p-2 rounded-lg transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-blue-500/20 p-2 rounded-lg transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-blue-500/20 p-2 rounded-lg transition-colors group">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Endereço a ser definido<br />
                    Cidade - Estado<br />
                    CEP: 00000-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm">(00) 0000-0000</p>
                  <p className="text-gray-400 text-xs">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300 text-sm">contato@cflsolucoes.com.br</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 CFL Centro de Soluções Empresariais. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: 00.000.000/0001-00
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
