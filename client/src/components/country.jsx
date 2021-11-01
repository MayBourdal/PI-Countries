import { Link } from "react-router-dom";

export default function Country ({id, name, flag, continent}){
    return <div> 
        <Link to={`/${id}`}>
            <h2>{name}</h2>
            <img src={flag} alt='flag' />
            <h3>{continent}</h3>
        </Link>
         </div>
}