import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../Style.css";
import Leftcard from "./Leftcard";

function Leftsection(){
    return (
        <>
            <div className="col-md-3" id="leftsection">
                <Leftcard />
            </div>
        </>    
    );
}

export default Leftsection;