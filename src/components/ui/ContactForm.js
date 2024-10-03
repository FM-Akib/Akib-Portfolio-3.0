"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineContactMail } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import Button from './Button';



const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_2ry9hf3', 'template_uy87wiq', form.current, 'oPJFJwEIDzi95Ufm3')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          setError('Failed to send email, please try again later.');
          setLoading(false);
      });
  };

  return (
    <>
    {/* <div class="relative h-full w-full "><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
    
    <div className="text-center p-10">
      <h1 className="font-bold text-3xl text-gray-700 mb-2 flex items-center justify-center"><MdOutlineContactMail  class="mr-1 "/>Contact Me</h1>
      <h1 className="text-md text-gray-600">Send me your thoughts, I will get back with you by mail</h1>
    </div>

             
         
    <div class="w-full  px-4 ">
        <div class="relative   mx-auto lg:w-1/2 xl:w-7/12  rounded-lg   "
        style={{ backgroundImage: `url(/assets/pattern9.png)` }}
        >
        <div className="p-8 sm:p-12 bg-[#F1FCE7]/85">
        <form className="space-y-8  bg-[#F1FCE7]/80 " ref={form} onSubmit={sendEmail}>
         
        <div className="space-y-8 ">
         <div>
          <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-emerald-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
             <input  type="email"  name="user_email" required placeholder="Your email" class="w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition"/>
          </div>
         </div>


        <div class="flex flex-col items-end">
        <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-emerald-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <input name="user_name" required type="text" placeholder="Your name" class="w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition"/>
          </div>
        </div>
        </div>

        <div class=" mb-6">
           <textarea
              rows="6"
              name="message" required
              placeholder="Your Message Here"
              class="border-stroke    text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
              ></textarea>
        </div>



        <div>
          <Button loading={loading} />
           {/* <button
              type="submit" value="Send" disabled={loading}
              class="flex items-center justify-center w-full p-3 text-gray-800 bg-[#EFFBE3] hover:bg-emerald-200 transition  rounded   hover:bg-opacity-90"
              >
           Send Message <BiSend class="text-xl ml-1"  />
           </button> */}
        </div>

        {loading && <p class="text-green-500">Sending...</p>}
        {error && <p class="text-red-500">{error}</p>}
        
      </form>
      </div>
        </div>
    </div>
    {/* </div> */}

    
   
                                    
{/* 
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" disabled={loading} />
      {loading && <p>Sending...</p>}
      {error && <p>{error}</p>}
    </form> */}

    </>
  );
};

export default ContactForm;
