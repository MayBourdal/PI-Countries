import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchCountry} from '../store/action'
import Country from "./country"
import { Link } from "react-router-dom"
import Paginado from "./paginado"
import SearchBar from "./searchBar"
import Order from "./order"
import './Home.css'


export default function Home (){
    let allCountries = useSelector((state) => state.filterCountries)
    let dispatch = useDispatch()
    let [currentPage, setCurrentPage] = useState(1) //guardo en un estados local la pag actual 
    let [countriesPerPage]= useState(9) //guardo cuantos personajes quiero por pag
    let indexOfLastCountry = currentPage * countriesPerPage // indice del ultimo personaje = a la pag actual en la que me encuetro * la cantidad de paises por pag
    let indexOfFirstCountry =  indexOfLastCountry - countriesPerPage // indice del primer pais = al indice del ultio personaje - los personajes por pag
    let currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    let paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() => {
        dispatch(fetchCountry())
    }, [dispatch])

    function handleOnclick(e){
        e.preventDefault();
        dispatch(fetchCountry())
    }

    
    return ( 
    <div>
        <h1>Countries</h1>
        <SearchBar />
        <Order />
        <button onClick={e => {handleOnclick(e)}}>All</button>
        {currentCountries?.map((country) => {
            return <Country key = {country.id} name={country.name} continent={country.continent} flag={country.flag}  />
        })}
        <Paginado
        countriesPerPage = {countriesPerPage}
        allCountries = {allCountries.length}
        paginado = {paginado}
        />
    </div>
    )
}
