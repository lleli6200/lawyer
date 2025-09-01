import { Award } from 'lucide-react';
import SectionHeader from '@/react-app/components/common/SectionHeader';
import TeamCard from '@/react-app/components/common/TeamCard';
import { teamMembers } from '@/react-app/data/mockData';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Award}
          badge="Nossa Equipe"
          title="Profissionais Especializados"
          subtitle="Nossa equipe multidisciplinar combina expertise jurídica e técnica em SST, oferecendo soluções completas para empresas de todos os segmentos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}