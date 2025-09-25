import { Metadata } from 'next';
import Image from 'next/image';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import ClientAbout from '../components/ClientAbout';

export const metadata: Metadata = {
  title: "Sobre - Adilson Biondo | ABTech - Especialista em Integração de Sistemas Legados com IA",
  description: "Conheça Adilson Biondo, especialista em integração de sistemas legados com IA. Engenheiro de software com expertise em Node.js, Python, C#, .NET, MongoDB, MySQL, Docker, Kubernetes e muito mais. Atendimento em Campo Mourão, Maringá, Cianorte, Umuarama e região.",
  keywords: [
    "Adilson Biondo",
    "engenheiro de software",
    "especialista sistemas legados",
    "integração IA",
    "Node.js",
    "Python",
    "C#",
    ".NET",
    "MongoDB",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Campo Mourão",
    "Maringá",
    "Cianorte",
    "Umuarama",
    "Paraná",
    "desenvolvedor",
    "programador",
    "ABTech"
  ],
  authors: [{ name: "Adilson Biondo", url: "https://ab-tech.ia.br" }],
  creator: "ABTech",
  publisher: "ABTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: 'https://ab-tech.ia.br/about',
    siteName: 'ABTech - Integração de Sistemas Legados com IA',
    title: 'Sobre - Adilson Biondo | ABTech - Especialista em Integração de Sistemas Legados com IA',
    description: 'Conheça Adilson Biondo, especialista em integração de sistemas legados com IA. Engenheiro de software com expertise em múltiplas tecnologias.',
    images: [
      {
        url: '/profile/I.jpeg',
        width: 400,
        height: 400,
        alt: 'Adilson Biondo - Engenheiro de Software',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Sobre - Adilson Biondo | ABTech',
    description: 'Conheça Adilson Biondo, especialista em integração de sistemas legados com IA.',
    images: ['/profile/I.jpeg'],
    creator: '@abtech_ia',
  },
  alternates: {
    canonical: 'https://ab-tech.ia.br/about',
  },
};

const techs = [
  {
    title: 'Node.js',
    src: '/techs/node.png',
    descPT: 'Construção de integrações modernas, APIs e microsserviços escaláveis.',
    descEN: 'Modern integrations, scalable APIs, and microservices architecture.',
    href: 'https://nodejs.org/',
  },
  {
    title: 'Moleculer',
    src: '/techs/moleculer.png',
    descPT: 'Framework para microsserviços baseado em Node.js com alta performance.',
    descEN: 'High-performance microservices framework built on Node.js.',
    href: 'https://moleculer.services/',
  },
  {
    title: 'Express.js',
    src: '/techs/exjs.png',
    descPT: 'Framework minimalista para criação de APIs REST com Node.js.',
    descEN: 'Minimalist framework for building RESTful APIs with Node.js.',
    href: 'https://expressjs.com/',
  },
  {
    title: 'Fastify',
    src: '/techs/fastfy.png',
    descPT: 'Framework rápido e eficiente para construção de APIs em Node.js.',
    descEN: 'Fast and efficient framework for building APIs in Node.js.',
    href: 'https://fastify.dev/',
  },
  {
    title: 'NestJS',
    src: '/techs/nest.png',
    descPT: 'Framework TypeScript para construção de backends modulares e testáveis.',
    descEN: 'TypeScript framework for building modular, testable backends.',
    href: 'https://nestjs.com/',
  },
  {
    title: 'Next.js',
    src: '/techs/next.png',
    descPT: 'Framework React com suporte a SSR, SSG e rotas dinâmicas.',
    descEN: 'React framework with SSR, SSG, and dynamic routing support.',
    href: 'https://nextjs.org/',
  },
  {
    title: 'Vue.js',
    src: '/techs/vue.png',
    descPT: 'Framework progressivo para construção de interfaces web reativas.',
    descEN: 'Progressive framework for building reactive web interfaces.',
    href: 'https://vuejs.org/',
  },
  {
    title: 'React Native',
    src: '/techs/react-native.png',
    descPT: 'Desenvolvimento de aplicativos móveis nativos usando JavaScript.',
    descEN: 'Native mobile app development using JavaScript.',
    href: 'https://reactnative.dev/',
  },
  {
    title: 'C#',
    src: '/techs/c-sharp.png',
    descPT: 'Integração com DLLs, aplicações Windows e sistemas corporativos.',
    descEN: 'Integration with DLLs, Windows apps, and enterprise systems.',
    href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    title: '.NET',
    src: '/techs/dotnet.png',
    descPT: 'Plataforma robusta para desenvolvimento de sistemas backend e serviços.',
    descEN: 'Robust platform for backend systems and service development.',
    href: 'https://dotnet.microsoft.com/',
  },
  {
    title: 'MongoDB',
    src: '/techs/mongo.png',
    descPT: 'Banco NoSQL para dados flexíveis e escaláveis em sistemas modernos.',
    descEN: 'NoSQL database for flexible and scalable data in modern systems.',
    href: 'https://www.mongodb.com/',
  },
  {
    title: 'MySQL',
    src: '/techs/mysql.png',
    descPT: 'Banco de dados relacional amplamente utilizado em aplicações web.',
    descEN: 'Widely used relational database for web applications.',
    href: 'https://www.mysql.com/',
  },
  {
    title: 'Python',
    src: '/techs/py.png',
    descPT: 'Linguagem para automações, scripts e soluções com IA e dados.',
    descEN: 'Language for automation, scripting, AI and data solutions.',
    href: 'https://www.python.org/',
  },
  {
    title: 'Docker',
    src: '/techs/docker.png',
    descPT: 'Containerização de aplicações para ambientes isolados e portáveis.',
    descEN: 'Application containerization for isolated and portable environments.',
    href: 'https://www.docker.com',
  },
  {
    title: 'Kubernetes',
    src: '/techs/kube.png',
    descPT: 'Orquestração de contêineres para escalar, gerenciar e automatizar aplicações em nuvem.',
    descEN: 'Container orchestration to scale, manage, and automate cloud applications.',
    href: 'https://kubernetes.io/',
  },
];

export default function About() {
  return (
    <>
      {/* Conteúdo estático para SEO - visível para crawlers */}
      <div className="sr-only">
        <h1>Sobre - Adilson Biondo | ABTech - Especialista em Integração de Sistemas Legados com IA</h1>
        <h2>Adilson L. Biondo Jr - Engenheiro de Software</h2>
        <p>Especialista em integrações de sistemas legados com soluções modernas, atuando com APIs, serviços em nuvem, inteligência artificial, aplicações móveis e automações robustas.</p>
        <p>Combinando múltiplas tecnologias, desenvolvo soluções escaláveis e inteligentes, garantindo fluidez nos fluxos de dados, interoperabilidade entre plataformas e eficiência nos processos.</p>
        
        <h2>Tecnologias e Especialidades</h2>
        <h3>Backend e APIs</h3>
        <p>Node.js, Express.js, Fastify, NestJS, Moleculer - Construção de integrações modernas, APIs e microsserviços escaláveis com alta performance.</p>
        
        <h3>Frontend e Mobile</h3>
        <p>Next.js, Vue.js, React Native - Desenvolvimento de interfaces web reativas e aplicativos móveis nativos usando JavaScript.</p>
        
        <h3>Linguagens de Programação</h3>
        <p>C#, .NET, Python - Integração com DLLs, aplicações Windows, sistemas corporativos, automações, scripts e soluções com IA e dados.</p>
        
        <h3>Bancos de Dados</h3>
        <p>MongoDB, MySQL - Bancos NoSQL para dados flexíveis e escaláveis, e bancos relacionais amplamente utilizados em aplicações web.</p>
        
        <h3>DevOps e Infraestrutura</h3>
        <p>Docker, Kubernetes - Containerização de aplicações para ambientes isolados e portáveis, orquestração de contêineres para escalar, gerenciar e automatizar aplicações em nuvem.</p>
        
        <h2>Experiência e Localização</h2>
        <p>Atendimento especializado em Campo Mourão, Maringá, Cianorte, Umuarama e toda a região Centro-Oeste do Paraná. Especialista em integração de sistemas legados com IA, modernização de sistemas antigos e criação de agentes de atendimento inteligentes.</p>
      </div>
      
      {/* Componente interativo */}
      <ClientAbout />
    </>
  );
}