import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {searchCountry} from '../store/action'
import './searchBar.css'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()
    const countriesAll = useSelector((state) => state.countries)

    function onSubmit(e){
        e.preventDefault();
        const toSearch = search.toLowerCase();
        const validate = countriesAll.filter((el) => el.name.toLowerCase().includes(toSearch))
        if(validate.length < 1){
            return alert('The country does not exist')
        }else{
            dispatch(searchCountry(search))
            setSearch('')
        }
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }
    
    


    return <div> 
        <form onSubmit={onSubmit}>
            <input type = 'text' onChange={onInputChange} value = {search} />
            <input type = 'submit' value = 'search' />
        </form>
    </div>
}