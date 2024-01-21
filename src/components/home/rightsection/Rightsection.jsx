import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../Style.css"; 
import Rightcard from "./Rightcard";

function Rightsection(){
    return (
        <>
            <div className="col-md-3" id="rightsection">
                <Rightcard />
            </div>
        </>
    );
}

export default Rightsection;