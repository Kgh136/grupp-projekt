import React from "react";
import { NavLink, Outlet } from "react-router-dom"


function Page3() {
  return (
    <div style={{backgroundColor: "skyblue"}} >
      <h1 style={{color:"white"}}
      >Utbildningar</h1>
      <h3>Fullstackdeveloper</h3>
      <h3>Webbramverk</h3>
      <NavLink to="Fullstackdeveloper"> Fullstackdeveloper</NavLink>
      
      <NavLink to="Webbramverk">Webbramverk</NavLink>    
      
      <Outlet></Outlet>
    </div>
  );
}

export default Page3;
