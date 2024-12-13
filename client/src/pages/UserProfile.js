import React from "react";
import BackgroundAnimation from "../components/global/background";
import ProfileInfo from "../components/User/profileInfo";
import BasicInfo from "../components/User/BasicInfo";
import ContactInfo from "../components/User/ContactInfo";
import Addresses from "../components/User/Addresses";
import Security from "../components/User/Security";

function Profile() {
  return (
    <>
      <div className="relative inset-0 ">
        <BackgroundAnimation />

        <h1 className=" ml-[20px] lg:text-6xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen to-PureWhite font-sans tracking-tight z-10">
          Mailer Account
        </h1>


          <div className=" mt-[30px] rounded-lg flex flex-col items-center ">
            <ProfileInfo/>

            <BasicInfo/>
            <ContactInfo/>
            <Addresses/>
            <Security/>
            
          </div>

          
        </div>

    </>
  );
}

export default Profile;
