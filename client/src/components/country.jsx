export default function Country ({name, flag, continent}){
    return <div> 
        <h2>{name}</h2>
        <img src={flag} alt='flag' />
        <h3>{continent}</h3>
         </div>
}