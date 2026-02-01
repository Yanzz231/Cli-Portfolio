import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andrian Pratama - Full Stack Developer Portfolio',
    short_name: 'Andrian Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, Golang, and Cloud Infrastructure',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00ff00',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
