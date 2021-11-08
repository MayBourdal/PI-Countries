import axios from 'axios'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SORT = 'SORT'
export const FILTER_COUNTRY_BY_CONTINENT = 'FILTER_COUNTRY_BY_CONTINENT'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const FILTER_COUNTRY_BY_ACTIVITY = 'FILTER_COUNTRY_BY_ACTIVITY'
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY'
export const FILTER_COUNTRY_BY_POPULATION = 'FILTER_COUNTRY_BY_POPULATION'

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
    return {
        type: FILTER_COUNTRY_BY_CONTINENT,
        payload,
    }
}

export function getActivity(){
    return async function (dispatch) {
        let res = await axios.get('http://localhost:3001/api/activity',{

        });
        return dispatch({type: "GET_ACTIVITY" , payload: res.data})
    }
}

export function postActivity(payload){
    return async function (dispatch){
        let res = await axios.post('http://localhost:3001/api/activity', payload)
        return dispatch({type: POST_ACTIVITY , payload:res.data}); 
    }
}

export function filterCountryByActivity(payload){
    return{
        type: FILTER_COUNTRY_BY_ACTIVITY,
        payload
    }
}

export function fetchActivity(){
    return function (dispatch) {
        axios.get('http://localhost:3001/api/activity')
        .then((activity) => {
            dispatch({
                type: FETCH_ACTIVITY,
                payload: activity.data, 
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function filterCountryByPopulation(payload){
    return {
        type: FILTER_COUNTRY_BY_POPULATION,
        payload,
    }
}