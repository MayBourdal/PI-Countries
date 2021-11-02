import { Link } from "react-router-dom";
import './country.css'

export default function Country ({id, name, flag, continent}){
    return <div> 
        <Link to={`/${id}`}>
            <h2>{name}</h2>
            <h3>{continent}</h3>
            <img src={flag} alt='flag' />
        </Link>
         </div>
}