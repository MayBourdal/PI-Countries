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
            <Link to= '/home' ><button className={style.button}>back to home</button></Link>
            <h1 className={style.h1}>{country[0].name}</h1>
            <img className={style.flag}  src={country[0].flag} alt='flag' />
            <h3 className={style.h3}>Continent: {country[0].continent}</h3>
            <h3 className={style.h3}>Capital: {country[0].capital}</h3>
            <h3 className={style.h3}>Subregion: {country[0].subregion}</h3>
            <h3 className={style.h3}>Area: {country[0].area}</h3>
            <h3 className={style.h3}>Population: {country[0].population}</h3>
            {country[0].activities.length > 0 ? 
                country[0].activities.map( ac => {
                    return(
                        <>
                            <h3 className={style.h3}>Activity name: {ac.name}</h3>
                            <h4 className={style.h4}>Physical Difficulty: {ac.physicalDifficulty}</h4>
                            <h4 className={style.h4}>Technical Difficulty: {ac.technicalDifficulty}</h4>
                            <h4 className={style.h4}>Duration: {ac.duration}</h4>
                            <h4 className={style.h4}>Season: {ac.season}</h4>
                        </>
                    )
                })
                :<h3 className={style.error}>There are no activities</h3>
            }
            
            </> :
            <div>loading</div>
        } 
         </div>
}