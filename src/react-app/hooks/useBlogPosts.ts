import { useState, useEffect } from 'react';

interface BlogPost {
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

// Mock data for development
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Reforma Trabalhista: O que mudou para as empresas",
    slug: "reforma-trabalhista-mudancas-empresas",
    excerpt: "Entenda as principais mudanças da reforma trabalhista e como elas impactam as relações de trabalho nas empresas.",
    content: `## Introdução

A reforma trabalhista trouxe mudanças significativas para as relações de trabalho no Brasil. Neste artigo, vamos abordar os principais pontos que as empresas precisam conhecer.

## Principais Mudanças

### 1. Negociação Coletiva
A reforma fortaleceu a negociação coletiva, permitindo que acordos entre sindicatos e empresas prevaleçam sobre a legislação em diversos pontos.

### 2. Jornada de Trabalho
Foram criadas novas modalidades de jornada, como o trabalho intermitente e a jornada 12x36.

### 3. Férias
As férias podem ser divididas em até três períodos, sendo que um deles não pode ser inferior a 14 dias.

## Conclusão

É fundamental que as empresas se adaptem às novas regras para evitar problemas jurídicos e garantir o cumprimento da legislação.`,
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
    content: `## O que é a LGPD?

A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regula o tratamento de dados pessoais.

## Principais Obrigações

### 1. Consentimento
É necessário obter consentimento explícito para o tratamento de dados pessoais.

### 2. Transparência
As empresas devem ser transparentes sobre como coletam e usam os dados.

### 3. Segurança
Implementar medidas de segurança adequadas para proteger os dados.

## Penalidades

O descumprimento da LGPD pode resultar em multas de até 2% do faturamento da empresa.`,
    author: "Dra. Juliana Santos",
    category: "Direito Digital",
    image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["LGPD", "Proteção de Dados", "Compliance"],
    is_published: true,
    read_time: "7 min",
    created_at: "2024-01-10T14:30:00Z",
    updated_at: "2024-01-10T14:30:00Z"
  },
  {
    id: 3,
    title: "Direito de Família: Guarda Compartilhada vs Guarda Unilateral",
    slug: "direito-familia-guarda-compartilhada-unilateral",
    excerpt: "Entenda as diferenças entre guarda compartilhada e unilateral e quando cada uma é aplicada.",
    content: `## Tipos de Guarda

No direito de família brasileiro, existem diferentes tipos de guarda que podem ser estabelecidos.

### Guarda Compartilhada
Na guarda compartilhada, ambos os pais têm responsabilidades e direitos iguais sobre os filhos.

### Guarda Unilateral
Na guarda unilateral, apenas um dos pais detém a guarda, enquanto o outro tem direito de visitas.

## Quando é aplicada cada tipo?

A guarda compartilhada é a regra, sendo aplicada sempre que possível. A unilateral é exceção.`,
    author: "Dra. Marina Silva",
    category: "Direito de Família",
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Guarda", "Família", "Filhos"],
    is_published: true,
    read_time: "4 min",
    created_at: "2024-01-05T09:15:00Z",
    updated_at: "2024-01-05T09:15:00Z"
  },
  {
    id: 4,
    title: "NR-35: Trabalho em Altura - Principais Requisitos de Segurança",
    slug: "nr-35-trabalho-altura-requisitos-seguranca",
    excerpt: "Conheça os principais requisitos da NR-35 para trabalho em altura e como implementar medidas de segurança eficazes.",
    content: `## Introdução à NR-35

A Norma Regulamentadora 35 (NR-35) estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores.

## O que é considerado trabalho em altura?

Considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.

### Principais Medidas de Proteção

**1. Medidas de Proteção Coletiva**
- Sistemas de proteção contra quedas
- Guarda-corpos e sistemas de proteção
- Plataformas de trabalho seguras

**2. Medidas de Proteção Individual**
- Cinturão de segurança tipo paraquedista
- Capacetes de segurança
- Calçados de segurança com solado antiderrapante

**3. Treinamento e Capacitação**
- Treinamento específico para trabalho em altura
- Reciclagem a cada 2 anos
- Avaliação médica específica

## Responsabilidades do Empregador

- Garantir a implementação das medidas de proteção
- Assegurar a realização da Análise de Risco (AR)
- Desenvolver procedimento operacional para as atividades
- Assegurar que todo trabalhador receba treinamento

## Conclusão

O cumprimento da NR-35 é fundamental para prevenir acidentes graves e fatais relacionados ao trabalho em altura, protegendo a vida dos trabalhadores.`,
    author: "Leandro Moreira Evangelista",
    category: "Saúde e Segurança",
    image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["NR-35", "Trabalho em Altura", "Segurança", "Prevenção"],
    is_published: true,
    read_time: "6 min",
    created_at: "2024-01-20T16:00:00Z",
    updated_at: "2024-01-20T16:00:00Z"
  },
  {
    id: 5,
    title: "Programa de Gerenciamento de Riscos (PGR): Como Implementar na sua Empresa",
    slug: "programa-gerenciamento-riscos-pgr-implementar",
    excerpt: "Entenda como implementar o Programa de Gerenciamento de Riscos (PGR) e garantir a segurança dos trabalhadores.",
    content: `## O que é o PGR?

O Programa de Gerenciamento de Riscos (PGR) é um conjunto de medidas de prevenção que visa preservar a saúde e integridade dos trabalhadores através da antecipação, reconhecimento, avaliação e controle da ocorrência de riscos ambientais.

## Estrutura do PGR

### 1. Inventário de Riscos
- Identificação de todos os riscos presentes no ambiente de trabalho
- Mapeamento das atividades e processos
- Classificação dos riscos por categoria

### 2. Plano de Ação
- Medidas de prevenção e controle
- Cronograma de implementação
- Responsáveis pelas ações
- Recursos necessários

### 3. Monitoramento
- Acompanhamento da eficácia das medidas
- Revisões periódicas do programa
- Indicadores de desempenho

## Benefícios da Implementação

**Para a Empresa:**
- Redução de acidentes e doenças ocupacionais
- Diminuição de custos com afastamentos
- Melhoria da produtividade
- Conformidade legal

**Para os Trabalhadores:**
- Ambiente de trabalho mais seguro
- Redução de riscos à saúde
- Maior conscientização sobre segurança

## Passos para Implementação

1. **Diagnóstico inicial** - Avaliação da situação atual
2. **Planejamento** - Definição de objetivos e metas
3. **Implementação** - Execução das medidas planejadas
4. **Monitoramento** - Acompanhamento dos resultados
5. **Revisão** - Ajustes e melhorias contínuas

## Conclusão

O PGR é uma ferramenta essencial para a gestão da segurança e saúde no trabalho, contribuindo para a criação de ambientes laborais mais seguros e saudáveis.`,
    author: "Fernando Brasil",
    category: "Saúde e Segurança",
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["PGR", "Gerenciamento de Riscos", "SST", "Prevenção"],
    is_published: true,
    read_time: "8 min",
    created_at: "2024-01-25T11:30:00Z",
    updated_at: "2024-01-25T11:30:00Z"
  },
  {
    id: 6,
    title: "CIPA: Importância e Funcionamento da Comissão Interna de Prevenção de Acidentes",
    slug: "cipa-comissao-interna-prevencao-acidentes",
    excerpt: "Saiba como funciona a CIPA e qual sua importância na prevenção de acidentes de trabalho.",
    content: `## O que é a CIPA?

A Comissão Interna de Prevenção de Acidentes (CIPA) é uma comissão constituída por representantes dos empregados e empregadores, com o objetivo de prevenir acidentes e doenças decorrentes do trabalho.

## Objetivos da CIPA

### Principais Finalidades
- Observar e relatar condições de risco nos ambientes de trabalho
- Solicitar medidas para reduzir ou eliminar riscos
- Discutir acidentes ocorridos e suas causas
- Promover a conscientização sobre prevenção de acidentes

## Composição da CIPA

### Representantes dos Empregados
- Eleitos pelos trabalhadores em votação secreta
- Mandato de um ano, permitida uma reeleição
- Estabilidade no emprego desde a candidatura até um ano após o mandato

### Representantes dos Empregadores
- Indicados pelo empregador
- Mesmo número de representantes dos empregados

## Atribuições dos Cipeiros

**Identificação de Riscos:**
- Realizar inspeções nos locais de trabalho
- Identificar situações de risco
- Propor medidas preventivas

**Investigação de Acidentes:**
- Participar da investigação de acidentes
- Analisar causas e propor soluções
- Acompanhar a implementação de medidas corretivas

**Educação e Treinamento:**
- Promover campanhas de segurança
- Orientar trabalhadores sobre prevenção
- Participar de treinamentos específicos

## Reuniões da CIPA

- Reuniões ordinárias mensais
- Reuniões extraordinárias quando necessário
- Atas de todas as reuniões
- Participação de técnicos quando necessário

## Benefícios da CIPA Ativa

- Redução significativa de acidentes
- Melhoria do clima organizacional
- Maior conscientização sobre segurança
- Cumprimento das obrigações legais

## Conclusão

A CIPA é fundamental para a prevenção de acidentes e promoção da segurança no trabalho, sendo uma ferramenta essencial para empresas comprometidas com a saúde de seus colaboradores.`,
    author: "Carlos Giovani Fernandes",
    category: "Saúde e Segurança",
    image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["CIPA", "Prevenção de Acidentes", "Segurança do Trabalho", "NR-5"],
    is_published: true,
    read_time: "7 min",
    created_at: "2024-01-30T14:15:00Z",
    updated_at: "2024-01-30T14:15:00Z"
  }
];

const mockCategories = ["Direito Trabalhista", "Direito Digital", "Direito de Família", "Direito Empresarial", "Saúde e Segurança"];

export function useBlogPosts(category?: string) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let filteredPosts = mockPosts;
        if (category && category !== 'all') {
          filteredPosts = mockPosts.filter(post => post.category === category);
        }
        
        setPosts(filteredPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundPost = mockPosts.find(p => p.slug === slug);
        setPost(foundPost || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
}

export function useBlogCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        setCategories(mockCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
}