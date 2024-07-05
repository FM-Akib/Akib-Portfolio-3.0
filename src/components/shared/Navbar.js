"use client";
import React, { useState, useEffect } from 'react';
import '../../app/globals.css'
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=" h-16 flex overflow-hidden">
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ease-in-out duration-300 md:hidden`}
      >
        {/* Your Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block hover:text-green-400" onClick={() => handleScrollToSection('hero')}>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-green-400" onClick={() => handleScrollToSection('award')}>
                Award
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-green-400" onClick={() => handleScrollToSection('education')}>
                Education
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-green-400" onClick={() => handleScrollToSection('projects')}>
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-green-400" onClick={() => handleScrollToSection('skills')}>
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className=" ">
          <div className="container mx-auto md:flex md:items-center md:justify-between md:px-28 ">
            <div className="flex justify-between items-center py-4 px-2">
              {/* <h1 className="  font-extrabold text-2xl text-gray-700 ">Akib</h1> */}
              <Image src="https://i.ibb.co/rMnc58H/logo.png" alt="logo akib" className="border-emerald-200 border-b" width={160} height={60} />

              <button
                id="open-sidebar"
                onClick={toggleSidebar}
                className={`text-gray-500 hover:text-gray-600 md:hidden ${
                  isSidebarOpen ? 'transform rotate-90' : ''
                } transition-transform duration-300`}
              >
                {isSidebarOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isMdScreen && (
              <ul className="flex space-x-8 ">
                <li>
                  <button  className="hover:text-green-400" onClick={() => handleScrollToSection('hero')}>
                    Home
                  </button>
                </li>
                <li>
                  <button  className="hover:text-green-400" onClick={() => handleScrollToSection('award')}>
                    Award
                  </button>
                </li>
                <li>
                  <button className="hover:text-green-400" onClick={() => handleScrollToSection('education')}>
                    Education
                  </button>
                </li>
                <li>
                  <button  className="hover:text-green-400" onClick={() => handleScrollToSection('projects')}>
                    Projects
                  </button>
                </li>
                <li>
                  <button  className="hover:text-green-400" onClick={() => handleScrollToSection('skills')}>
                    Skills
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
