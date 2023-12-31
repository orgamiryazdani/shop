import Providers from '@/app/Providers'
import '../../globals.css'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </DarkModeProvider>
      </body>
    </html>
  )
}
