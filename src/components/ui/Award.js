"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillAwardFill } from "react-icons/bs";
import { BsAward } from "react-icons/bs";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../app/swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { getAwards } from '@/utiles/getAward';


const Award = () => {
    
    const [awards, setawards] = useState([]);

    useEffect(() => {
      const fetchawards = async () => {
        const awardsData = await getAwards();
        setawards(awardsData);
      };
  
      fetchawards();
    }, []);

//  console.log(awards)

    return (
        <>
        <div class="py-2">
            <div class="xl:container mx-auto flex justify-center px-6 md:px-12">
            
            <div class="mb-4 md:w-2/3 lg:w-1/2 ">
                <h2 class="mb-2 text-xl font-bold text-center text-gray-800  md:text-3xl flex items-center justify-center">
                <BsAward class="mr-1 " />
                Awards & Achievements
                </h2>
                <p class="text-gray-600 text-center">
                Recognizing Excellence and Innovation - A Journey of Milestones and Honors
                </p>
                </div>
            </div>
            </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
 

        {
            awards?.map((award,i)=><SwiperSlide key={i}>
            
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                  <Image
                  class="mx-auto h-[22rem] w-full  object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={award.img}
                  alt="image"
                  width={740}
                  height={705}
                  />
                  <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 md:pb-20 py-4 md:py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                      <h4 class= "text-md md:text-lg font-semibold text-gray-700  ">{award.competitionTitle}</h4>
                      <span class=" text-sm text-white mt-1 flex items-center justify-center "> <span class="bg-emerald-700 px-3 py-1 rounded-lg font-semibold flex items-center justify-center"> <BsFillAwardFill class="mr-1 text-yellow-500" />{award.position}</span></span>
                  </div>
                  <p class="mt-2  text-sm text-gray-600">{award.description}</p>
                  </div>
      
                  </div>
                                          
                </SwiperSlide>)
        }
        
        </Swiper>
      </>
    );
};

export default Award;
