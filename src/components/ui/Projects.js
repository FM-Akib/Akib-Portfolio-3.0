"use client";
import { getProjects } from '@/utiles/getProjects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { GoFileCode } from "react-icons/go";



const Projects = () => {
    const [projects, setprojects] = useState([]);

    useEffect(() => {
      const fetchprojects = async () => {
        const projectsData = await getProjects();
        setprojects(projectsData);
      };
  
      fetchprojects();
    }, []);
  
    // console.log(projects)
    return (
        
        <div class="py-12">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl flex items-center justify-center"><GoFileCode class="mr-1 " />My Projects</h2>
            <p class="text-gray-600  lg:mx-auto lg:w-6/12">
            Showcasing My Latest Creations and Contributions
            </p>
          </div>
      
          <div class="lg:w-4/5 xl:w-4/5 lg:mx-auto px-2 md:px-0 space-y-2 md:space-y-4">
            {
              projects?.map((aproject,i)=>(<div key={i} class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white  border border-transparent hover:border-gray-100  shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">   
                <div class="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                      <Image
                        src={aproject.img}
                        alt="art cover"
                        loading="lazy"
                        width={1000}
                        height={667}
                        class="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                </div>           
                <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                      <span class="mt-4 mb-4 w-full font-medium text-gray-400  sm:mt-0 flex items-center justify-between "> <span class="flex items-center flex-col md:flex-row  "><CiCalendarDate class="text-lg mr-1" />
                      {aproject.projectDate}</span> <span className='flex  md:gap-2'>
                      
                      <Link
                        href={aproject.LiveLink}
                        class="relative flex  w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full  before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95   sm:w-max"
                        >
                        <span class="relative text-base font-semibold text-sky-600 flex items-center ">Live <AiOutlineLink class="ml-1" /> </span>
                       </Link>

                       <Link
                        href={aproject.githubLink}
                        class="relative flex  w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full  before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95   sm:w-max"
                        >
                        <span class="relative text-base font-semibold text-sky-600 flex items-center ">Client<AiOutlineLink class="ml-1" />  </span>
                       </Link>

                    {
                        aproject.githubServer ?    <Link
                        href={aproject.githubServer}
                        class="relative flex  w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full  before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95   sm:w-max"
                        >
                        <span class="relative text-base font-semibold text-sky-600 flex items-center">Sever <AiOutlineLink class="ml-1" /> </span>
                       </Link> : ''
                    }
                      
                        </span> </span>
                      <h3 class="text-xl font-semibold text-gray-800 ">
                        {aproject.projectName}
                      </h3>
                      <p class="my-3 text-gray-600 text-sm whitespace-pre-wrap">
                        {aproject.keyFeature}
                      </p>
          
                      <div class="flex gap-2 flex-wrap ">
                        {
                            aproject.skillsArray.map((askill,i)=>(<span key={i}  class="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:border-gray-300 ">
                                {askill}
                              </span>))
                        }
                        
                        
                      </div>
                </div>
                </div>))
            }

      

          </div>
        </div>
      </div>
                                          
    );
};

export default Projects;