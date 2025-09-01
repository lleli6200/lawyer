import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const services = [
    "Consultoria Jurídica", "Auditoria Trabalhista", "Treinamentos SST",
    "Gerenciamento de Riscos", "Avaliações Ambientais", "Suporte Operacional"
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
    { name: "Blog", href: "#" }
  ];

  const contacts = [
    { name: "Carlos Giovani", phone: "(31) 7559-5742" },
    { name: "Fernando Brasil", phone: "(31) 9246-5739" },
    { name: "Leandro", phone: "(31) 8392-8274" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/images/WhatsApp Image 2025-07-24 at 12.11.39-Photoroom.png" alt="CFL Logo" className="w-20 h-20 object-contain mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Oferecemos consultoria jurídica personalizada e serviços especializados em SST.
            </p>
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-2">Nossos Contatos:</p>
                  {contacts.map((contact, index) => (
                    <p key={index} className="text-gray-300 text-sm">{contact.name}: {contact.phone}</p>
                  ))}
                  <p className="text-gray-400 text-xs mt-2">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300 text-sm">contato@cflsolucoes.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CFL Centro de Soluções Empresariais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}