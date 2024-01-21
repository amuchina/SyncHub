import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import MainRow from "./MainRow";

function Main(){
    return (
        <>
            <div className="container-fluid mt-4" id="mainpage">
                <MainRow />
            </div>
        </>    
    );
}

export default Main;