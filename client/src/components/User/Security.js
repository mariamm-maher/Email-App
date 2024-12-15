import React from "react";
import img2 from "../Images/pic2.png";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoKey } from "react-icons/io5";

const Security = () => {
  return (
    <>
      <h1 className="mt-[50px] text-5xl font-bold mb-4 text-neonMintGreen">
        Security
      </h1>

      <subtitle className="text-neonMintGreen">
        Settings and recommendations to help you keep your account secure
      </subtitle>

      <div className="h-[130px] mt-[70px] w-[800px] flex ">
        <div className=" w-3/5 h-full">
          <h1 className="text-2xl font-bold mb-2 text-neonMintGreen">
            Your Account is protected
          </h1>
          <subtitle className="text-neonMintGreen">
            The Security checkup checked your account and found no recommended
            actions
          </subtitle>
        </div>

        <div className="w-2/5">
          <img src={img2} className="ml-[30px]" />
        </div>
      </div>

      <form
        data-aos="flip-right"
        data-aos-duration="1500"
        class=" bg-darkNavyBlue p-7 rounded-lg  mx-auto w-[800px]  h-[150px] mt-10 -z-50"
      >
        <h1 className="font-sans lg:text-2xl text-neonMintGreen">
          Recent Security Activity
        </h1>
        <subtitle className=" text-neonMintGreen">
          The Security checkup checked your account and found no recommended
          actions
        </subtitle>
      </form>

      <form
        data-aos="flip-right"
        data-aos-duration="1500"
        className="bg-darkNavyBlue grid grid-rows-6 p-7 rounded-lg w-[800px] h-[500px] mt-10"
      >
        <div className="z-0 w-full">
          <h1 className="font-sans lg:text-2xl text-neonMintGreen">
            How you sign in to Mailer
          </h1>
          <subtitle className=" text-neonMintGreen">
            Make sure you can always access your Mailer Account by keeping this
            information up to date
          </subtitle>
        </div>

        {/* 2-step verification*/}

        <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex">
          <div className=" w-1/4 space-x-[1.5vw] ">
            <RiShieldKeyholeFill />
            <label className=" mt-[5px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]">
              2-Step Verification
            </label>
          </div>
          <div className="w-2/4 h-full ">
            <label className="mt-[5px] ml-[20vw] peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]">
              2-Step Verification off
            </label>
          </div>
          <div className="w-1/4 ml-[40vw]">
            <IoIosArrowForward />
          </div>
        </div>

        {/* passkey*/}
        <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex">
          <div className="w-1/4 space-x-[1.5vw] h-full">
            <IoKey />
            <label className=" mt-[5px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]">
              Passkeys and Security keys
            </label>
          </div>
          <div className="w-2/4 h-full ">
            <label className="mt-[5px] ml-[20vw] peer-focus:font-medium absolute text-lg text-white font-bold -translate-y-6 scale-75 top-3 origin-[0]">
              2 Passkeys
            </label>
          </div>
          <div className="w-1/4 ml-[40vw]">
            <IoIosArrowForward />
          </div>
        </div>

        {/* Birthday */}
        <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex">
          <div className="w-1/4 space-x-[1.5vw] h-full">
            <IoKey />
            <label className=" mt-[5px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]">
              Passkeys and Security keys
            </label>
          </div>
          <div className="w-2/4 h-full ">
            <label className="mt-[5px] ml-[20vw] peer-focus:font-medium absolute text-lg text-white font-bold -translate-y-6 scale-75 top-3 origin-[0]">
              2 Passkeys
            </label>
          </div>
          <div className="w-1/4 ml-[40vw]">
            <IoIosArrowForward />
          </div>
        </div>

        {/* Gender */}
        <div className="relative z-0 w-full mb-8 group border-b-2 dark:border-gray-600 flex">
          <div className="w-1/4 space-x-[1.5vw] h-full">
            <IoKey />
            <label className=" mt-[5px] peer-focus:font-medium font-bold absolute text-lg text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 origin-[0]">
              Passkeys and Security keys
            </label>
          </div>
          <div className="w-2/4 h-full ">
            <label className="mt-[5px] ml-[20vw] peer-focus:font-medium absolute text-lg text-white font-bold -translate-y-6 scale-75 top-3 origin-[0]">
              2 Passkeys
            </label>
          </div>
          <div className="w-1/4 ml-[40vw]">
            <IoIosArrowForward />
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
    </>
  );
};
export default Security;
