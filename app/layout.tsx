import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faergo — Ginástica laboral e fisioterapia do trabalho para empresas | São Paulo',
  description: 'A Faergo implanta ginástica laboral, fisioterapia do trabalho, quick massage, palestras de SIPAT e programas de saúde e bem-estar em indústrias e escritórios de São Paulo. Condução da Dra. Fabiana Paulo, com indicadores para RH e SESMT.',
  keywords: 'ginástica laboral, fisioterapia do trabalho, saúde ocupacional, ergonomia, NR-1, NR-17, quick massage empresarial, palestras SIPAT, Faergo',
  openGraph: { title: 'Faergo — Saúde ocupacional que se vê no resultado', description: 'Programas de saúde ocupacional, fisioterapia do trabalho e bem-estar para empresas.', locale: 'pt_BR', type: 'website', images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-EhPbjzwjr8QIDcKTaJaQjnNJhh9q3F.png'] },
  twitter: { card: 'summary_large_image', title: 'Faergo — Saúde ocupacional para empresas', description: 'Ginástica laboral e fisioterapia do trabalho em São Paulo.' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FBF9F4' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
