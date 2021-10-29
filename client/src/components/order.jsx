import { useDispatch } from 'react-redux'
import { ASCENDING, DESCENDING } from '../const/sort'
import { sort } from '../store/action'



export default function Order(){
    const dispatch = useDispatch()
    
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    return <select name="select" onChange={onSelectChange}>
    <option value={ASCENDING} > Ascending </option>
    <option value={DESCENDING} > Descending </option>
   
  </select>
}