import './globals.css'
import { Inter } from 'next/font/google'
import ToastProvider from '../../provider/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Yohannes Teffera portfolio(software developer)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ToastProvider />
        {children}
        </body>
    </html>
  )
}
