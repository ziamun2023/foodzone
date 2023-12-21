import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'],weight: ['400','500','700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
     <main className='lg:max-w-6xl mx-auto md:max-w-4'>

     {children}
     </main>
        
        </body>
    </html>
  )
}
