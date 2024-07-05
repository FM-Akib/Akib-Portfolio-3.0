"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../app/swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Award = () => {
    

    return (
        <>
        <div class="py-20">
            <div class="xl:container mx-auto flex justify-center px-6 md:px-12">
            
            <div class="mb-16 md:w-2/3 lg:w-1/2 ">
                <h2 class="mb-4 text-2xl font-bold text-center text-gray-800  md:text-4xl">
                    Tailus blocks leadership
                </h2>
                <p class="text-gray-600 ">
                    Tailus prides itself not only on award-winning technology, but also on the talent of its
                    people of some of the brightest minds and most experienced executives in business.
                </p>
                </div>
            </div>
            </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <Image
            class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src="https://i.ibb.co/WvnRBPd/interactive-Cares.png"
            alt="woman"
            loading="lazy"
            width={840}
            height={805}
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            <div>
                <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                <span class="block text-sm text-gray-500">CEO-Founder</span>
            </div>
            <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
            </div>

            </div>
                                    
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    );
};

export default Award;
