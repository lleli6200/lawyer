import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, className = "" }: ServiceCardProps) {
  return (
    <div className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed text-center">
        {description}
      </p>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="text-gray-400 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}