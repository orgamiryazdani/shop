"use client"
import Header from '@/components/Header'
import '../globals.css'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Providers from '../Providers'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from '@/context/DarkModeContext'
import { Suspense } from 'react'
import Loading from '@/common/Loading'

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" class="dark-mode">
      <body>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-12 bg-secondary-100 text-white h-[100vh] grid-rows-12">
            <Suspense fallback={<Loading />}>
              <DarkModeProvider>
                  <div className="col-span-11 row-span-1">
                    <Header />
                  </div>
                  <div className="col-span-1 row-span-12">
                    <Features />
                  </div>
                  <div className="col-span-1 row-span-11 flex justify-center items-center">
                    <Menu />
                  </div>
              </DarkModeProvider>
            </Suspense>
            <div className="col-span-10 row-span-12">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}