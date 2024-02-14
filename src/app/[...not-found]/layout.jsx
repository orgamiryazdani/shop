"use client"
import Providers from '../Providers'
import '../globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body className='w-full h-full flex items-center justify-center bg-secondary-100'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
