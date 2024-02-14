"use client"
import '../globals.css'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Providers from '../Providers'
import { Toaster } from 'react-hot-toast'
import logo from "../../../public/images/logo.png"
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body className='bg-secondary-100 flex items-center justify-center'>
        <Providers>
          <Toaster />
          <div className="max-w-[1400px] grid grid-cols-12 bg-secondary-100 text-white h-[100vh] grid-rows-8">
            <div className="col-start-1 lg:col-end-2 col-end-13 row-span-1 flex flex-wrap md:flex-nowrap items-center justify-between">
              <div className="min-w-20 md:w-44 w-full flex h-20 md:pt-6 pt-2 lg:px-3 pr-4 items-center justify-center">
                <Image src={logo} width={115} alt='logo'/>
              </div>
            </div>
            <div className="lg:col-start-12 lg:col-end-13 lg:row-span-8 z-20">
              <Features />
            </div>
            <div className="md:col-start-1 md:col-end-2 md:col-span-2 w-full md:w-auto h-16 md:h-auto row-span-7 md:relative fixed bottom-0 left-0 z-10 md:flex justify-center items-center">
              <Menu />
            </div>
            <div className="md:col-start-2 md:col-end-12 col-span-12 lg:row-start-1 row-start-2 row-end-9">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}