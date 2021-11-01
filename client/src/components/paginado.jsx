import React from "react";

export default function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumber = []

    for(let i = 0; i <= Math.ceil(allCountries/countriesPerPage); i++){ //Math.ceil redondea todos mis paises sobre los paises que necesito por pag
        pageNumber.push(i+1)
        
    }
    return(
        <nav>
            <ul className = 'paginado'>
                { pageNumber && 
                pageNumber.map(number => (
                    <li href = 'number' key={number}>
                    <a href='!#' onClick = {() => paginado(number)}> {number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}