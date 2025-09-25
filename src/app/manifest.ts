import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ABTech - Integração de Sistemas Legados com IA',
    short_name: 'ABTech',
    description: 'Especialistas em integração de sistemas antigos com IA. Criamos agentes de atendimento inteligentes e modernizamos sistemas legados com soluções em nuvem, automação e inteligência artificial.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/logo_f.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'pt-BR',
    orientation: 'portrait-primary',
  }
}
