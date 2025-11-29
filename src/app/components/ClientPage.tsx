'use client';

import { ChartBarIcon } from '@heroicons/react/24/outline';
import AboutButton from "./AboutButton";
import RevealText from "./RevealText";
import Slider from "./Slider";
import WhatsAppButton from "./WhatsAppButton";
import LocalSEO from "./LocalSEO";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ViewImageModal, { ViewImageModalRef } from "./ViewImage";

export default function ClientPage() {
    const [lang, setLang] = useState<'en' | 'pt'>('pt');
    const isPT = lang === 'pt';

    const modalRef = useRef<ViewImageModalRef>(null);

    return (
        <div className="flex flex-col gap-8 mx-auto my-4 mt-20 max-w-[700px] px-4 ">

            <RevealText>
                <div className="relative w-[300px] h-[100px] mx-auto mb-4">
                    <Image
                        src="/logo/logo_f.png"
                        alt="Logo"
                        fill
                        sizes="(max-width: 768px) 80vw, 300px"
                        className="object-contain"
                        priority
                    />
                </div>
            </RevealText>

            <RevealText className="flex flex-row justify-between items-center">
                <div className="cursor-pointer flex flex-row items-center text-sm font-bold bg-white/5 border border-white/10 hover:border-white/10 hover:bg-white/5 animation rounded-4xl items-align-center px-15"
                    onClick={() => window.open('https://crm.ab-tech.ia.br', '_blank')}>
                    <ChartBarIcon className="w-6 h-6 text-white/50 mr-3" /> 
                    {isPT ? "Visite nosso CRM" : "Visit our CRM"}
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
            </RevealText>


            <RevealText className="mt-4">
                <h1 className="text-2xl sm:text-5xl font-bold">
                    {isPT
                        ? "Integrando qualquer base de dados com IA para revolucionar seu negócio."
                        : "Integrating any database with AI to revolutionize your business."}
                </h1>
            </RevealText>

            <RevealText>
                <p className="text-lg text-gray-300">
                    {isPT
                        ? "Desenvolvemos soluções que integram qualquer base de dados com IA, possibilitando que seus clientes façam ofertas personalizadas, negociação automática de descontos e orçamentos inteligentes, além de um sistema CRM completo em nuvem construído com as mais modernas tecnologias."
                        : "We develop solutions that integrate any database with AI, enabling your clients to make personalized offers, automatic discount negotiation, and intelligent quotes, plus a complete cloud-based CRM system built with the most modern technologies."}
                </p>
            </RevealText>

            <RevealText>
                <AboutButton
                    href="/about"
                    title="Adilson Biondo - Profile"
                    avatarUrl="/profile/I.jpeg"
                />
            </RevealText>

            <RevealText>
                <div 
                    className="relative w-full h-64 md:h-96 rounded-2xl border border-white/10 cursor-pointer group hover:border-white/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center overflow-hidden"
                    onClick={() => window.open('https://crm.ab-tech.ia.br', '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            window.open('https://crm.ab-tech.ia.br', '_blank');
                        }
                    }}
                >
                    {/* Background Image */}
                    <Image
                        src="/portfolio/foto7.png"
                        alt="CRM Background"
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover select-none"
                        priority
                        draggable={false}
                    />
                    
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    <div className="relative z-10 text-center">
                        <ChartBarIcon className="w-16 h-16 text-white/90 mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">
                            {isPT ? "SISTEMA CRM COMPLETO" : "COMPLETE CRM SYSTEM"}
                        </h3>
                        <p className="text-sm text-white/80 group-hover:text-white/90">
                            {isPT ? "Modernize sua empresa com IA e tecnologias em nuvem" : "Modernize your business with AI and cloud technologies"}
                        </p>
                    </div>
                </div>
            </RevealText>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Nossa especialidade é integrar qualquer tipo de base de dados (TXT, CSV, Excel, bancos antigos) com inteligência artificial, permitindo que seus clientes façam ofertas personalizadas, negociação automática de descontos e geração inteligente de orçamentos."
                                : "Our specialty is integrating any type of database (TXT, CSV, Excel, legacy databases) with artificial intelligence, enabling your clients to make personalized offers, automatic discount negotiation, and intelligent quote generation."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Oferecemos um sistema CRM completo em nuvem, construído com as mais modernas tecnologias, para empresas que desejam modernizar e automatizar seus processos de vendas e relacionamento com clientes."
                                : "We offer a complete cloud-based CRM system, built with the most modern technologies, for companies that want to modernize and automate their sales processes and customer relationships."
                            }

                        </p>
                    </RevealText>
                </div>
            </div>

            <RevealText>
                <Slider images={[
                    "/portfolio/foto12.png",
                    "/portfolio/foto18.png",
                    "/portfolio/foto3.png"
                ]}
                    onImageClick={(src) => modalRef.current?.open(src)} />
            </RevealText>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Nossa IA analisa dados históricos dos seus clientes para criar ofertas personalizadas, calcular descontos otimizados e gerar orçamentos precisos automaticamente, aumentando significativamente as vendas deles."
                                : "Our AI analyzes your clients' historical data to create personalized offers, calculate optimized discounts, and generate accurate quotes automatically, significantly increasing their sales."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Sistema CRM completo com integração de IA para automatizar processos de vendas, gestão de leads, follow-up inteligente e relatórios avançados em tempo real."
                                : "Complete CRM system with AI integration to automate sales processes, lead management, intelligent follow-up, and advanced real-time reporting."
                            }

                        </p>
                    </RevealText>
                </div>
            </div>

            <RevealText>
                <Slider images={[
                    "/portfolio/foto6.png",
                    "/portfolio/foto11.png"
                ]} />
            </RevealText>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Construído com as mais modernas tecnologias em nuvem, nosso sistema oferece escalabilidade, segurança e performance excepcionais para empresas de qualquer tamanho."
                                : "Built with the most modern cloud technologies, our system offers exceptional scalability, security, and performance for companies of any size."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Modernize sua empresa com nossa solução completa: integração de dados com IA, CRM avançado, que permite ofertas personalizadas e negociação automática de descontos para seus clientes."
                                : "Modernize your business with our complete solution: data integration with AI, advanced CRM, enabling personalized offers and automatic discount negotiation for your clients."
                            }

                        </p>
                    </RevealText>
                </div>
            </div>

            <RevealText>
                <Slider images={[
                    "/portfolio/foto18.png",
                    "/portfolio/foto20.png",
                    "/portfolio/foto13.png"
                ]} 
                onImageClick={(src) => modalRef.current?.open(src)}
                />
            </RevealText>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Transformamos dados complexos em insights acionáveis, automatizando processos de vendas e maximizando oportunidades de negócio com inteligência artificial."
                                : "We transform complex data into actionable insights, automating sales processes and maximizing business opportunities with artificial intelligence."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-300">
                            {isPT
                                ? "Soluções completas em nuvem que integram qualquer base de dados com IA, oferecendo CRM avançado, automação de vendas e relatórios inteligentes para impulsionar os resultados dos seus clientes."
                                : "Complete cloud solutions that integrate any database with AI, offering advanced CRM, sales automation, and intelligent reporting to boost your clients' results."
                            }
                        </p>
                    </RevealText>
                </div>
            </div>
            <ViewImageModal ref={modalRef} />
            <RevealText>
            <WhatsAppButton lang={lang} />
            </RevealText>
            
            {/* SEO Local - Componente oculto para indexação */}
            <LocalSEO />
        </div>
    );
}
