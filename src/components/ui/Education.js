"use client";
import React, { useEffect } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Animation should trigger every time the element comes into view
        });

        // Refresh AOS animations
        AOS.refresh();
    }, []);

    return (
        <div className="p-4 mt-10 md:mt-20">
            <div className="mb-12 space-y-2 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl flex items-center justify-center">
                    <FaGraduationCap className="mr-1" />Education
                </h2>
                <p className="text-gray-600 lg:mx-auto lg:w-6/12">
                    My Education Journey
                </p>
            </div>

            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
                        data-aos="flip-down" // Apply AOS attribute here
                    >
                        <h3 className="text-lg font-semibold">B.Sc (Engg.) in CSE</h3>
                        <p className="mt-1 text-sm leading-6">International Islamic University Chittagong.</p>
                        <p className="text-sm leading-6 flex items-center"><MdOutlineLocationOn className='mr-1' />Chattogram, Bangladesh.</p>
                        <span className="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline className="mr-1" />2021-2024.</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-emerald-300 rounded-t-full bg-gradient-to-b from-emerald-400 to-emerald-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-emerald-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
                    </div>
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto"
                        data-aos="flip-down" // Apply AOS attribute here
                    >
                        <h3 className="text-lg font-semibold">Higher Secondary School Certificate (Science)</h3>
                        <p className="mt-1 text-sm leading-6">Cumilla Victoria Government college.</p>
                        <p className="text-sm leading-6 flex items-center"><MdOutlineLocationOn className='mr-1' />Cumilla, Bangladesh.</p>
                        <span className="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline className="mr-1" />2017-2019.</span>
                    </div>
                </div>

                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
                        data-aos="flip-down" // Apply AOS attribute here
                    >
                        <h3 className="text-lg font-semibold">Secondary School Certificate (Science)</h3>
                        <p className="mt-1 text-sm leading-6">J, B High School.</p>
                        <p className="text-sm leading-6 flex items-center"><MdOutlineLocationOn className='mr-1' />Jorargonj, Mirsarai, Chittagong.</p>
                        <span className="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline className="mr-1" />2009-2017.</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-emerald-300 rounded-t-full bg-gradient-to-b from-emerald-400 to-emerald-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
