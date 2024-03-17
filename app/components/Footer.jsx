import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
          <Image
            src={"/assets/images/qorra.png"}
            width={1000}
            height={1000}
            alt="مبادرة قراء"
            loading="lazy"
          />
          <h4>قُرَّاءْ</h4>
          <small>نهارٌ نحمله في روحِنا لا يُظلمُ ابداً</small>
        </div>
      
      <div className="links grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-1">
        <div>
          <h4>مَن نحن</h4>
          <ul>
            <li>
              <Link href={"/we"}>الرؤية والرسالة والأهداف</Link>
            </li>
            <li>
              <Link href={"/volunteers"}>أعضاء الإدارة التنفيذية</Link>
            </li>
            <li>
              <Link
                href={"https://web.facebook.com/profile.php?id=100064109831938"}
                target="_blank"
              >
                شكل المبادرة وما تقدمه للمجتمع
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>المركز الإعلامي</h4>
          <ul>
            <li>
              <Link href={"/"}>الأخبار</Link>
            </li>
            <li>
              <Link href={"/we"}>الصور</Link>
            </li>
            <li>
              <Link
                href={"https://www.youtube.com/watch?v=nluAXkgPPMY&t=13s"}
                target="_blank"
              >
                اللقاءات التليفزيونية
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>الوائح والسياسات</h4>
          <ul>
            <li>
              <Link href={"/assets/books/اللائحة.pdf"} target="_blank">
                اللائحة الأساسية
              </Link>
            </li>
            <li>
              <Link href={"/assets/books/اللائحة.pdf"} target="_blank">
                اللائحة التنظيمية
              </Link>
            </li>
            <li>
              <Link href={"/assets/books/اللائحة.pdf"} target="_blank">
                سياسة خصوصية البيانات
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="social">
        <div className="icon_contact">
          <Link target="_blank" href={"https://web.facebook.com/profile.php?id=100064109831938"}>
            <Image
              src={"/assets/images/facebook.png"}
              width={50}
              height={50}
              alt="facebook"
              loading="lazy"
            />
          </Link>
          <Link target="_blank" href={"https://www.instagram.com/qoraa2020/"}>
            <Image
              src={"/assets/images/instagram.png"}
              width={50}
              height={50}
              alt="instagram"
              loading="lazy"
            />
          </Link>
          <Link target="_blank" href={"https://www.youtube.com/watch?v=nluAXkgPPMY&t=13s"}>
            <Image
              src={"/assets/images/youtube.png"}
              width={50}
              height={50}
              alt="youtube"
              loading="lazy"
            />
          </Link>
        </div>
        <p className="text-center py-5">جميع الحقوق محفوظة لمبادرة قُرَّاءْ ©</p>
      </div>
    </section>
  );
};

export default Footer;
