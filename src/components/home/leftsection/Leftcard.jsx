import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../Style.css";
import Categories from "./Categories";
import HorizontalLine from "../../HorizontalLine";
import Recenthubs from "./Recenthubs";
import Pinnedhubs from "./Pinnedhubs";
import Hubsleaderboard from "./Hubsleaderboard";

function Leftcard(){
    return (
        <>
            <div className="card">
                <Categories />
                <HorizontalLine />
                <Recenthubs />
                <HorizontalLine />
                <Pinnedhubs />
                <HorizontalLine />
                <Hubsleaderboard />
            </div>
        </>
    );
}

export default Leftcard;