import '../globals.css'
import Header from "../Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
