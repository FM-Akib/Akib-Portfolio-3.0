"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Switch from '../ui/Switch';

const Navbar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.ko-fi.com/widgetoverlay.js";
    script.async = true;
    script.onload = () => {
      if (typeof kofiWidgetOverlay !== "undefined") {
        kofiWidgetOverlay.draw('mohamedghulam', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff'
        });
      } else {
        console.error("kofiWidgetOverlay is not defined");
      }
    };
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="bg-[#EFFBE3]">
        <header>
          <nav className="fixed z-40 w-full border-b bg-[#EFFBE3]/90 top-0 right-0 ">
            <div className="container m-auto px-2 md:px-12 lg:px-7">
              <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <input type="checkbox" name="" id="toggleNav" className="peer hidden" />
                <label
                  htmlFor="toggleNav"
                  role="overlaynav"
                  className="fixed left-0 top-0 transition-all 
                    md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 
                    peer-checked:opacity-75 peer-checked:block w-full h-screen
                    bg-gray-200 bg-opacity-75"
                ></label>
                <div className="relative z-40">
                  <a href="#" aria-label="logo">
                    <Image src="https://i.ibb.co/DWxtttS/logo.png" className="w-32 sm:w-36" alt="logo" width={144} height={68} />
                  </a>
                </div>

                <div
                  id="navlinks"
                  className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max"
                >
                  <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
                    <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                      <li className="max-w-max">
                        <a href="#hero" className="block md:px-3">
                          <div
                            className="relative text-cyan-800
                              before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800"
                          >
                            <span>Home</span>
                          </div>
                        </a>
                      </li>
                      <li className="max-w-max">
                        <a href="#projects" className="block md:px-3 group">
                          <div
                            className="relative text-gray-600
                              before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="transition group-hover:text-cyan-700">Projects</span>
                          </div>
                        </a>
                      </li>
                      <li className="max-w-max">
                        <a href="#skills" className="block md:px-3 group">
                          <div
                            className="relative text-gray-600
                              before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="transition group-hover:text-cyan-700">Skills</span>
                          </div>
                        </a>
                      </li>
                      <li className="max-w-max">
                        <a href="#education" className="block md:px-3 group">
                          <div
                            className="relative text-gray-600
                              before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="transition group-hover:text-cyan-700">Education</span>
                          </div>
                        </a>
                      </li>

                      <li className="max-w-max">
                        <a href="#award" className="block md:px-3 group">
                          <div
                            className="relative text-gray-600
                              before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="transition group-hover:text-cyan-700">Achievements</span>
                          </div>
                        </a>
                      </li>

                      {/* <li className="max-w-max md:ps-5">
                        <Switch/>
                      </li> */}


                    </ul>



                    <div className="flex sm:hidden pt-4 w-full">
                      <Link href="tel:+8801701741656" aria-label="call">
                        <button
                          type="button"
                          className="flex justify-center items-center w-full py-3 px-6 text-center rounded-lg transition bg-emerald-200"
                        >
                          <span className="block text-gray-800 text-sm">+8801701741656</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="block-endnav w-max flex items-center gap-4">
                  <Link href="tel:+8801701741656" aria-label="call">
                    <button
                      type="button"
                      className="hidden sm:block w-full py-3 px-6 text-center rounded-lg transition bg-emerald-100 sm:w-max"
                    >
                      <span className="block text-gray-800 text-sm">+8801701741656</span>
                    </button>
                  </Link>

                  <div className="flex items-center md:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggleNav"
                      aria-label="hamburger"
                      id="hamburger"
                      className="relative p-6 -mr-6"
                    >
                      <div role="hidden" id="line" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                      <div role="hidden" id="line2" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
