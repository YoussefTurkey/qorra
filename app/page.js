"use client";
// Import React Components
import React, { useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// Import External Lib
import useSWR from "swr";
import axios from "axios";
import { ThemeProvider } from "next-themes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DataLoading = dynamic(() => import("@/app/components/DataLoading"));
const Error = dynamic(() => import("@/app/components/Error"));

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const { data, error } = useSWR("/db/data.json", fetcher);
  if (error) return <Error />;
  if (!data) return <DataLoading />;

  return (
    <ThemeProvider attribute="class">
      <Suspense>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          speed={1000}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={"/assets/images/photos/img1.png"}
              width={1739}
              height={715.52}
              loading="lazy"
              alt="khassan kanafy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/assets/images/photos/img2.png"}
              width={1739}
              height={715.52}
              loading="lazy"
              alt="mamdouh darwish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/assets/images/photos/img3.png"}
              width={1739}
              height={715.52}
              loading="lazy"
              alt="almanfaloty"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/assets/images/photos/img4.png"}
              width={1739}
              height={715.52}
              loading="lazy"
              alt="alrafay"
            />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-4 we_count">
          <div>
            <Image
              src={"/assets/images/participant.svg"}
              width={150}
              height={150}
              loading={"lazy"}
              alt="متطوعين"
            />
            <p className="num">أكثر من مائة وخمسين</p>
            <p>متطوع</p>
          </div>

          <div>
            <Image
              src={"/assets/images/followers.svg"}
              width={150}
              height={150}
              loading={"lazy"}
              alt="متابعين"
            />
            <p className="num">أكثر من ثمانية الاف</p>
            <p>متابع</p>
          </div>

          <div>
            <Image
              src={"/assets/images/learning.svg"}
              width={150}
              height={150}
              loading={"lazy"}
              alt="متعلمين"
            />
            <p className="num">أكثر من سبعين</p>
            <p>متعلم</p>
          </div>

          <div>
            <Image
              src={"/assets/images/projects.svg"}
              width={150}
              height={150}
              loading={"lazy"}
              alt="مشاريع"
            />
            <p className="num">أكثر من ثلاثة</p>
            <p>مشاريع</p>
          </div>
        </div>

        <div className="we_proud">
          <div className="title">
            <h2>
              نعتز <span>بلغتنا</span>
            </h2>
          </div>

          <div className="proud_cards">
            <div className="flex justify-evenly items-center proud_card">
              <Image
                src={"/assets/images/target.png"}
                width={150}
                height={150}
                alt="أهدافنا"
                loading="lazy"
              />

              <div className="proud_txt">
                <h4>أهدافنا</h4>
                <p>
                  تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
                </p>
                <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center proud_card mt-28">
              <div className="proud_txt">
                <h4>أهدافنا</h4>
                <p>
                  تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
                </p>
                <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
              </div>

              <Image
                src={"/assets/images/roadmap.png"}
                width={150}
                height={150}
                alt="رؤيتنا"
                loading="lazy"
              />
            </div>

            <div className="flex justify-evenly items-center proud_card mt-28">
              <Image
                src={"/assets/images/chat.png"}
                width={150}
                height={150}
                alt="رسالتنا"
                loading="lazy"
              />

              <div className="proud_txt">
                <h4>رسالتنا</h4>
                <p>
                  تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
                </p>
                <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center proud_card mt-28">
              <div className="proud_txt">
                <h4>قيمنا</h4>
                <p>
                  تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
                </p>
                <p>ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.</p>
                <p>لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع</p>
              </div>

              <Image
                src={"/assets/images/diamond.png"}
                width={150}
                height={150}
                alt="قيمنا"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <section className="events">
          <div className="title">
            <h2>
              أحدث <span>الفاعليات</span>
            </h2>
          </div>

          <div className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-6">
            {data.events.map((post) => {
              return (
                <div className="card" key={post.id}>
                  <Image
                    src={post.imgPost}
                    width={400}
                    height={400}
                    loading="lazy"
                    alt=""
                  />

                  <div className="card_info">
                    <h3>{post.title}</h3>
                    <p>{post.subTitle}</p>
                    <Link
                      href={`/posts/${post.id}`}
                      role="button"
                      className="link"
                    >
                      للمزيد من المعلومات
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <Link href={'/'} className="more block mx-auto my-5 w-fit" role="button">للمزيد من المقالات...</Link> */}
        </section>

        <section className="partners">
          <div className="title">
            <h2>
              <span>شركائنا</span>
            </h2>
          </div>

          <div className="flex justify-around items-center mb-10 logos">
            <div>
              <Image
                src={"/assets/images/business.png"}
                width={100}
                height={100}
                loading="lazy"
                alt="كلية تجارة"
              />
            </div>
            <div>
              <Image
                src={"/assets/images/mdarj.png"}
                width={100}
                height={100}
                loading="lazy"
                alt="مدارج"
              />
            </div>
            <div>
              <Image
                src={"/assets/images/mezza.png"}
                width={100}
                height={100}
                loading="lazy"
                alt="ميزة"
              />
            </div>
            <div>
              <Image
                src={"/assets/images/arabisk.png"}
                width={100}
                height={100}
                loading="lazy"
                alt="أرابيسك"
              />
            </div>
          </div>
        </section>
      </Suspense>
    </ThemeProvider>
  );
}
