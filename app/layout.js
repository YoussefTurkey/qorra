'use client'
import './styles/style.scss'
// import './js/main'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'

const Header = dynamic( ()=> import('./components/Header') )
const Footer = dynamic( ()=> import('./components/Footer') )
const Version = dynamic( ()=> import('./components/Version') )
const ThemeBtn = dynamic( ()=> import('./components/ThemeBtn') )

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <Version />
        <Header />
        <main>{children}</main>
        {/* <ThemeBtn /> */}
        <Footer />
      </body>
    </html>
  )
}
