import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='footer grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-1'>
        <div className='logo'>
            <Image src={'/assets/images/qorra.png'} width={100} height={100} alt='مبادرة قراء' loading='lazy' />
            <h4>قُرَّاءْ</h4>
            <small>نهارٌ نحمله في روحِنا لا يُظلمُ ابداً</small>
        </div>

        <div>
            <h4>مَن نحن</h4>
            <ul>
                <li><Link href={"/pages/we"}>الرؤية والرسالة والأهداف</Link></li>
                <li><Link href={"/pages/volunteers"}>أعضاء الإدارة التنفيذية</Link></li>
                <li><Link href={"https://web.facebook.com/profile.php?id=100064109831938"} target='_blank'>شكل المبادرة وما تقدمه للمجتمع</Link></li>
            </ul>
        </div>

        <div>
            <h4>المركز الإعلامي</h4>
            <ul>
                <li><Link href={"/"}>الأخبار</Link></li>
                <li><Link href={"/pages/we"}>الصور</Link></li>
                <li><Link href={"https://www.youtube.com/watch?v=nluAXkgPPMY&t=13s"} target='_blank'>اللقاءات التليفزيونية</Link></li>
            </ul>
        </div>

        <div>
            <h4>الوائح والسياسات</h4>
            <ul>
                <li><Link href={'/assets/books/اللائحة.pdf'} target='_blank'>اللائحة الأساسية</Link></li>
                <li><Link href={'/assets/books/اللائحة.pdf'} target='_blank'>اللائحة التنظيمية</Link></li>
                <li><Link href={'/assets/books/اللائحة.pdf'} target='_blank'>سياسة خصوصية البيانات</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Footer