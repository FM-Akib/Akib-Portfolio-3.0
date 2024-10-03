"use client";
import { getProjects } from '@/utiles/getProjects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { GoFileCode } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
        const projectsData = await getProjects();
        setProjects(projectsData);
      };
  
      fetchProjects();

      // Initialize AOS
      AOS.init({
        duration: 1000, // animation duration in milliseconds
        once: false, // animation should happen every time the element comes into view
      });
    }, []);
  
    useEffect(() => {
      // Refresh AOS animations
      AOS.refresh();
    }, [projects]);

    return (
        <div className="py-12">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-3xl flex items-center justify-center">
                        <GoFileCode className="mr-1" />My Projects
                    </h2>
                    <p className="text-gray-600 lg:mx-auto lg:w-6/12">
                        Showcasing My Latest Creations and Contributions
                    </p>
                </div>
                
                <div className="lg:w-4/5 xl:w-4/5 lg:mx-auto px-2 md:px-0 space-y-2 md:space-y-4">
                    {projects?.map((aproject, i) => (
                        <div
                            key={i}
                            className="group relative -mx-4 sm:-mx-8 p-4 sm:p-8 rounded-3xl bg-white border border-transparent hover:border-gray-100 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10"
                            // data-aos="zoom-in" // Apply AOS attribute here
                            // data-aos-anchor-placement="top-center"
                        >
                            <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                                <Image
                                    src={aproject.img}
                                    alt={aproject.projectName}
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>           
                            <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                                <span className="mt-4 mb-4 w-full font-medium text-gray-400 sm:mt-0 flex items-center justify-between">
                                    <span className="flex items-center flex-col md:flex-row ">
                                        <CiCalendarDate className="text-lg mr-1" />
                                       <span className='text-xs md:text-sm'>{aproject.projectDate}</span> 
                                    </span>
                                    <span className='flex md:gap-2'>
                                        <Link
                                            href={aproject.LiveLink}
                                            className="bg-yellow-200 rounded-md text-neutral-800 transition-all duration-200 hover:bg-neutral-800 hover:text-white relative flex w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                        >
                                            <span className="relative text-base font-semibold flex items-center">
                                                Live <AiOutlineLink className="ml-1" />
                                            </span>
                                        </Link>

                                        <Link
                                            href={aproject.githubLink}
                                            className="transition-all duration-200 hover:bg-neutral-800 hover:text-white rounded-md relative flex w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                        >
                                            <span className="relative text-base font-semibold  flex items-center">
                                                Client <AiOutlineLink className="ml-1" />
                                            </span>
                                        </Link>

                                        {aproject.githubServer && (
                                            <Link
                                                href={aproject.githubServer}
                                                className="transition-all duration-200 hover:bg-neutral-800 hover:text-white rounded-md relative flex w-full items-center justify-center md:px-4 px-2 py-1 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                            >
                                                <span className="relative text-base font-semibold  flex items-center">
                                                    Server <AiOutlineLink className="ml-1" />
                                                </span>
                                            </Link>
                                        )}
                                    </span>
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {aproject.projectName}
                                </h3>
                                <p className="my-3 text-gray-600 text-sm whitespace-pre-wrap">
                                    {/* {aproject.keyFeature} */}
                                    {
                                    aproject?.keyFeature?.map((feature, index) => (
                                        <div key={index} className='my-2'>
                                        <strong>{feature.title}:</strong> {feature.description}
                                        </div>
                                    ))
                                    }
                                    </p>

                                <div className="flex gap-2 flex-wrap self-end">
                                    {aproject.skillsArray.map((askill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 md:mt-4 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white hover:border-gray-300"
                                        >
                                            {askill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
