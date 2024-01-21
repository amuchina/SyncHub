import React from 'react';
import '../index.css';
import HomeIndex from './HomeIndex';
import {BrowserRouter as RT, Routes, Route} from 'react-router-dom';
import SignupIndex from './SignupIndex';
import LoginIndex from './LoginIndex';

function HandlePath(){
    return (
        <>
            <RT>
                <Routes>
                    <Route path="/home" element={<HomeIndex />}/>
                    <Route path="/signup" element={<SignupIndex />}/>   
                    <Route path="/login" element={<LoginIndex />}/>
                </Routes>
            </RT> 
        </>
    );
}

export default HandlePath;