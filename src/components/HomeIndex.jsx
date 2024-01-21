import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import Main from "./HomeMain";
import Header from "./home/header/Header";
import axios from 'axios';

function HomeIndex(){
    const [isClientLogged, setLogged] = useState('');
    const [err, setErr] = useState('');
    const url = "http://localhost/home.php";

    let isLogin = new FormData();

    isLogin.append('', isClientLogged);

    axios.post(url, isLogin)
    .then((response) => {
        const responseData = response.data;
        setLogged(responseData);
    })
    .catch(error => setErr(error));
    return (
        <>
        <div>
            <Header />
            <Main />
            <p>{isClientLogged}</p>
        </div>
        </>
    );
}

export default HomeIndex;