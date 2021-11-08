import React from 'react';
import { Link } from 'react-router-dom';
import style from './landPage.module.css'


export default function LandingPage(){
    return(
        <div>
            <h1 className={style.h1}>Welcome to my Country page</h1>
            <Link className={style.link} to = '/Home'>
            <input className={style.button} type = 'submit' value = 'Ready' />
            </Link>
            <h3 className={style.h3}>by Mailen Lopez Bourdal</h3>
        </div>
    )
}