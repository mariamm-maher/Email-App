import React from "react";
import Navbar from "../components/User/navbar";
import Sidebar from "../components/User/sidebar";
import Inbox from "../components/User/Inbox";



 function HomePage(){

    return(
        <>

        <Navbar/>

    <div className="flex">
        <Sidebar/>
        <Inbox/>
        
    </div>  
        
    </>) }

export default HomePage;








