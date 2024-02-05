import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Leftcard from "./Leftcard";

function Leftsection({user}){
    return (
        <>
            <div className="col-md-3" id="leftsection">
                <Leftcard user={user}/>
            </div>
        </>
    );
}

export default Leftsection;
