import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import {useState} from 'react';
import axios from 'axios';

function SignupIndex(){
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [residence, setResidence] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = () => {
        const url = "http://localhost/signup.php";

        let signupFormData = new FormData();

        signupFormData.append('firstName', firstName);
        signupFormData.append('lastName', lastName);
        signupFormData.append('residence', residence);
        signupFormData.append('birthDate', birthDate);
        signupFormData.append('email', email);
        signupFormData.append('username', username);
        signupFormData.append('password', password);

        axios.post(url, signupFormData)
        .then(window.location.replace('/home'))
        .catch(error => alert(error));
    }

    const loginRedirect = () => {
        window.location.replace('/login');
    }

    window.top.document.title = "SyncHub \\ Registrati";

    return (
        <>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <div class="container" id="formcontainer">
            <div class="row justify-content-center">
                <div class="col-md-6 custom-form">
                    <h2 class="text-center mb-4" id="formtitle">Registrazione</h2>
                    <div class="form-group">
                        <label for="firstName">Nome</label>
                        <input name="firstName" type="text" class="form-control" id="firstName" placeholder="Inserisci il tuo nome" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Cognome</label>
                        <input name="lastName" type="text" class="form-control" id="lastName" placeholder="Inserisci il tuo cognome" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="residence">Residenza</label>
                        <input name="residence" type="text" class="form-control" id="residence" placeholder="Inserisci la tua residenza" value={residence} onChange={(e) => setResidence(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="birthdate">Data di Nascita</label>
                        <input name="birthDate" type="date" class="form-control" id="birthdate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="Inserisci la tua email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input name="username" type="text" class="form-control" id="username" placeholder="Scegli un username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input name="password" type="password" class="form-control" id="password" placeholder="Inserisci la tua password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <input name="send" id="send" type="button" class="btn btn-primary" value="Registrati" onClick={handleSubmit}></input>
                    </div>
                    <div class="form-group">
                        <input  type="button" class="btn btn-primary" value="Ho gia' un account" onClick={loginRedirect}></input>
                    </div>
                        
                </div>
            </div>
        </div>
        </>
    );
}

export default SignupIndex;