import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Endereço a ser definido",
        "Cidade - Estado",
        "CEP: 00000-000"
      ]
    },
    {
      icon: Phone,
      title: "Telefones",
      details: [
        "(00) 0000-0000",
        "(00) 9 0000-0000",
        "Plantão de dúvidas"
      ]
    },
    {
      icon: Mail,
      title: "E-mails",
      details: [
        "contato@cflsolucoes.com.br",
        "juridico@cflsolucoes.com.br",
        "sst@cflsolucoes.com.br"
      ]
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 8h às 18h",
        "Sábados: Sob demanda",
        "Plantão de dúvidas"
      ]
    }
  ];

  const subjects = [
    "Consultoria Jurídica",
    "Auditoria Trabalhista",
    "Treinamentos SST",
    "Gerenciamento de Riscos",
    "Avaliações Ambientais",
    "Suporte Operacional",
    "Consulta Geral"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wide">
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fale <span className="text-blue-400">Conosco</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aqui para ajudá-lo. Entre em contato e descubra como podemos 
            oferecer soluções personalizadas para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-center text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject} className="bg-gray-800">
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva suas necessidades empresariais..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Nossa Localização
              </h3>
              <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Endereço a definir</p>
                  <p className="text-gray-400">Cidade - Estado</p>
                  <p className="text-gray-400">CEP: 00000-000</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nosso escritório está estrategicamente localizado para atender 
                empresas de diversos segmentos, oferecendo fácil acesso e 
                infraestrutura completa para reuniões e consultas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-4">
                Plantão de Dúvidas
              </h4>
              <p className="text-gray-300 mb-4">
                Dúvidas jurídicas ou sobre SST? Nosso plantão está disponível 
                para orientações que sua empresa precisa.
              </p>
              <div className="flex items-center space-x-2 text-blue-400 font-semibold">
                <Phone className="w-4 h-4" />
                <span>(00) 9 0000-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
