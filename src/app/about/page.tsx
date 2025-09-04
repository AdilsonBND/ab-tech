'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChartBarIcon } from '@heroicons/react/24/outline';

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

  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const isPT = lang === 'pt';

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4 mt-20">

      <div className="max-w-[250px] w-full flex flex-col items-center justify-center mx-auto lg:items-start lg:justify-start lg:mx-0">
        <Image
          className="rounded-full mb-4 border border-white/30"
          src="/profile/I.jpeg"
          alt="Avatar"
          width={160}
          height={160}
        />
        <div>
          <span className="flex flex-col text-2xl f text-gray-300">
            Adilson L. Biondo Jr
          </span>
          <span className="text-sm f text-gray-500">
            {
              isPT ? 'Engenheiro de Software' : 'Software Engineer'}
          </span>
        </div>

      </div>
      <div className="w-full max-w-[700px]">
        <div className="flex flex-row justify-between items-center">
          <div className="cursor-pointer flex flex-row items-center text-sm font-bold bg-white/5 border border-white/10 hover:border-white/10 hover:bg-white/5 animation rounded-4xl items-align-center px-15"
              onClick={() => window.open('https://ab-tech-crm.vercel.app/', '_blank')}>
              <ChartBarIcon className="w-6 h-6 text-white/50 mr-3" /> 
              {isPT ? "VISITE NOSSO CRM" : "VISIT OUR CRM"}
          </div>

          <div className="flex gap-1">
            <button onClick={() => setLang('pt')}>
              <Image
                src="/flag/br.png"
                alt="Português"
                width={24}
                height={24}
                className={`rounded-full border ${isPT ? "border-white" : "border-transparent"}`}
              />
            </button>
            <button onClick={() => setLang('en')}>
              <Image
                src="/flag/us.png"
                alt="English"
                width={24}
                height={24}
                className={`rounded-full border ${!isPT ? "border-white" : "border-transparent"}`}
              />
            </button>
          </div>
        </div>
        <p className="mb-4 mt-6 text-gray-300">
          {isPT
            ? 'Especialista em integrações de sistemas legados com soluções modernas, atuando com APIs, serviços em nuvem, inteligência artificial, aplicações móveis e automações robustas.'
            : 'Specialist in integrating legacy systems with modern solutions, working with APIs, cloud services, artificial intelligence, mobile applications, and robust automations.'}
        </p>
        <p className="mb-8 text-gray-300">
          {isPT
            ? 'Combinando múltiplas tecnologias, desenvolvo soluções escaláveis e inteligentes, garantindo fluidez nos fluxos de dados, interoperabilidade entre plataformas e eficiência nos processos.'
            : 'Combining multiple technologies, I build scalable and intelligent solutions that ensure seamless data flows, platform interoperability, and process efficiency.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {techs.map((tech) => (
            <a
              key={tech.title}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-4 flex items-center gap-4 transition hover:scale-[1.02]"
            >
              <Image
                src={tech.src}
                alt={tech.title}
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <strong className="text-white text-lg">{tech.title}</strong>
                <span className="text-sm text-gray-400">
                  {isPT ? tech.descPT : tech.descEN}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}