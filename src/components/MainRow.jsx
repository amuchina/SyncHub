import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import Leftsection from "./home/leftsection/Leftsection";
import Centersection from "./home/centersection/Centersection";
import Rightsection from "./home/rightsection/Rightsection";

function MainRow(){
    return (
        <>
            <div className="row" id="homebody">
                <Leftsection />
                <Centersection />
                <Rightsection />
            </div>
        </>
    );
}

export default MainRow;