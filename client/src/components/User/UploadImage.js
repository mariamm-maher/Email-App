import { useState, React } from "react";
import Avatar from "react-avatar-editor";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import img from "../Images/pic1.png"



const UploadImage= () =>
    {
        const [imagecrop,setimagecrop]=useState(false);
        const[image,setimage]=useState("");
        const [src,setsrc]= useState(false);
        const [profile,setprofile]=useState([]);
        const [pview,setpview]=useState(false);
        const profilefinal = profile.map((item) => item.pview);

        const onClose=()=>
        {
            setpview(null);
        };

        const onCrop=(view)=>
        {
            setpview(view);
        };

        const saveCropImage=()=>
        {
            setprofile([...profile,{pview}]);
            setimagecrop(false);

        };

        return(

            <div>
                <div className="profile img text-center p-4">
                    <div className="flex flex-column justify-content-center align-items-center">
                    <img
                    style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid green",
                    }}
                    
                    onclick={() => setimagecrop (true)}
                    src={profilefinal.length ? profilefinal : img}
                    alt=""
                    />
                    
                    <label htmlFor="" className="mt-3 font-semibold text-5xl">Parshotam Rughani</label>
                    <Dialog 
                    visible={imagecrop} 
                    header={()=>(
                    <p htmlFor=""
                    className="text-2x1 font-semibold textcolor">
                    Update Profile
                    </p>)}
                    
                    onHide={()=>
                    setimagecrop (false)}
                    >

                    <div className="confirmation-content flex flex-column align-items-center">
                    <Avatar
                    width={500}
                    height={400}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}
                    shadingColor={"#474649"}
                    backgroundcolor={"#474649"}/>

                    <div className=" flex flex-column align-items-center mt-5 w-12">
                    <div className="flex justify-content-around w-12 mt-4 ">
                    <Button
                    onClick={saveCropImage}
                    label="Save"
                    icon="pi pi-check"/>
                    </div>
                    </div>
                    </div>
                    </Dialog>
                    <InputText 
                    type="file"
                    accept=" image/*"
                    style={{ display: "none" }}
                    onChange={ (event) =>{
                    const file = event.target.files[0];
                    if (file && file.type.substring(0, 5)==="image"){
                    setimage (file);
                    }
                    else { setimage (null);}
                }} />
                    </div>
                    </div>
                    </div>
                    );
                };
                    export default UploadImage;









