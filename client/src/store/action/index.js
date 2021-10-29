import axios from 'axios'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SORT = 'SORT'

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