import axios from "axios"
import { useState } from "react"



export default function AddActivities(){
    const [country, setCountry] = useState({})
    
    
    function onInputChange(e){
        e.preventDefault()
        setCountry({
            ...country,
            [e.target.name] : e.target.value

        })
    }

    function onSubmit(e){
        e.preventDefault()  
        axios.post('http://localhost:3001/api/activity' , country)
        .then(() => {     
        })
    }

    return <form onSubmit = {onSubmit}>
        <label htmlFor=''>Name:</label>
        <input onChange={onInputChange} name='name' type='text' value={country.name} />
        <label htmlFor=''>Difficulty:</label>
        <input onChange={onInputChange} name='difficulty' type='text' value={country.difficulty} />
        <label htmlFor=''>Duration:</label>
        <input onChange={onInputChange} name='duration' type='text' value={country.duration}/>
        <label htmlFor=''>Season:</label>
        <input onChange={onInputChange} name='season' type='text' value={country.season}/>
        <input type='submit' />

    </form>
}