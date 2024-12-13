import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




const BasicInfo =()=>
{
  useEffect(() => {
    AOS.init();
  }, [])
    return(<>
    <form data-aos="flip-right"  data-aos-duration="1500" className="bg-darkNavyBlue grid grid-rows-6 p-7 rounded-lg w-[800px] h-[400px] mt-10">
      <div className="z-0 w-full">
        <h1 className="font-sans lg:text-2xl text-neonMintGreen">Basic info</h1>
      </div>

      {/* Profile Picture */}


      <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex" >
        <div className="w-1/4  h-full">
          <label 
            className="peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
          >
            Profile picture
          </label>
        </div>
        <div className="w-2/4 h-full ">
        <label 
            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
          >
            add a profile picture to personalize your account
          </label>
        </div>
          
        
      </div>

      {/* Name */}
      <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex" >
        <div className="w-1/4  h-full">
          <label 
            className="peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
          >
            Name
          </label>
        </div>
        <div className="w-2/4 h-full ">
        <label 
            className="peer-focus:font-medium absolute text-lg text-white font-bold -translate-y-6 scale-75 top-3 origin-[0]"
          >
            Joe Doe
          </label>
        </div>
          
        
      </div>

      {/* Birthday */}
      <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex" >
        <div className="w-1/4  h-full">
          <label 
            className="peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
          >
            Birthday
          </label>
        </div>
        <div className="w-3/4 h-full mt-[-6px] ">
        <input
            type="date"
            id="birthday"
            className=" peer block w-full text-sm font-bold bg-transparent focus:outline-none  dark:text-white "
          />
        </div>

      </div>


      {/* Gender */}
      <div className="border-b-2 dark:border-gray-600 relative mb-8 z-0 w-full flex">
        <div className="w-1/4">   
             <label 
            className="peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]"
          >
            Gender
          </label>
        </div>
        <div className="w-3/4 mt-[-6px]">
        <select
            id="gender"
            className=" w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

      </div>

      {/* Save Button */}
      
      {/* <Button text="Save" styleType = "primary"/> */}
      
      <button class=" w-[80px] items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-br from-neonMintGreen to-darkNavyBlue group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  Save
            </span>
     </button>

    </form>

    </>)
}
export default BasicInfo;