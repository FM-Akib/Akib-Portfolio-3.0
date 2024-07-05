"use client";
import { getCirtificates } from '@/utiles/getCirtificate';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { PiCertificateLight } from "react-icons/pi";

const Cirtification = () => {
  const [cirtificates, setcirtificates] = useState([]);

  useEffect(() => {
    const fetchcirtificates = async () => {
      const cirtificatesData = await getCirtificates();
      setcirtificates(cirtificatesData);
    };

    fetchcirtificates();
  }, []);

  // console.log(cirtificates)
    return (
        <>
         
 <div  class="py-12 md:mt-5">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-3xl flex items-center justify-center "><PiCertificateLight class="mr-1" />
      Certificates</h2>
      <p class="lg:mx-auto lg:w-6/12 text-gray-600 ">
      A Showcase of Professional and Academic Excellence
      </p>
    </div>
    {/* <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
    <Marquee>
  {
    cirtificates?.map((cirtificate,i)=>(
      <div key={i} class="group p-6 mr-5 sm:p-8 rounded-3xl bg-white border border-gray-100  0  bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="relative overflow-hidden rounded-xl">
          <Image src={cirtificate.img}
          alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
        </div>
        <div class="mt-6 relative">
          <h3 class="text-md font-semibold text-gray-800 ">
            {cirtificate.certificateName}
          </h3>
        </div>   
      </div>))
  }
    </Marquee>

    
    </div>
  {/* </div> */}
</div>
                                       
        </>
    );
};

export default Cirtification;