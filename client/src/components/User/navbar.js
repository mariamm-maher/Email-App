import React from "react";
import { Outlet , Link } from "react-router-dom";




const Navbar=()=>{

    return(<>
    
    <nav class="fixed top-0 z-50 w-full bg-white bg-opacity-80 dark:bg-darkNavyBlue dark:border-gray-700">
    <div class="absolute inset-x-0 top-[-80px] h-full bg-gradient-to-r from-darkNavyBlue to-neonMintGreen blur-2xl -z-10"></div>

    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <a href="#" class="flex ms-2 md:me-24">
                    <span class="self-center text-xl font-semibold sm:text-3xl whitespace-nowrap text-neonMintGreen">
                        Mailer
                    </span>
                </a>
            </div>

            <form class="relative max-w-md w-full mx-4 lg:mx-auto">
                <div class="absolute left-[-350px] top-[-16px] w-full max-w-md">
                    <div class="relative max-w-md w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" 
                               class="block w-full py-2 px-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-neonMintGreen focus:border-neonMintGreen dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-neonMintGreen" 
                               placeholder="Search for emails" required />
                        <button class="text-white absolute end-2.5 bottom-2  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </form>

            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <div>
                        <Link to="/Profile" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>


    </>)











}

export default Navbar;