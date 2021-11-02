import axios from 'axios'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SORT = 'SORT'
export const FILTER_COUNTRY_BY_CONTINENT = 'FILTER_COUNTRY_BY_CONTINENT'

export function fetchCountry(){
    return function (dispatch) {
        axios.get('http://localhost:3001/api/country')
        .then((country) => {
            dispatch({
                type: FETCH_COUNTRY,
                payload: country.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function searchCountry(search){
    return function (dispatch) {
        axios.get('http://localhost:3001/api/country?name=' + search)
        .then((country) => {
            dispatch({
                type: SEARCH_COUNTRY,
                payload: country.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function sort(order){
    return{
        type: SORT,
        payload: order
    }
}

export function filterCountryByCountinent(payload){
    console.log(payload)
    return {
        type: FILTER_COUNTRY_BY_CONTINENT,
        payload,
    }
}