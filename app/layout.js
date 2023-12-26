'use client'
import './styles/style.scss'
// import './js/main'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'الموقع الرسمي لمبادرة قُرّّاءْ لعام 2023',
  description: 'مبادرة عربية تستقضب الشباب لبناء مجتمع عربي منتمي لهٌويته العربية',
}

const Header = dynamic( ()=> import('./components/Header') )
const Footer = dynamic( ()=> import('./components/Footer') )
const ThemeBtn = dynamic( ()=> import('./components/ThemeBtn') )

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <ThemeBtn />
        <Footer />
      </body>
    </html>
  )
}
