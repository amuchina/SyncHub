import React, { useEffect } from "react";
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import axios from 'axios';

function LoginIndex(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const [err, setErr] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setErr('');
            setMsg('');
        }, 5000)
    }, [msg]);

    const handleSubmit = () => { 
        const loginUrl = "http://localhost/login.php";
        const homeUrl = "http://localhost/home.php";

        let loginFormData = new FormData();
        let responseFormData = new FormData();

        if(username.length === 0 || password.length === 0) {
            setErr('Tutti i campi sono obbligatori');
        }else{
            loginFormData.append('username', username);
            loginFormData.append('password', password);

            axios.post(loginUrl, loginFormData)
            .then((response) => {
                const responseData = response.data;
                setData(JSON.parse(JSON.stringify(responseData).replaceAll('\\\"', '')));
            })
            .catch(error => setErr(error));  
            if(JSON.stringify(data).includes('Invalid user')){
                setErr('Nessun utente trovato');
                console.log(data);
            }else{
                setMsg('Utente trovato! Attendi...');
                console.log(data.email);
                responseFormData.append('username', data.username);
                responseFormData.append('password', data.password);
                responseFormData.append('lastName', data.lastName);
                responseFormData.append('firstName', data.firstName);
                responseFormData.append('residence', data.residence);
                responseFormData.append('birthDate', data.birthDate);
                responseFormData.append('email', data.email);
                axios.post(homeUrl, responseFormData)
                .then((response) => {
                    setMsg(response.data);
                    //homeRedirect();
                })
                .catch(error => setErr(error));
                
            }
        }
    }

    const signupRedirect = () => {
        window.location.replace('/signup');
    }

    const homeRedirect = () => {
        window.location.replace('/home');
    }

    window.top.document.title = "SyncHub \\ Accedi";
    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
            <div class="container" id="loginbody">
                <div id="prova"></div>
                <form id="loginform">
                    <h2 class="text-center mb-4">Login</h2>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Inserisci username" name="username"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Inserisci la password" name="password"></input>
                    </div>
                    <div class="form-group">
                        
                    </div>
                    <button type="button" class="btn btn-primary btn-block" name="submit" onClick={handleSubmit}>Login</button>
                    <button type="button" class="btn btn-primary btn-block" onClick={signupRedirect}>Crea un account</button>
                </form>
            </div>

            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}

export default LoginIndex;