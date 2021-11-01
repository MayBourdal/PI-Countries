import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage(){
    return(
        <div>
            <h1>Welcome to the page of Mailen Lopez Bourdal</h1>
            <Link to = '/Home'>
            <input type = 'submit' value = 'Ready' />
            </Link>
        </div>
    )
}