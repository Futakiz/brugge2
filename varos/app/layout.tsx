import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brugge',
  description: 'Fedezze fel Brugge szépségeit, történelmét és kultúráját',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

