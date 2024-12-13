import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Addresses =()=>
    {
      useEffect(() => {
        AOS.init();
      }, [])
        return(<>
        <form data-aos="flip-right"  data-aos-duration="1500" class=" bg-darkNavyBlue p-7 rounded-lg mx-auto w-[800px] h-[350px] mt-10 ">
              <div className="z-0 w-full">
                <h1 className="font-sans text-white lg:text-2xl ">Addresses</h1>
              </div>
              <div class="relative z-0 w-full mb-5 group ">
                <a
                  href="#"
                  name="profile_pic"
                  class=" mt-8 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <label
                    for="floating_email"
                    class=" peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
                  >
                    Home
                  </label>
                </a>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <a
                  href="#"
                  name="profile_pic"
                  class="mt-8 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <label
                    for="floating_email"
                    class=" peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
                  >
                    Work
                  </label>
                </a>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <a
                  href="#"
                  name="profile_pic"
                  class="mt-8 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <label
                    for="floating_email"
                    class=" peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
                      >
                    Other
                  </label>
                </a>
              </div>

              <button class=" mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-br from-neonMintGreen to-darkNavyBlue group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Save
                </span>
              </button>
            </form></>)
    }
    export default Addresses;