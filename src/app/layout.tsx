import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import { Header } from '@/components/header'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Pizzeria',
  description: 'Pizzeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
