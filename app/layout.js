'use client'
import './styles/style.scss'
// import './js/main'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'الموقع الرسمي لمبادرة قُرّّاءْ لعام 2023',
  description: 'مبادرة عربية تستقضب الشباب لبناء مجتمع عربي منتمي لهٌويته العربية',
}

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {router.pathname !== "*" && <Header />}
        <main>{children}</main>
        {router.pathname !== "*" && <Footer />}
      </body>
    </html>
  )
}
