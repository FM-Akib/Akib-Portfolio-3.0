import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiCodeforces } from "react-icons/si";
import { LuFileCode2 } from "react-icons/lu";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


const About = () => {
    return (
        <>
         


<div class="  py-16">
  <div class="container m-auto text-gray-600  md:px-12 xl:px-6">
    <div class="mb-12 space-y-4 px-6 md:px-0">
      <h2 class="text-center text-2xl font-bold text-gray-800  md:text-3xl">
      Problem Solving
      </h2>
      <p class="text-center">
      Discover more about my problem solving journey.
      </p>
    </div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper pb-8">
        <div class="swiper-slide !bg-transparent px-6 md:px-0">
          <div class="p-2 border border-gray-100  rounded-3xl bg-white  shadow-2xl shadow-gray-600/10  md:mx-auto lg:w-10/12 xl:w-8/12">
            <div class="grid md:grid-cols-5">
              <Image
                src="https://i.ibb.co/F52yz1n/In-Shot-20240706-004155921.jpg"
                class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                alt="image"
                width="640"
                height="422"
                loading="lazy"
              />
              <div class="md:col-span-3 mx-auto space-y-4 p-6 text-center sm:p-8">
                {/* <div class="mx-auto w-24">
                  <Image
                    src="https://i.ibb.co/DWxtttS/logo.png"
                    alt="company logo"
                    height="400"
                    width="142"
                    loading="lazy"
                  />
                </div> */}
                <p class="text-md">During the early days of my university, I honed my problem-solving skills by tackling challenges on various platforms. Engaging in problem-solving not only sharpened my analytical abilities but also helped me gain a deeper understanding of algorithms and data structures.</p>
                <h6 class="text-lg  font-semibold leading-none flex items-center justify-center"><SiCodeforces  class="mr-1"/> CodeForces - <Link class="ml-1 text-blue-500" href="https://codeforces.com/profile/Motimiya08" target='_blank'>Motimiya08 </Link></h6>
                <h6 class="text-lg font-semibold leading-none flex items-center justify-center"><LuFileCode2   class="mr-1"/> AtCoder - <Link class="ml-1 text-blue-500" href="https://atcoder.jp/users/Muntasir_Akib08" target='_blank'>Muntasir_Akib08 </Link></h6>
                <h6 class="text-lg font-semibold leading-none flex items-center justify-center"><SiCodechef    class="mr-1"/> CodeChef - <Link class="ml-1 text-blue-500" href="https://www.codechef.com/users/akib_08" target='_blank'>akib_08</Link></h6>
                <h6 class="text-lg font-semibold leading-none flex items-center justify-center"><SiLeetcode     class="mr-1"/> LeetCode - <Link class="ml-1 text-blue-500" href="https://leetcode.com/u/muntasirakib08/" target='_blank'>muntasirakib08</Link></h6>
                
              </div>
            </div>
          </div>
        </div>

      
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>
                                    
                                       
        </>
    );
};

export default About;