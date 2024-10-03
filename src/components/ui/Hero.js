import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import linkedin from '../../assets/linkedin.svg';
import youtube from '../../assets/youtube.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import '../../app/globals.css'
import { FaLaptopCode } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Hero = () => {

    

    return (
        <div className="flex  px-6 md:px-20 mt-14 md:mt-0  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col-reverse  gap-6 md:flex-row items-center max-w-8xl">

        <div className="gap-4  md:mt-20  flex md:flex-col items-center ">
                <div className="icon">
                    <Link target="_blank" href="https://www.linkedin.com/in/fahim-muntasir-akib/" >
                        <Image height={34} width={35} src={linkedin} alt="linkedIn" />
                    </Link>
                </div>
                <div className="icon">
                    <Link target="_blank" href="https://www.youtube.com/@iiuchattimattimtim262/featured">
                        <Image height={35} width={35} src={youtube} alt="youtube" />
                    </Link>
                </div>
                <div className="icon">
                    <Link target="_blank" href="https://github.com/FM-Akib">
                        <Image height={35} width={35} src={github} alt="github" />
                    </Link>
                </div>
                    <div className="icon">
                    <Link target="_blank" href="https://www.facebook.com/md.akib.77377/">
                        <Image height={35} width={35} src={facebook} alt="facebook" />
                    </Link>
                </div>
        </div>

        <div className="w-full md:w-1/2 ">
            <h2 className="caveat-brush-regular text-xl lg:text-5xl text-center md:text-left text-[#393939]  leading-tight font-medium">
                Mohammad Fahim Muntasir Akib.</h2>
                <div className="flex  items-center justify-start my-2 bg-gradient-to-tr  ">
                <div className="w-max flex items-center">
                    
                <FaLaptopCode className="mr-2 text-emerald-500" />
                    <p
                    className="text-emerald-500 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-emerald-500  font-semibold">
                    Web Developer - Mern Stack Developer -
                    </p>
                </div>
                </div>
          
                <p className="mt-6 md:mt-10 text-md lg:text-md text-center md:text-left text-gray-600 leading-relaxed">
                {`Hi, I specialize in MERN Stack web development, proficiently navigating through HTML, CSS, Tailwind, React, JavaScript, Express.js, and MongoDB. Beyond the technicalities, I am adept in C and C++, with a keen eye for optimizing code and enhancing performance. As an undergraduate Teaching Assistant in Object-Oriented Programming C++, I've honed my skills in guiding and mentoring others through complex programming concepts.`}
                </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <Link href="#contact"  class="cursor-pointer">
                <button className="w-full flex items-center justify-center sm:w-40 px-4 py-3 rounded font-semibold text-md bg-emerald-500 text-white border-2 border-emerald-500">Contact Me <FaRegArrowAltCircleRight className='ml-2' /></button>
                </Link>
               
               <Link class="cursor-pointer" href="https://drive.usercontent.google.com/u/0/uc?id=16QxDGtNJFIDVwykuu5bWUW48iypmB_Hk&export=download" target="_blank">
                <button className="w-full flex items-center justify-center mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white hover:bg-slate-100 text-emerald-500 border-2 border-emerald-200">Resume <LuDownload className='animate-bounce ml-2' />
                </button>
                </Link>

            </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image src="https://i.ibb.co/3Y5dJSN/profile1.png" alt="hero" width={600} height={600} />
        </div>
    </div>
</div>
    );
};

export default Hero;