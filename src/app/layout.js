import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:  'Vaibhav Tripathi',
  description: 'Vaibhav Tripathi is a full-stack developer with a focus on building beautiful interfaces and experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
