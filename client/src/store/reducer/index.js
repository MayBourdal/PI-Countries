import {ASCENDING, LOWER } from '../../const/sort'
import {FETCH_ACTIVITY, FETCH_COUNTRY, FILTER_COUNTRY_BY_ACTIVITY, FILTER_COUNTRY_BY_CONTINENT, FILTER_COUNTRY_BY_POPULATION, POST_ACTIVITY, SEARCH_COUNTRY, SORT} from '../action'


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
                if(a.name > b.name){
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
            return{
                ...state,
                filterCountries: continentFilter
                
            }
            case POST_ACTIVITY:
                return{
                    ...state
                }
            case FILTER_COUNTRY_BY_ACTIVITY:
                console.log('entre' ,action.payload)
                const countriesAll = state.countries
                const activitys = []
                console.log('soy countries',countriesAll)
                const minu=action.payload.toLowerCase()
                const activityFilter = countriesAll.filter((el) =>{
                    for (let k = 0; k < el.activities?.length ; k++) {
                        if(el.activities[k]?.name.toLowerCase() === minu ){
                            activitys.push(el)
                        }
                    }
                        
                } )
               
                return{
                    ...state,
                    filterCountries: activitys
                    
                }
            case FETCH_ACTIVITY:
                return{
                    ...state,
                    activity:[...state.activity, action.payload]
                } 
            case FILTER_COUNTRY_BY_POPULATION:
            let orderPopulation = [...state.countries]
            orderPopulation.sort((a, b) =>{
                if(a.population < b.population) {
                    return action.payload === LOWER ? -1 : 1
                }
                if(a.population > b.population){
                    return action.payload === LOWER ? 1 : -1
                }
                return 0;
            })
            return{
                ...state,
                filterCountries: orderPopulation
            }
        
//            
           
//             const ActFilter = action.payload === activitys?activitys:activitys.map(el => el.name)
//             const noLoop = ActFilter.reduce((a, e) => {
//                 if(!a.find(d => d == e)) {
//                     a.push(e)
//                 }
//                 return a;
//             }, [])      
                
//             return {
//                         ...state,
//                         activities: noLoop
//                     }
            
            default:
                return state;
    }
}