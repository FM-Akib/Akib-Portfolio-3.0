"use client";
import { getSkills } from '@/utiles/getSkills';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineCode } from "react-icons/ai";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await getSkills();
      setSkills(skillsData);
    };

    fetchSkills();
  }, []);

  // console.log(skills)

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-3xl text-gray-700 mb-2 flex items-center justify-center"><AiOutlineCode class="mr-1 "/>My Skills</h1>
        <h1 className="text-md text-gray-600">My Technical Proficiencies and Tools of the Trade</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-y-5 gap-x-5 mt-5 md:mt-10 mb-5"
      >

      {
        skills?.map((askill,i)=>(<div key={i} 
          className="w-32 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src={askill.img}
              alt="Product" height={120} width={140}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-2 w-40">
              <span className="text-gray-400 mr-3 uppercase text-xs">{askill.skillName}</span>
              {/* <p className="text-md font-bold text-black truncate block capitalize">Product Name</p> */}
              <div className="flex items-center">
                <p className="text-sm font-semibold text-emerald-500 cursor-auto ">{askill.level}</p>
  
              </div>
            </div>
        </div>))
      }
        

        
        {/* Repeat the above product card as needed */}
      </section>

      <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          
        </h2>
      </div>

      
      <script>
        {`
          kofiWidgetOverlay.draw('mohamedghulam', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#323842',
            'floating-chat.donateButton.text-color': '#fff'
          });
        `}
      </script>
    </>
  );
};

export default Skills;
