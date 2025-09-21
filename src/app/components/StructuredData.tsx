export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABTech",
    "alternateName": "ABTech - Integração de Sistemas Legados com IA",
    "url": "https://ab-tech.ia.br",
    "logo": "https://ab-tech.ia.br/logo/logo_f.png",
    "description": "Especialistas em integração de sistemas antigos com IA. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados com soluções em nuvem, automação e inteligência artificial.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Adilson Biondo"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "Paraná",
      "addressLocality": "Campo Mourão",
      "addressArea": "Região Centro-Oeste do Paraná"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese", "English"]
    },
    "sameAs": [
      "https://crm.ab-tech.ia.br"
    ],
    "serviceArea": [
      {
        "@type": "City",
        "name": "Campo Mourão",
        "containedInPlace": {
          "@type": "State",
          "name": "Paraná"
        }
      },
      {
        "@type": "City", 
        "name": "Maringá",
        "containedInPlace": {
          "@type": "State",
          "name": "Paraná"
        }
      },
      {
        "@type": "City",
        "name": "Cianorte", 
        "containedInPlace": {
          "@type": "State",
          "name": "Paraná"
        }
      },
      {
        "@type": "City",
        "name": "Umuarama",
        "containedInPlace": {
          "@type": "State", 
          "name": "Paraná"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Integração de Sistemas Legados com IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integração de Sistemas Legados com IA",
            "description": "Modernização e integração de sistemas antigos com inteligência artificial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentes de Atendimento Inteligentes",
            "description": "Criação de chatbots e agentes de atendimento integrados com sistemas legados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transformação Digital",
            "description": "Migração de sistemas legados para soluções em nuvem com IA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação Inteligente",
            "description": "Automação de processos com integração de sistemas antigos e IA"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ABTech - Integração de Sistemas Legados com IA",
    "url": "https://ab-tech.ia.br",
    "description": "Especialistas em integração de sistemas antigos com IA. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados.",
    "publisher": {
      "@type": "Organization",
      "name": "ABTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ab-tech.ia.br/logo/logo_f.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ab-tech.ia.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://ab-tech.ia.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sobre",
        "item": "https://ab-tech.ia.br/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}
