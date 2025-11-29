import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import Footer from "./components/Footer";
import HeaderPage from "./components/HeaderPage";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABTech - Integração de Sistemas Legados com IA | Agentes de Atendimento Inteligentes",
  description: "Especialistas em integração de sistemas antigos com IA em Campo Mourão, Maringá, Cianorte, Umuarama e região. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados com soluções em nuvem, automação e inteligência artificial.",
  keywords: [
    "integração sistemas legados",
    "agentes atendimento IA",
    "modernização sistemas antigos",
    "inteligência artificial",
    "automação sistemas",
    "sistemas legados",
    "integração IA",
    "chatbot inteligente",
    "transformação digital",
    "sistemas em nuvem",
    "automação inteligente",
    "conectividade sistemas",
    "integração IA Campo Mourão",
    "integração IA Maringá",
    "integração IA Cianorte",
    "integração IA Umuarama",
    "integração IA Paraná",
    "sistemas legados Campo Mourão",
    "agentes atendimento IA Maringá",
    "modernização sistemas Cianorte",
    "inteligência artificial Umuarama",
    "automação sistemas Paraná",
    "chatbot inteligente Campo Mourão",
    "transformação digital Maringá",
    "sistemas em nuvem Cianorte",
    "ABTech",
    "Adilson Biondo"
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
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ab-tech.ia.br',
    siteName: 'ABTech - Integração de Sistemas Legados com IA',
    title: 'ABTech - Integração de Sistemas Legados com IA | Agentes de Atendimento Inteligentes',
    description: 'Especialistas em integração de sistemas antigos com IA. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados com soluções em nuvem, automação e inteligência artificial.',
    images: [
      {
        url: '/logo/logo_f.png',
        width: 1200,
        height: 630,
        alt: 'ABTech - Integração de Sistemas Legados com IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABTech - Integração de Sistemas Legados com IA',
    description: 'Especialistas em integração de sistemas antigos com IA. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados.',
    images: ['/logo/logo_f.png'],
    creator: '@abtech_ia',
  },
  alternates: {
    canonical: 'https://ab-tech.ia.br',
    languages: {
      'pt-BR': 'https://ab-tech.ia.br',
      'en-US': 'https://ab-tech.ia.br/en',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuroraBackground className="fixed inset-0 -z-50" showRadialGradient={true}>
        </AuroraBackground>
        <div className="relative z-10 w-full min-h-screen">
          <HeaderPage />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
