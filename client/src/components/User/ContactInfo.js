import React from "react";

const ContactInfo =()=>
{
    return(<>
            <form class=" p-7 rounded-lg  mx-auto w-[800px]  h-[250px] mt-10 border-2">
              <div className="z-0 w-full">
                <h1 className="font-sans lg:text-2xl text-neonMintGreen">
                  Contact info
                </h1>
              </div> 

              <div class=" mt-[5px] relative z-0 w-full mb-5 group flex border-b-2 dark:border-gray-600 ">

                <div className="w-1/4">
                    <label
                   className=" mt-[20px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
                  >
                    Email
                  </label>
                </div>

                <div className="w-3/4">
                <a
                  href="#"
                  name="profile_pic"
                  class=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                 joedoe@mailer.com
                </a>
                </div>
                
              </div>

              <div class=" mt-[5px] relative z-0 w-full mb-5 group flex border-b-2 dark:border-gray-600 ">
              <div className="w-1/4">
                    <label
                   className=" mt-[20px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
                  >
                    Phone
                  </label>
                </div>

                <div className="w-3/4">
                <input
                type="number"
                  class=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />

                </div>
              </div>

              <button class="  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-br from-neonMintGreen to-darkNavyBlue group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Save
                </span>
              </button>
            </form>
    </>)






}
export default ContactInfo;