import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComposeEmail from '../global/composeEmail';


export default function LabelForm(){
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="flex items-center ">
        <div className="flex items-center ">
          <span className='flex-1 ms-3 whitespace-nowrap font-bold text-xl'>Labels</span>
          <button onClick={handleOpen} className=" mt-[3px] ml-[130px] w-9 h-9 flex items-center rounded-lg text-gray-500 transition dark:group-hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

          <svg xmlns="http://www.w3.org/2000/svg" 
                class="mt-[2px] ml-[7px] w-5 h-5 "
                viewBox="0 0 448 512"
                fill="currentColor">
                
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
            </svg>
          </button>

  
        </div>
        
        {open && (
               <div 
               className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-end items-end z-[9999]"
               onClick={handleClose}
             >
               <div 
                 className="bg-darkNavyBlue p-6 rounded-lg flex flex-col w-[100] p-6 rounded-2xl shadow-xl"
                 onClick={(e) => e.stopPropagation()} 
               >
                <h2 
              id="modal-modal-title" 
              className="text-neonMintGreen text-[1.6vw]  mb-4"
            >
                New Label
            </h2>
            <span>please enter a new label:</span>
            <input type='text'className='h-[50px] w-[400px] bg-transparent border-2 rounded-lg'>
            
            
            </input>


            <div class="flex space-x-[1vw] ml-[17vw] mt-[3vw]">

            <Link
               class=" dark:text-neonMintGreen focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black   p-2  rounded-3xl "
               onClick={handleClose}>
                
                <span class="flex-1 ">Cancel</span>
            
            </Link>
            <Link
             class="bg-gradient-to-br from-neonMintGreen to-darkNavyBlue  dark:text-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black   p-2  rounded-3xl ">

                <span class="flex-1 ">Create</span>
            
            </Link>




            </div>
            






               </div>
             </div>
             
            )}
      </div>
    
    
    
    
    
    )
    
}