'use client';

import { ChartBarIcon } from '@heroicons/react/24/outline';
import AboutButton from "./components/AboutButton";
import RevealText from "./components/RevealText";
import Slider from "./components/Slider";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ViewImageModal, { ViewImageModalRef } from "./components/ViewImage";

export default function Home() {

    const [lang, setLang] = useState<'en' | 'pt'>('en');
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
                    onClick={() => window.open('https://ab-tech-crm.vercel.app/', '_blank')}>
                    <ChartBarIcon className="w-6 h-6 text-white/50 mr-3" /> 
                    {isPT ? "Visite nosso CRM" : "Visit our CRM"}
                </div>

                <div className="cursor-pointer flex flex-row items-center text-sm font-bold bg-white/5 border border-white/10 hover:border-white/10 hover:bg-white/5 animation rounded-4xl items-align-center px-15"
                    onClick={() => window.open('https://wa.me/5544998329619', '_blank')}>
                    <div className="w-6 h-6 relative mr-3">
                        <Image
                            src="/contact/whats.png"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                            className="object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div> 
                    {isPT ? "Agente Exemplo" : "Agent Example"}
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
                        ? "Transformando ideias em sistemas escaláveis e conectados."
                        : "Building ideas into scalable, connected systems."}
                </h1>
            </RevealText>

            <RevealText>
                <p className="text-lg text-gray-500">
                    {isPT
                        ? "Foco na integração perfeita entre plataformas, serviços e sistemas legados, com compromisso com desempenho, segurança e inovação."
                        : "Focused on seamless integration between platforms, services, and legacy systems, with a commitment to performance, security, and innovation."}
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
                    onClick={() => window.open('https://ab-tech-crm.vercel.app/', '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            window.open('https://ab-tech-crm.vercel.app/', '_blank');
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
                            {isPT ? "VISITE NOSSO CRM" : "VISIT OUR CRM"}
                        </h3>
                        <p className="text-sm text-white/80 group-hover:text-white/90">
                            {isPT ? "Sistema de gestão completo" : "Complete management system"}
                        </p>
                    </div>
                </div>
            </RevealText>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Integrando sistemas legados — mesmo que os dados estejam em TXT, CSV, Excel ou bancos de dados antigos — modernizamos ou conectamos o que já existe para criar soluções em nuvem, mobile e com inteligência artificial."
                                : "Integrating legacy systems — whether data is in TXT, CSV, Excel, or legacy databases — we modernize or connect existing systems to build cloud, mobile, and AI-powered solutions."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Foco na integração perfeita entre plataformas, serviços e sistemas legados, com compromisso com desempenho, segurança e inovação."
                                : "Focused on seamless integration between platforms, services, and legacy systems, with a commitment to performance, security, and innovation."
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
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Integramos sistemas legados com inteligência artificial e soluções em nuvem, promovendo inovação contínua e transformação digital segura."
                                : "We integrate legacy systems with artificial intelligence and cloud solutions, driving continuous innovation and secure digital transformation."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Transformamos tecnologias antigas em ativos estratégicos por meio de arquiteturas modernas, automação inteligente e conectividade em nuvem."
                                : "We turn legacy technologies into strategic assets through modern architectures, intelligent automation, and cloud connectivity."
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
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Impulsionando a inovação por meio de desenvolvimento inteligente, automação integrada e arquitetura escalável que conecta sistemas e promove transformação."
                                : "Empowering innovation through smart development, seamless automation, and scalable architecture that connect systems and drive transformation."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Em um mundo de mudanças rápidas, adaptabilidade e integração são essenciais para manter a relevância e liderar o futuro."
                                : "In a world of rapid change, adaptability and integration are the keys to staying relevant and leading the future."
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
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "Desafios não são obstáculos — são mapas para criar sistemas mais inteligentes e eficientes que evoluem com seu negócio."
                                : "Challenges aren’t obstacles — they’re blueprints for creating smarter, leaner systems that evolve with your business."
                            }
                        </p>
                    </RevealText>
                </div>
                <div className="col-span-1">

                    <RevealText>
                        <p className="text-lg text-gray-500">
                            {isPT
                                ? "O progresso real não se mede apenas pela velocidade — mas pela direção, propósito e capacidade de adaptação no momento certo."
                                : "True progress isn’t just about speed — it’s about direction, purpose, and the ability to pivot when it matters most."
                            }
                        </p>
                    </RevealText>
                </div>
            </div>
            <ViewImageModal ref={modalRef} />
        </div>
    );
}