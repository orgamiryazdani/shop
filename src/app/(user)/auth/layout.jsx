"use client"
import Image from 'next/image'
import '../../globals.css'
import image from "../../../../public/images/loginImg.png"
import Providers from '@/app/Providers'
import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import BackLink from '@/common/BackLink'

export default function RootLayout({ children }) {
  const { t } = useTranslation();

  return (
    <html lang="en" class="dark-mode">
      <body className='w-full h-full bg-secondary-200 flex items-center justify-center'>
        <Providers>
          <Toaster />
          <div className='max-w-[1400px] flex flex-col xl:flex-row w-full h-[100vh] lg:max-h-[700px] justify-between bg-secondary-200'>
            <div className='xl:w-2/6 w-full h-full flex items-center flex-col overflow-auto'>
              <div className='w-full h-36 xl:h-48 flex items-start justify-around flex-col px-5'>
                <BackLink link="/home/products" />
                <div className='w-full flex flex-col items-center'>
                  <p className='lg:text-5xl text-4xl text-secondary-0 font-bold'>{t('loginPage.welcome')}</p>
                  <p className='text-secondary-700 mt-2'>{t('loginPage.enterInfo')}</p>
                </div>
              </div>
              {children}
            </div>
            <div className='xl:w-4/6 w-full flex justify-end items-end md:items-center'>
              <Image src={image} width={1200} height={500} className='rounded-t-3xl md:rounded-t-none' alt='image' />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
