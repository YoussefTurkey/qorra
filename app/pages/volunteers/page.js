"use client"
    // Import React Components
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
  // Import External Lib
import useSWR from "swr";
import axios from "axios";

const DataLoading = dynamic( ()=>import('@/app/components/Error') )
const Error = dynamic( ()=>import('@/app/components/DataLoading') )

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Volunteers = () => {

    const { data, error } = useSWR(
        "/db/leader.json",
        fetcher
    );
    if (error) return <Error />;
    if (!data) return <DataLoading />;

    // console.log(data.Leaders[0].presedent)

  return (
    <section className='leaders'>
        <div>
            <div className='lead_title'>
                <h2>
                    مجلس <span>الإدارة</span>
                </h2>
            </div>

            <div className='team_lead grid lg:grid-cols-2 lg:gap-2 md:grid-col-2 md:gap-6 sm:grid-cols-1 sm:gap-4 sm:items-center lg:w-[50%] md:w-[50%]'>
                {
                    data.presedent.map(leader => {
                        return(
                            <Link href={`/pages/profile/presedents/${leader.id}`} key={leader.id}>
                                <Image src={leader.image} width={800} height={800} alt={leader.name} loading='lazy' />
                                <h5>{leader.name}</h5>
                                <p>{leader.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

        <div>
            <div className='lead_title'>
                <h2>
                    رؤوساء <span>اللجان</span>
                </h2>
            </div>

            <div className='team_lead grid lg:grid-cols-4 lg:gap-2 md:grid-col-2 md:gap-6 sm:grid-cols-1 sm:gap-4 sm:items-center'>
                {
                    data.commetties.map(leader => {
                        return(
                            <Link href={`/pages/profile/commetties/${leader.id}`} key={leader.id}>
                                <Image src={leader.image} width={800} height={800} alt={leader.name} loading='lazy' />
                                <h5>{leader.name}</h5>
                                <p>{leader.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

        <div className='lead_title'>
            <h2>
                رؤوساء <span>الأجنحة</span>
            </h2>

            <div className='team_lead grid lg:grid-cols-4 lg:gap-2 md:grid-col-2 md:gap-6 sm:grid-cols-1 sm:gap-4 sm:items-center'>
                {
                    data.wings.map(leader => {
                        return(
                            <Link href={`/pages/profile/wings/${leader.id}`} key={leader.id}>
                                <Image src={leader.image} width={800} height={800} alt={leader.name} loading='lazy' />
                                <h5>{leader.name}</h5>
                                <p>{leader.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Volunteers