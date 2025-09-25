import { ChartBarIcon } from '@heroicons/react/24/outline';
import AboutButton from "./components/AboutButton";
import RevealText from "./components/RevealText";
import Slider from "./components/Slider";
import WhatsAppButton from "./components/WhatsAppButton";
import LocalSEO from "./components/LocalSEO";
import React from "react";
import Image from "next/image";
import ViewImageModal from "./components/ViewImage";
import ClientPage from "./components/ClientPage";

export default function Home() {
    return (
        <>
            {/* Conteúdo estático para SEO - visível para crawlers */}
            <div className="sr-only">
                <h1>ABTech - Integração de Sistemas Legados com IA | Agentes de Atendimento Inteligentes</h1>
                <p>Especialistas em integração de sistemas antigos com IA em Campo Mourão, Maringá, Cianorte, Umuarama e região. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados com soluções em nuvem, automação e inteligência artificial.</p>
                <h2>Integração de Sistemas Legados com IA</h2>
                <p>Nossa especialidade é integrar qualquer tipo de base de dados (TXT, CSV, Excel, bancos antigos) com inteligência artificial, permitindo que seus clientes façam ofertas personalizadas, negociação automática de descontos e geração inteligente de orçamentos.</p>
                <h2>Sistema CRM Completo em Nuvem</h2>
                <p>Oferecemos um sistema CRM completo em nuvem, construído com as mais modernas tecnologias, para empresas que desejam modernizar e automatizar seus processos de vendas e relacionamento com clientes.</p>
                <h2>Agentes de Atendimento Inteligentes</h2>
                <p>Criamos agentes de atendimento inteligentes e chatbots que se integram perfeitamente com sistemas legados, oferecendo atendimento automatizado e personalizado para seus clientes.</p>
                <h2>Transformação Digital</h2>
                <p>Modernize sua empresa com nossa solução completa: integração de dados com IA, CRM avançado, que permite ofertas personalizadas e negociação automática de descontos para seus clientes.</p>
                <h2>Automação Inteligente</h2>
                <p>Transformamos dados complexos em insights acionáveis, automatizando processos de vendas e maximizando oportunidades de negócio com inteligência artificial.</p>
                <h2>Tecnologias Utilizadas</h2>
                <p>Utilizamos as mais modernas tecnologias: Node.js, Express.js, Fastify, NestJS, Next.js, Vue.js, React Native, C#, .NET, MongoDB, MySQL, Python, Docker, Kubernetes e muito mais.</p>
                <h2>Atendimento em Todo Paraná</h2>
                <p>Atendemos empresas em Campo Mourão, Maringá, Cianorte, Umuarama e toda a região Centro-Oeste do Paraná com soluções personalizadas de integração de sistemas legados com IA.</p>
            </div>
            
            {/* Componente interativo */}
            <ClientPage />
        </>
    );
}