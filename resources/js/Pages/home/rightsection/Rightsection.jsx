import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Rightcard from "./Rightcard";

function Rightsection({user}){
    return (
        <>
            <div className="col-md-3" id="rightsection">
                <Rightcard user={user}/>
            </div>
        </>
    );
}

export default Rightsection;
