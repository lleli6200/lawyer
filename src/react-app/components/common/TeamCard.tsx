import { Linkedin, Mail, Award, BookOpen } from 'lucide-react';
import { TeamMember } from '@/react-app/data/mockData';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-64 object-cover ${member.imagePosition} group-hover:scale-105 transition-transform duration-500`}
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
          <span className="text-sm text-gray-500">{member.education}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Especializações:</h4>
          <ul className="space-y-1">
            {member.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}