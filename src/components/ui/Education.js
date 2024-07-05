import React from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

const Education = () => {
    return (
        <div class=" p-4 mt-10 md:mt-20">
    {/* <h2 class="text-3xl text-white font-bold mb-12">Chronology</h2> */}
    <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl flex items-center justify-center"><FaGraduationCap class="mr-1 " />Education</h2>
            <p class="text-gray-600  lg:mx-auto lg:w-6/12">
            My Education Journey
            </p>
          </div>

    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold ">B.Sc (Engg.) in CSE</h3>
                <p class="mt-1 text-sm leading-6 ">International Islamic University Chittagong.</p>
                <p class=" text-sm leading-6 flex items-center"><MdOutlineLocationOn className='mr-1' />Chattogram, Bangladesh.</p>
                <span class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline class="mr-1" />2021-2024.</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-emerald-300 rounded-t-full bg-gradient-to-b from-emerald-400 to-emerald-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-emerald-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold ">Higher Secondary School Certificate (Science)</h3>
                <p class="mt-1 text-sm leading-6">Cumilla Victoria Government college.</p>
                <p class=" text-sm leading-6 flex items-center"><MdOutlineLocationOn className='mr-1' />Cumilla, Bangladesh.</p>

                <span class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline class="mr-1" />
                2017-2019.</span>
            </div>
        </div>

        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold ">Secondary School Certificate (Science)</h3>
                <p class="mt-1 text-sm leading-6">J, B High School.</p>
                <p class=" text-sm leading-6 flex items-center"> <MdOutlineLocationOn className='mr-1' />Jorargonj, Mirsarai, Chittagong.</p>

                <span class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap flex items-center"><IoCalendarOutline class="mr-1" />2009-2017.</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-emerald-300 rounded-t-full bg-gradient-to-b from-emerald-400 to-emerald-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-emerald-400 rounded-full top-1/2"></div>
            </div>
        </div>

  

    </div>
</div>
    );
};

export default Education;