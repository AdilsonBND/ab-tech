export default function LocalSEO() {
  // Palavras-chave locais para SEO - invisíveis para o usuário
  const localKeywords = [
    "integração IA Campo Mourão",
    "integração IA Maringá", 
    "integração IA Cianorte",
    "integração IA Umuarama",
    "sistemas legados Campo Mourão",
    "sistemas legados Maringá",
    "sistemas legados Cianorte", 
    "sistemas legados Umuarama",
    "agentes atendimento IA Campo Mourão",
    "agentes atendimento IA Maringá",
    "agentes atendimento IA Cianorte",
    "agentes atendimento IA Umuarama",
    "modernização sistemas Campo Mourão",
    "modernização sistemas Maringá",
    "modernização sistemas Cianorte",
    "modernização sistemas Umuarama",
    "inteligência artificial Campo Mourão",
    "inteligência artificial Maringá",
    "inteligência artificial Cianorte",
    "inteligência artificial Umuarama",
    "chatbot Campo Mourão",
    "chatbot Maringá",
    "chatbot Cianorte",
    "chatbot Umuarama",
    "transformação digital Campo Mourão",
    "transformação digital Maringá",
    "transformação digital Cianorte",
    "transformação digital Umuarama",
    "automação sistemas Paraná",
    "sistemas em nuvem Paraná",
    "integração sistemas Paraná"
  ];

  const cities = [
    "Campo Mourão", "Maringá", "Cianorte", "Umuarama", 
    "Cascavel", "Foz do Iguaçu", "Londrina", "Ponta Grossa"
  ];

  return (
    <div style={{ display: 'none' }}>
      {/* SEO Local - Palavras-chave ocultas para indexação */}
      <div>
        {localKeywords.map((keyword, index) => (
          <span key={index}>
            {keyword}
          </span>
        ))}
      </div>
      
      {/* SEO Local - Cidades atendidas */}
      <div>
        {cities.map((city, index) => (
          <div key={index}>
            <span>Integração de sistemas legados com IA em {city}</span>
            <span>Agentes de atendimento inteligentes em {city}</span>
            <span>Modernização de sistemas antigos em {city}</span>
            <span>Transformação digital em {city}</span>
            <span>Automação inteligente em {city}</span>
            <span>Sistemas em nuvem em {city}</span>
            <span>Chatbot inteligente em {city}</span>
            <span>Inteligência artificial em {city}</span>
            <span>Conectividade de sistemas em {city}</span>
            <span>Integração de dados em {city}</span>
            <span>Modernização de banco de dados em {city}</span>
            <span>Migração para nuvem em {city}</span>
            <span>Automação de processos em {city}</span>
            <span>Digitalização de sistemas em {city}</span>
            <span>Conectividade empresarial em {city}</span>
            <span>Integração de APIs em {city}</span>
            <span>Modernização de TI em {city}</span>
            <span>Transformação de negócios em {city}</span>
            <span>Inovação tecnológica em {city}</span>
            <span>Consultoria em TI em {city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
