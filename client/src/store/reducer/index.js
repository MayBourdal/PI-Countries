import { ASCENDING } from '../../const/sort'
import {FETCH_COUNTRY, SEARCH_COUNTRY, SORT} from '../action'


const initialState = {
    countries : [],
    filterCountries: [] 
}

export default function reducer (state = initialState, action) {

    switch(action.type){
        case FETCH_COUNTRY:
            return{
                ...state,
                countries: action.payload,
                filterCountries: action.payload
            }
        case SEARCH_COUNTRY:
            return{
                ...state,
                filterCountries: action.payload
            }
        case SORT:
            let orderCountries = [...state.countries]
            orderCountries.sort((a, b) =>{
                if(a.name < b.name) {
                    return action.payload === ASCENDING ? -1 : 1
                }
                if(a.name > b.name){
                    return action.payload === ASCENDING ? 1 : -1
                }
                return 0;
            })
            return{
                ...state,
                filterCountries: orderCountries
            }
            default:
                return state;
    }
}