import type { Metadata } from 'next'
import { Lemon } from 'next/font/google'
import './globals.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Body from './components/main/body/body'


const lemon = Lemon({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Music center',
  description: 'Music center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lemon.className}>
        <Body />
        <Footer />
        {children}
      </body>
    </html>
  )
}
