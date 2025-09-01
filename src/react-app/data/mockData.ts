// Centralized mock data to avoid duplication across files
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  tags: string[];
  is_published: boolean;
  read_time: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  post_count: number;
}

export interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  education: string;
  achievements: string[];
  image: string;
  imagePosition: string;
}

export const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Reforma Trabalhista: O que mudou para as empresas",
    slug: "reforma-trabalhista-mudancas-empresas",
    excerpt: "Entenda as principais mudanças da reforma trabalhista e como elas impactam as relações de trabalho nas empresas.",
    content: `## Introdução\n\nA reforma trabalhista trouxe mudanças significativas para as relações de trabalho no Brasil.\n\n## Principais Mudanças\n\n### 1. Negociação Coletiva\nA reforma fortaleceu a negociação coletiva.\n\n### 2. Jornada de Trabalho\nForam criadas novas modalidades de jornada.\n\n## Conclusão\n\nÉ fundamental que as empresas se adaptem às novas regras.`,
    author: "Dr. Carlos Mendoza",
    category: "Direito Trabalhista",
    image_url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Reforma Trabalhista", "Empresas", "Legislação"],
    is_published: true,
    read_time: "5 min",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LGPD: Como adequar sua empresa à Lei Geral de Proteção de Dados",
    slug: "lgpd-adequacao-empresa-protecao-dados",
    excerpt: "Guia completo para adequar sua empresa à LGPD e evitar multas e sanções.",
    content: `## O que é a LGPD?\n\nA Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regula o tratamento de dados pessoais.\n\n## Principais Obrigações\n\n### 1. Consentimento\nÉ necessário obter consentimento explícito.\n\n### 2. Transparência\nAs empresas devem ser transparentes.\n\n## Penalidades\n\nO descumprimento pode resultar em multas.`,
    author: "Dra. Juliana Santos",
    category: "Direito Digital",
    image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["LGPD", "Proteção de Dados", "Compliance"],
    is_published: true,
    read_time: "7 min",
    created_at: "2024-01-10T14:30:00Z",
    updated_at: "2024-01-10T14:30:00Z"
  }
];

export const mockCategories: Category[] = [
  { id: 1, name: 'Direito Trabalhista', slug: 'direito-trabalhista', color: '#3b82f6', post_count: 5 },
  { id: 2, name: 'Direito Digital', slug: 'direito-digital', color: '#10b981', post_count: 3 },
  { id: 3, name: 'Saúde e Segurança', slug: 'saude-seguranca', color: '#ef4444', post_count: 4 }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Carlos Giovani Fernandes",
    role: "Advogado",
    specialization: "Direito Empresarial, Saúde e segurança e meio ambiente",
    experience: "Especialista em consultivo empresarial",
    education: "Técnico em Segurança do Trabalho e Advogado",
    achievements: [
      "Técnico em Segurança do Trabalho desde 2005",
      "Especialista em consultivo empresarial"
    ],
    image: "/images/WhatsApp Image 2025-07-29 at 13.59.45 copy.jpeg",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Fernando Brasil",
    role: "Especialista em SST",
    specialization: "Engenharia de Segurança do Trabalho",
    experience: "Especialista em normativos legais",
    education: "Engenheiro de Produção e Engenheiro de Segurança",
    achievements: [
      "Gerenciamento eficiente de normativos SST",
      "Visão estratégica de operacionalização"
    ],
    image: "/images/fer.png",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Leandro Moreira Evangelista",
    role: "Engenheiro de Segurança do Trabalho",
    specialization: "Gestão de Riscos Ocupacionais e Prevenção de Acidentes",
    experience: "Especialista em gestão de riscos ocupacionais",
    education: "Engenheiro de Segurança do Trabalho - UFMG (2004)",
    achievements: [
      "Gestão de riscos ocupacionais",
      "Prevenção de acidentes de trabalho"
    ],
    image: "/images/WhatsApp Image 2025-07-24 at 14.56.52.jpeg",
    imagePosition: "object-[center_10%]"
  }
];

export const sstServices = [
  {
    title: "Treinamentos em SST",
    description: "Treinamentos cruciais para prevenção de acidentes e doenças ocupacionais.",
    features: ["Treinamentos Específicos", "Conscientização Equipes", "Capacitação Gestores"]
  },
  {
    title: "Gerenciamento de Riscos",
    description: "Identificação, avaliação e controle de riscos ocupacionais.",
    features: ["Identificação de Riscos", "Avaliação e Controle", "Conformidade Legal"]
  },
  {
    title: "Avaliações Ambientais",
    description: "Análise e controle de riscos ambientais no trabalho.",
    features: ["Análise Ambiental", "Controle de Riscos", "Prevenção Doenças"]
  }
];

export const companyServices = [
  {
    title: "Consultoria Jurídica Empresarial",
    description: "Consultoria personalizada desde orientações do dia a dia até revisão completa das práticas empresariais.",
    features: ["Auditoria Trabalhista", "Elaboração de Contratos", "Defesa em Reclamações"]
  },
  {
    title: "Auditoria e Compliance",
    description: "Auditoria trabalhista com foco no cumprimento da legislação e prevenção do contencioso.",
    features: ["Auditoria Trabalhista", "Compliance SST", "Políticas Internas"]
  },
  {
    title: "Suporte Operacional",
    description: "Suporte jurídico completo em todas as operações empresariais.",
    features: ["Suporte Operacional", "Consultoria Preventiva", "Acompanhamento Contínuo"]
  }
];