import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MenuProvider } from '@/contexts/MenuContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { Analytics } from '@vercel/analytics/react';
import StarsCanvas from '@/components/StarBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Untitled Devs',
  description: 'Uma grande inovação no mundo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black text-gray-50 px-4 md:px-8 lg:px-8 xl:px-32 py-2 md:py-8 relative`}>
        <StarsCanvas />
        <MenuProvider>
        <ModalProvider>
          {children}
          <Analytics />
        </ModalProvider>
        </MenuProvider>
      </body>
    </html>
  )
}