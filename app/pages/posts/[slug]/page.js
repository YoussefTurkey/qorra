"use client";
    // Import React Components
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Error from "@/app/components/Error";
import DataLoading from '@/app/components/DataLoading'
    // Import External Lib
import useSWR from "swr";
import axios from "axios";
import { FaFacebook } from "react-icons/fa6";
import { ImSphere } from "react-icons/im";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PostDetails = ({ params }) => {

    const slug = params.slug;

    const { data, error } = useSWR(
        `/db/data.json`,
        fetcher
    );
    if (error) return <Error />;
    if (!data) return <DataLoading />;

  return (
    <Suspense>
        <section className='events'>
            <div className="cover">
                <Image src={data.events[slug-1].imgCover} className='eventImg' width={800} height={200} alt="tegara" loading="lazy" />
            </div>

            <div className='eventTxt'>
                {
                   data.events[slug-1].content.map(info => {
                    return(
                        <p key={info}>{info}</p>
                    )
                   }) 
                }
            </div>

            <div className="social">
                <Link href={data.events[slug-1].facebook} className="flex items-center w-fit" role="button" target="_blanck">
                    <span className="icon text-lg"><FaFacebook /></span>
                    <span className="text-lg">المنشور على صفحة الفيسبوك</span>
                </Link>

                {
                    data.events[slug-1].website ? (
                        <Link href={data.events[slug-1].website} className="flex items-center w-fit" role="button" target="_blanck">
                            <span className="icon text-lg"><ImSphere /></span>
                            <span className="text-lg">الموقع الرسمي</span>
                        </Link>
                    ) : ''
                }
                
            </div>

            <Link href={'/'} role="button" className="more text-sm">العودة للقائمة الرئيسية</Link>
        </section>
    </Suspense>
  )
}

export default PostDetails