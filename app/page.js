"use client"
  // Import React Components
import React, { useRef, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import Error from "./components/Error";
import DataLoading from '@/app/components/DataLoading'
  // Import External Lib
import useSWR from "swr";
import axios from "axios";
  // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
  // import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const { data, error } = useSWR(
    "/db/data.json",
    fetcher
  );
  if (error) return <Error />;
  if (!data) return <DataLoading />;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={'/assets/images/photos/img1.png'} width={1739} height={715.52} loading="lazy" alt="khassan kanafy"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/assets/images/photos/img2.png'} width={1739} height={715.52} loading="lazy" alt="mamdouh darwish"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/assets/images/photos/img3.png'} width={1739} height={715.52} loading="lazy" alt="almanfaloty"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/assets/images/photos/img4.png'} width={1739} height={715.52} loading="lazy" alt="alrafay"/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <section className="about">
        <div className="title">
          <h1>مَن <span>قُرَّاءْ</span></h1>
        </div>

        <div className="info grid lg:grid-cols-2 lg:gap-6 lg:items-center md:grid-cols-1">
          <div className="info_txt">
            <h3>نحن هنا منذ 2020م</h3>
            <p>
              قراء هي مبادرة مجتمعية تهدف إلى تنمية المجتمع من خلال تقديم التدريبات الأكاديمية والتخصصية
                والمهارية لكل لجنة من لجان المبادرة، حيثُ يَأْخُذُ كلُّ شَخْصٍ يَنْضَمُّ حَدِيثًا
                للجنةٍ تدريباتٍ أكاديمية وعملية في مجالِ اللجنةِ الخاصةِ به؛
                ليكون قادرًا على تأدية مهام اللجنة بثقة وكفاءة وفاعلية.
            </p>
            <p>
              ولتعزيز المزيد من المهارات والمعرفة، تتولى أجنحة خاصة مهمة التدريب والتعليم وزيادة الثقافة،
                مثل جناح صون اللسان العربي الذي يقدم مداخلا للغة العربية تتضمن ورشًا تفاعلية وتدريبات
                أكاديمية لتحسين مهارات اللغة العربية بكفاءة عالية وبطريقة ممتعة.
            </p>
            <Link href={'/pages/we'} className='more'>تعرف علينا أكثر</Link>
          </div>
          
          <div className="info_img">
            <Image src={'/assets/images/photos/qorra_screen.jpg'} className="rounded-full" height={450} width={450} alt="قراء" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="service">
        <div className="title">
          <h2>ماذا تقدم <span>قُرَّاءْ</span>؟</h2>
        </div>

        <div className='logo'>
          <Image src={'/assets/images/qorra.png'} width={200} height={200} loading="lazy" alt="qorra-logo" />
        </div>

        <div className="service_details">
          <div className='committes'>
              <h4 className='committe_head'>الأول:
                <span>لجان المبادرة</span>
              </h4>

              <ul className='committe_data'>
                <li>- لجنة التقييم والتطوير</li>
                <li>- لجنة الإعلام</li>
                <li>- لجنة العلاقات العامة والتنظيم</li>
                <li>- إدارة المشروعات</li>
              </ul>
          </div>

          <div className='wings' id='sec_info'>
              <h4 className='wing_head'>الثاني:
                <span>أجنحة المبادرة</span>
              </h4>

              <ul className='wing_data'>
                <li>- جناح صون اللسان العربي</li>
                <li>- جناح صناعة قارئ</li>
                <li>- جناح الجريدة</li>
                <li>- جناح البحث العلمي</li>
                <li>- جناح الخدمة المدنية</li>
              </ul>
          </div>
        </div>

        <div className="service_query">
          <div className='committes_hide'>
              <h4 className='committe_head font-bold text-2xl py-[10px]'>الأول:
                <span>لجان المبادرة</span>
              </h4>

              <ul className='committe_data'>
                <li>- لجنة التقييم والتطوير</li>
                <li>- لجنة الإعلام</li>
                <li>- لجنة العلاقات العامة والتنظيم</li>
                <li>- إدارة المشروعات</li>
              </ul>
          </div>

          <div className='wings_hide'>
              <h4 className='wing_head font-bold text-2xl py-[10px]'>الثاني:
                <span>أجنحة المبادرة</span>
              </h4>

              <ul className='wing_data'>
                <li>- جناح صون اللسان العربي</li>
                <li>- جناح صناعة قارئ</li>
                <li>- جناح الجريدة</li>
                <li>- جناح البحث العلمي</li>
                <li>- جناح الخدمة المدنية</li>
              </ul>
          </div>
        </div>
      </section>

      <section className="goals">
        <div className="title">
          <h2> <span>أهدافنا</span> </h2>
        </div>

        <div className="info">
          <p>تحقيق التنمية الثقافية والإجتماعية كجزء من التنمية المستدامة.</p>
          <p>ممارسة اللغة العربية الفصيحة من خلال ورش اللغة.</p>
          <p>تدريب المشاركين على مهارات القيادة الفعالة.</p>
          <p>تثقيف المشاركين بالقراءة والتدريبات.</p>
          <p>دراسة التاريخ العربي.</p>
          <p>إعطاء المشاركين أساسيات البحث العلمي والتعلم الذاتي.</p>
          <p>إعادة استخدام التراث والقيم العربية.</p>
          <p>العمل على محو الأمية.</p>
          <p>زيادة الوعي بأهم قضايا المجتمع والسعي لإيجاد حلول لها.</p>
        </div>
      </section>

      <section className="events">
        <div className="title">
          <h2>أحدث <span>الفاعليات</span></h2>
        </div>

        <div className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-6">
          {
            data.events.map(post => {
              return(
                <div className="card" key={post.id}>
                  <Image src={post.imgPost} width={400} height={400} loading="lazy" alt="" />

                  <div className="card_info">
                    <h3>{post.title}</h3>
                    <p>{post.subTitle}</p>
                    <Link href={`/pages/posts/${post.id}`} role="button" className='link'>للمزيد من المعلومات</Link>
                  </div>
                </div>
              )
            })
          }
        </div>

        <Link href={'/'} className="more block mx-auto my-5 w-fit" role="button">للمزيد من المقالات...</Link>
      </section>
      
      <section className="partners">
        <div className="title">
          <h2><span>شركائنا</span></h2>
        </div>

        <div className="flex justify-around items-center mb-10 logos">
          <div>
            <Image src={'/assets/images/business.png'} width={100} height={100} loading="lazy" alt="كلية تجارة" />
          </div>
          <div>
          <Image src={'/assets/images/mdarj.png'} width={100} height={100} loading="lazy" alt="مدارج" />
          </div>
          <div>
            <Image src={'/assets/images/mezza.png'} width={100} height={100} loading="lazy" alt="ميزة" />
          </div>
          <div>
            <Image src={'/assets/images/arabisk.png'} width={100} height={100} loading="lazy" alt="أرابيسك" />
          </div>
        </div>
      </section>
    </>
  )
}