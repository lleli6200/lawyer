import { Linkedin, Mail, Award, BookOpen } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Carlos Giovani Fernandes",
      role: "Sócio Fundador - Advogado",
      specialization: "Direito Empresarial e SST",
      experience: "19 anos de experiência em SST, 3 anos como Advogado",
      education: "Técnico em Segurança do Trabalho e Advogado",
      achievements: [
        "Técnico em Segurança do Trabalho desde 2005",
        "Especialista em consultivo empresarial",
        "Experiência em diversos segmentos industriais"
      ],
      image: "/images/Captura de tela 2025-07-24 111413.png"
    },
    {
      name: "Fernando Brasil",
      role: "Especialista em SST",
      specialization: "Engenharia de Segurança do Trabalho",
      experience: "Especialista em normativos legais",
      education: "Engenheiro de Produção e Engenheiro de Segurança",
      achievements: [
        "Gerenciamento eficiente de normativos SST",
        "Visão estratégica de operacionalização",
        "Especialista em ligação SST e Operação"
      ],
      image: "/images/fer.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium uppercase tracking-wide">
              Nossa Equipe
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Profissionais <span className="text-blue-600">Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe multidisciplinar combina expertise jurídica e técnica em SST, 
            oferecendo soluções completas para empresas de todos os segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-3">{member.specialization}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500 leading-relaxed">{member.education}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500 leading-relaxed">{member.experience}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Especializações:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
        </div>
      </div>
    </section>
  );
}
