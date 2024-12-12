import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";


const Layout=()=>{
    
   return(<>
            <Navbar/>

            <div className="flex">
                <Sidebar/>
                <Outlet/>
            </div> 
        </>) 















}
export default Layout;