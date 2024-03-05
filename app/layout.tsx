import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Magnetic Effect',
  description:
    'This is a demo page showcasing the magnetic effect powered by GSAP and Framer Motion',
}

interface RootLayoutProps {
  children: React.ReactElement
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          ' bg-white text-black dark:bg-[#0f0f0f] dark:text-white'
        }
      >
        {children}
      </body>
    </html>
  )
}
