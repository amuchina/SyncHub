import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../Style.css";
import HorizontalLine from "../../HorizontalLine";
import NewThread from "./NewThread";
import Friendslist from "./Friendslist";
import Feedback from "./Feedback";
import About from "./About";

function Rightcard(){
    return (
        <>
            <div className="card">
                <NewThread />
                <HorizontalLine />
                <Friendslist />
                <HorizontalLine />
                <Feedback />
                <HorizontalLine />
                <About />                         
            </div>
        </>
    );
}

export default Rightcard;