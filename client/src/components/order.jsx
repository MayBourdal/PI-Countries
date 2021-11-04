import { useDispatch } from 'react-redux'
import { ASCENDING, DESCENDING } from '../const/sort'
import { filterCountryByCountinent, sort } from '../store/action'
import './order.css'


export default function Order(){
    const dispatch = useDispatch()
    
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    function handleFilterCountinent(e){
      dispatch(filterCountryByCountinent(e.target.value))
      console.log(e.target.value)
    }


    return <div >
    <select name="select" onChange={onSelectChange}>
    <option value={ASCENDING} > ASCENDING </option>
    <option value={DESCENDING} > DESCENDING </option> 
    </select>
    <select name = 'select' onChange={handleFilterCountinent}>
     <option value = "Asia">ASIA</option>
     <option value = "North America">NORTH AMERICA</option>
     <option value = "South America">SOUTH AMERICA</option>
     <option value = "Africa">AFRICA</option>
     <option value = "Antarctica">ANTARTIDA</option>
     <option value = "Oceania">OSEANIA</option>
     <option value = "Europe">EUROPE</option> 
    </select>
    <select>
      {/* <option value={activity}>actividad turistica </option> */}
    </select>
    </div>
}