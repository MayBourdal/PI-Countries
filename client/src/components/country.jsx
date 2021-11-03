import { Link } from "react-router-dom";
import style from './country.module.css'

export default function Country ({id, name, flag, continent}){
    console.log(id)
    console.log(continent)
    return <div> 

        <Link to={`/id/${id}`}>
            <h2>{name}</h2>
            <h3>{continent}</h3>
            <img src={flag} alt='flag' className={style.img} />
        </Link>
         </div>
}