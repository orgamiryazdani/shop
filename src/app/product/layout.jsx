'use client'
import Providers from '@/app/Providers'
import '../globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" class="dark-mode">
            <body>
                <Providers>
                    <div className="w-[100vw] h-[100vh] bg-blue-500">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
