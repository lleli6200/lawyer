import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ icon: Icon, badge, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="inline-flex items-center bg-blue-500/10 rounded-full px-6 py-2 mb-6">
        <Icon className="w-4 h-4 text-blue-600 mr-2" />
        <span className="text-blue-600 text-sm font-medium uppercase tracking-wide">
          {badge}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}