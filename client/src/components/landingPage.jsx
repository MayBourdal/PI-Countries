import React from 'react';
import { Link } from 'react-router-dom';
import './landPage.css';


export default function LandingPage(){
    return(
        <div className>
            <h1>Welcome to my page</h1>
            <h1 className = 'dream'>One dream at a time...</h1>
            <Link to = '/Home'>
            <input type = 'submit' value = 'Ready?' />
            </Link>
            <h2>by Mailen Lopez Bourdal</h2>
        </div>
    )
}