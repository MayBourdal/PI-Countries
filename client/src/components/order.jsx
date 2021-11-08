import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ASCENDING, DESCENDING, HIGHEST, LOWER } from '../const/sort'
import { filterCountryByActivity, filterCountryByCountinent, filterCountryByPopulation, sort } from '../store/action'
import './order.css'


export default function Order(){
    const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(handleFilterActivity());
  // }, []);
    
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    function handleFilterCountinent(e){
      dispatch(filterCountryByCountinent(e.target.value))
    }

    function handleFilterActivity(e){
      dispatch(filterCountryByActivity(e.target.value))
    }

    function handleFilterPopulation(e){
      dispatch(filterCountryByPopulation(e.target.value))
    }

    return <div >
      <h3>Filter by order:</h3>
    <select name="select" onChange={onSelectChange}>
    <option value={ASCENDING} > ASCENDING </option>
    <option value={DESCENDING} > DESCENDING </option> 
    </select>
    <select name="select" onChange={handleFilterPopulation}>
    <option value={HIGHEST} > HIGHEST </option>
    <option value={LOWER} > LOWER </option> 
    </select>
    <select name = 'select' onChange={handleFilterCountinent} >
     <option value = "Asia">ASIA</option>
     <option value = "North America">NORTH AMERICA</option>
     <option value = "South America">SOUTH AMERICA</option>
     <option value = "Africa">AFRICA</option>
     <option value = "Antarctica">ANTARTIDA</option>
     <option value = "Oceania">OSEANIA</option>
     <option value = "Europe">EUROPE</option> 
    </select>
    <select name = 'select' onChange={handleFilterActivity} >
                <option value = "Eco Tourism">Eco Tourism</option>
                <option value = "Festivals">Festivals</option>
                <option value = "Golf">Golf</option>
                <option value = "Africa">Bird watching</option>
                <option value = "Bird watching">Mountain Bike</option>
                <option value = "Museum">Museum</option>
                <option value = "Rivers">Rivers</option>
                <option value = "Sky">Sky</option> 
                <option value = "Nightclubs">Nightclubs</option> 
                <option value = "Fishing">Fishing</option>  
                <option value = "Pubs">Pubs</option>  
                <option value = "Tours">Tours</option>
                <option value = "Diving">Diving</option> 
                <option value = "Marathons">Marathons</option> 
                <option value = "Triathlon">Triathlon</option> 
                <option value = "Gastronomic Tour">Gastronomic Tour</option> 
                <option value = "National Parks">National Parks</option> 
                <option value = "Thermal Centers">Thermal Centers</option> 
                <option value = "Adventure Turism">Adventure Turism</option> 
                </select>
    </div>
}