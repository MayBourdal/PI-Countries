import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import style from './countryDetails.module.css'

export default function CountryDetails (){
    
    const[country, setCountry] = useState(null)
    let {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3001/api/country/' + id)
        .then((response) => {
            setCountry(response.data)
        })
        return () => {
            setCountry(null)
        }
    }, [id])

    return <div className={style.card}>
        {
            country ?
            <>
            <h1 className={style.h1}>{country.name}</h1>
            <img className={style.flag}  src={country.flag} alt='flag' />
            <h3 className={style.h3}>Continent = {country.continent}</h3>
            <h3 className={style.h3}>Capital = {country.capital}</h3>
            <h3 className={style.h3}>Subregion = {country.subregion}</h3>
            <h3 className={style.h3}>Area = {country.area}</h3>
            <h3 className={style.h3}>Population = {country.population}</h3>
            
            </> :
            <div>loading</div>
        } 
        <Link to= '/home'><button className={style.button}>Return</button></Link>
         </div>
}