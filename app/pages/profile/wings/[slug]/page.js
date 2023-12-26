"use client";
    // Import React Components
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
    // Import External Lib
import useSWR from "swr";
import axios from "axios";
import { FaAnglesLeft, FaCheckDouble} from "react-icons/fa6";

const DataLoading = dynamic( ()=>import('@/app/components/Error') )
const Error = dynamic( ()=>import('@/app/components/DataLoading') )

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Profile = ({ params }) => {

    const slug = params.slug;

    const { data, error } = useSWR(
        `/db/leader.json`,
        fetcher
    );
    if (error) return <Error />;
    if (!data) return <DataLoading />;

    const leader = data.wings[slug-1]

  return (
    <section>
      <div className='profile' key={leader.id}>
        <h1 className='profile_name'>{leader.firstName} <span>{leader.lastName}</span></h1>
        <h2 className="text-2xl">{leader.title}</h2>

        <div className="profile_img mt-5">
            <Image src={leader.image} alt={leader.name} width={300} height={300} loading='lazy'/>
            
            <div className="profile_info">
              <p>{leader.description}</p>
              {leader.cv ? (<p><Link role='button' href={leader.cv} target='_blank' className='resume'>السيرة الذاتية</Link></p>) : ''}
            </div>
        </div>

        <div className="profile_txt mt-5">
            <p>{leader.content.education}</p>
            
            <p>{leader.jobs}</p>
            <p className="flex items-center mt-[20px] font-bold"><FaAnglesLeft className="px-[5px]" /> شارك في الأعمال التطوعية، ومن الأماكن التى تطوع بها:
            </p>
            <ul className='civil flex flex-col'>
              {
                leader.content.civil && leader.content.civil.map( (val, i) => {
                  return (
                    <li key={i} className="flex items-center"><FaCheckDouble className="px-[5px]" /> {val}</li>
                  )
                })
              }
            </ul>
            <p className="flex items-center mt-[20px] font-bold"><FaAnglesLeft className="px-[5px]" /> من الشهادات التي حصل عليها مؤخراً:
            </p>
            <ul className='certificates'>
              {
                leader.content.certificates && leader.content.certificates.map( (val, i) => {
                  return (
                    <li key={i} className="flex items-center"><FaCheckDouble className="px-[5px]" /> {val}</li>
                  )
                })
              }
            </ul>
        </div>  
      </div>
    </section>
  )
}

export default Profile