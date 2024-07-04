import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import linkedin from '../../assets/linkedin.svg';
import youtube from '../../assets/youtube.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';

const Hero = () => {
    return (
        <div className="flex  px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">

        <div className="gap-4  md:mt-20  flex md:flex-col ">
                <div className="icon">
                    <Link target="_blank" href="https://www.linkedin.com/in/mohammad-fahim-muntasir-akib-a1aa50215/" >
                        <Image height={34} width={35} src={linkedin} alt="linkedIn" />
                    </Link>
                </div>
                <div className="icon">
                    <Link target="_blank" href="https://www.youtube.com/@iiuchattimattimtim262/featured">
                        <Image height={35} width={35} src={youtube} alt="youtube" />
                    </Link>
                </div>
                <div className="icon">
                    <Link target="_blank" href="https://github.com/Motimiya08">
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
            <h2 className="text-3xl lg:text-5xl text-center md:text-left text-[#2A2626] leading-tight font-medium">
                Mohammad Fahim Muntasir Akib.</h2>
            <p class="text-emerald-500 my-1">Web Developer - Mern Stack Developer</p>
            <p className="mt-6 md:mt-10 text-md lg:text-md text-center md:text-left text-gray-700  leading-relaxed">
               Hi, I specialize in MERN Stack web development, proficiently navigating through HTML, CSS, Tailwind, React, JavaScript, Express.js, and MongoDB. Beyond the technicalities, I am adept in C and C++, with a keen eye for optimizing code and enhancing performance. As an undergraduate Teaching Assistant in Object-Oriented Programming C++, I've honed my skills in guiding and mentoring others through complex programming concepts.

            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
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