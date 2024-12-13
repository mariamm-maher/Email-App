import React from "react";
import img2 from "../Images/pic2.png"


const Security =()=>
{   
    return(<>
    
    
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
                The Security checkup checked your account and found no recommended actions
                </subtitle>
                
              </div>

              <div className="w-2/5">
                  <img src={img2} className="ml-[30px]"/>
              </div>

            </div>


            <form data-aos="flip-right"  data-aos-duration="1500" class=" bg-darkNavyBlue p-7 rounded-lg  mx-auto w-[800px]  h-[150px] mt-10 -z-50">
            
            
                <h1 className="font-sans lg:text-2xl text-neonMintGreen">
                  Recent Security Activity
                </h1>
                <subtitle className=" text-neonMintGreen">
                The Security checkup checked your account and found no recommended actions
                </subtitle>
            </form>
    
    </>)

}
export default Security;