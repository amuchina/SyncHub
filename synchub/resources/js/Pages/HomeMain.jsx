import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/Style.css";
import MainRow from "./MainRow";

function Main({user}){
    return (
        <>
            <div className="container-fluid mt-4" id="mainpage">
                <MainRow user={user}/>
            </div>
        </>
    );
}

export default Main;
