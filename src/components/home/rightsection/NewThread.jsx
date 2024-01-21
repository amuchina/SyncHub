import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../Style.css";

function NewThread(){
    return (
        <>
            <div className="card-body" id="newthread">
                <button type="button" className="btn btn-danger" id="addpost">+</button>
            </div>
        </>
    );
}

export default NewThread;