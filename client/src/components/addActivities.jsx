import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {searchCountry} from '../store/action'
import Country from "./country"
import style from './AddActivities.module.css'


export default function AddActivities(){
    let allCountries = useSelector((state) => state.filterCountries)
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')
    let dispatch = useDispatch()

    // useEffect (() => {
    //     dispatch(())
    // }, [])


    console.log(search)
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchCountry(search))
        setSearch('')
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }
        function onInputChangeForm(e){
            e.preventDefault()
            setCountry({
                ...country,
                [e.target.name] : e.target.value
    
            })
        }
    
        function onSubmitForm(e){
            e.preventDefault()  
            axios.post('http://localhost:3001/api/activity' , country)
            .then(() => {     
            })
        }

    return (
     
    <form onSubmit = {onSubmitForm}>
        <div className={style.div}>
            <button onClick={onSubmit}>search</button>
            <input type = 'text' onChange={onInputChange} value = {search} placeholder='Enter country' />
            {allCountries?.map((country) => {
            return <Country key = {country.id} name={country.name} flag={country.flag} id={country.id}/>
        })}
        </div>
        
        <div className={style.div}>
            <label htmlFor=''>Name:</label>
            <input onChange={onInputChange} name='name' type='text' value={country.name} />
        </div>
        
        <div className={style.div}>
            <label htmlFor=''>Duration:</label>
            <input onChange={onInputChange} name='duration' type='text' value={country.duration}/>
        </div>
        
        <div className={style.div}>
            <h3>Physical Difficulty</h3>
        <label htmlFor='physical difficulty'>Low:</label>
        <input onChange={onInputChange} name='difficulty' type='radio' value={country.difficulty} />
        <label htmlFor='physical difficulty'>Medium:</label>
        <input onChange={onInputChange} name='difficulty' type='radio' value={country.difficulty} />
        <label htmlFor='physical difficulty'>High:</label>
        <input onChange={onInputChange} name='difficulty' type='radio' value={country.difficulty} />
        </div>

        <div className={style.div}>
        <h3>Technical Difficulty</h3>
        <label htmlFor='technical difficulty'>Low:</label>
        <input onChange={onInputChange} name='technical difficulty' type='radio' value={country.difficulty} />
        <label htmlFor='technical difficulty'>Medium:</label>
        <input onChange={onInputChange} name='technical difficulty' type='radio' value={country.difficulty} />
        <label htmlFor='technical difficulty'>High:</label>
        <input onChange={onInputChange} name='technical difficulty' type='radio' value={country.difficulty} />
        </div>

        <div className={style.div}>
        <h3>Season</h3>
        <label htmlFor='season'>Low:</label>
        <input onChange={onInputChange} name='season' type='radio' value={country.season}/>
        <label htmlFor='season'>Medium:</label>
        <input onChange={onInputChange} name='season' type='radio' value={country.season}/>
        <label htmlFor='season'>High:</label>
        <input onChange={onInputChange} name='season' type='radio' value={country.season}/>
        </div>

        <input type='submit' onClick={onSubmitForm}/>
    </form>
    
          )

   

//     return <form onSubmit ={onSubmitCountry}>
//         <p>
//             Select Country
//             <input type = 'text' onChange={onInputChange} value = {country.name} />
//             <input type = 'submit' value = 'search' />
//         </p>
//     </form>


    // return <form onSubmit = {onSubmit}>
    //     <label htmlFor=''>Name:</label>

    //     <input onChange={onInputChange} name='name' type='text' value={country.name} />
    //     <label htmlFor=''>Difficulty:</label>
    //     <input onChange={onInputChange} name='difficulty' type='text' value={country.difficulty} />
    //     
    //     <label htmlFor=''>Season:</label>
    //     <input onChange={onInputChange} name='season' type='text' value={country.season}/>
    //     <input type='submit' />

    // </form>
}