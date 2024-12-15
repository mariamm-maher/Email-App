import React from "react";
import img1 from "../Images/pic1.png";

const ProfileInfo = () => {
  return (
    <>
      <h1 className="mt-[20px] text-5xl font-bold mb-4 text-neonMintGreen">
        Profile info
      </h1>

      <subtitle className="text-neonMintGreen">
        Info about you and your preferences across Mailer services
      </subtitle>

      <div className="h-[130px] mt-[70px] w-[800px] flex ">
        <div className=" w-3/5 h-full">
          <h1 className="text-2xl font-bold mb-2 text-neonMintGreen">
            Your profile info in Mailer services
          </h1>
          <subtitle className="text-neonMintGreen">
            Personal info and options to manage it. You can make some of this
            info, like your contact details, visible to others so they can reach
            you easily. You can also see a summary of your profiles.
          </subtitle>
        </div>

        <div className="w-2/5">
          <img src={img1} className="ml-[30px]" />
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
