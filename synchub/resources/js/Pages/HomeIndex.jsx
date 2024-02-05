import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Main from "./HomeMain";
import Navbar from "./home/header/Navbar";

function HomeIndex({ auth }){
    return (
        <div>
            <Navbar user={auth.user}/>
            <Main user={auth.user}/>
        </div>
    );
}

export default HomeIndex;
