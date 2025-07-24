import { useState, useEffect } from 'react';

interface SiteSettings {
  [key: string]: {
    value: string;
    type: string;
  };
}

// Mock settings data
const mockSettings: SiteSettings = {
  site_name: { value: 'CFL', type: 'text' },
  site_description: { value: 'Soluções empresariais completas - Consultoria jurídica e SST', type: 'text' },
  hero_title: { value: 'Consultoria Jurídica e SST Para Seu Negócio', type: 'text' },
  hero_subtitle: { value: 'Na CFL Centro de Soluções Empresariais, oferecemos consultoria personalizada em direito empresarial e saúde e segurança do trabalho.', type: 'textarea' },
  about_title: { value: 'Soluções Empresariais Completas', type: 'text' },
  about_description: { value: 'A CFL Centro de Soluções Empresariais oferece consultoria jurídica personalizada e serviços especializados em SST, garantindo crescimento sustentável.', type: 'textarea' },
  primary_color: { value: '#3b82f6', type: 'color' },
  secondary_color: { value: '#1f2937', type: 'color' },
  contact_phone: { value: '(00) 0000-0000', type: 'text' },
  contact_email: { value: 'contato@cflsolucoes.com.br', type: 'email' },
  contact_address: { value: 'Endereço a ser definido\nCidade - Estado\nCEP: 00000-000', type: 'textarea' },
  whatsapp_number: { value: '5500000000000', type: 'text' }
};

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        setSettings(mockSettings);
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const getSetting = (key: string, defaultValue = '') => {
    return settings[key]?.value || defaultValue;
  };

  return { settings, loading, getSetting };
}