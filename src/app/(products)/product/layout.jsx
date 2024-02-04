"use client"
import Loading from '@/common/Loading'
import '../../globals.css'
import { Suspense } from 'react'
import { DarkModeProvider } from '@/context/DarkModeContext'

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir='rtl' class="dark-mode">
            <body>
                <Suspense fallback={<Loading />}>
                    <DarkModeProvider />
                </Suspense>
                <div className="w-[100vw] h-[100vh] bg-blue-500">
                    {children}
                </div>
            </body>
        </html>
    )
}
