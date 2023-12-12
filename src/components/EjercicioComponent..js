import React,{useState} from 'react'
import Proptypes from "prop-types";
const EjercicioComponent = ({year}) => {const [yearNow,setYearNow]
= useState(year);  

// creo dos funciones

const siguiente = e =>{
    setYearNow(yearNow + 1);
}

const anterior =e =>{

    setYearNow(yearNow-1);
   
    
}
const cambiarYear = e => {
    let dato = parseInt (e.target.value);

    if(Number.isInteger(dato)){
        setYearNow(dato);

    }else{
        setYearNow(year);

    }

   
}

return (
    <div className= "botones">
        <h2>Ejercicio con Eventos y useState</h2>
       <strong className='label label-green'>  {yearNow}
       </strong>
       <p>
          <button onClick={siguiente}> <strong>Siguiente</strong></button>
           &nbsp;
     
          <button onClick={anterior}> <strong>Anterior</strong></button>
       </p>
       <p>Cambiar año:
        <input 
        onChange={cambiarYear}
        type="text" placeholder='cambia el año'>

        </input>


       </p>
     
      
    </div>
  )
}
EjercicioComponent.prototype={
    year:Proptypes.number.isRequired
}


export default EjercicioComponent
