import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchCountry} from '../store/action'
import Country from "./country"

export default function Countries (){
    let countries = useSelector((state) => state.filterCountries)
    let dispatch = useDispatch()
    useEffect (() => {
        dispatch(fetchCountry())
    }, [])
    return <div>
        {countries.map((country) => {
            return <Country key = {country.id} name={country.name} continent={country.continent} flag={country.flag}  />
        })}
    </div>
}