import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

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

    return <div>
        {
            country ?
            <>
            <h1>{country.name.common}</h1>
            <img src={country.flag} alt='flag' />
            <h2>
            {country.continent}
            {country.capital}
            {country.subregion}
            {country.area}
            {country.population}
            </h2>
            </> :
            <div>loading</div>
        } 
        <Link to= '/home'><button>Return</button></Link>
         </div>
}