import React, { useEffect } from "react";
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../../css/Style.css";
import { Link, useForm } from "@inertiajs/react";

function Login(){
    const { data, setData, post, processing, errors, reset } = useForm({ //processing ed errors unused
        email: '',
        password: '',
        remember: true
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
            <div class="container" id="loginbody">
                <div id="prova"></div>
                <form id="loginform" onSubmit={submit}>
                    <h2 class="text-center mb-4">Login</h2>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="text"
                            class="form-control"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Inserisci la tua email"
                            name="email"
                            required
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Inserisci la password"
                            name="password"
                            required
                        ></input>
                    </div>
                    <div class="form-group">

                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary btn-block"
                    >
                        Login
                    </button>
                    <Link
                    className="btn btn-primary btn-block"
                    id="createaccount"
                    href={route('register')}>
                        <button
                            type="button"
                        >
                            Crea un account
                        </button>
                    </Link>
                </form>
            </div>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    );
}

export default Login;
