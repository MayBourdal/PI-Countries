import {ASCENDING } from '../../const/sort'
import {FETCH_COUNTRY, FILTER_COUNTRY_BY_CONTINENT, SEARCH_COUNTRY, SORT} from '../action'


const initialState = {
    countries : [],
    filterCountries: [], 
    activity : []
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
                if(a.name < b.name){
                    return action.payload === ASCENDING ? 1 : -1
                }
                return 0;
            })
            return{
                ...state,
                filterCountries: orderCountries
            }
            case FILTER_COUNTRY_BY_CONTINENT:
                const allCountries = [...state.countries]
                const continentFilter = allCountries.filter(el => el.continent == action.payload)
                
                console.log(allCountries)
                
            return{
                ...state,
                filterCountries: continentFilter
                
            }
            
            default:
                return state;
    }
}