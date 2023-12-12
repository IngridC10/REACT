import { useState } from "react";


const PrimerComponente = () => {
//    para declara una variable es con let
//    let nombre ="ingrid";
   let web="victor.com"; 

   const [nombre,setNombre]=useState("victor");

//    lista de cursos

   let cursos= [ 
    "Master en JavaScript",
    "Master en PHP",
    "Master en React",
    "Master en CSS",

   ]

   const cambiarNombre =(nuevoNombre)=>{
    setNombre(nuevoNombre);
   }


  return (
    <div>
      
      <h1>Mi primer componente</h1>
      <p>Este en un texto en mi componente</p>
      <p>Mi nombre es: <strong className={nombre.length>=4 ? 'verde': 'rojo'}>{nombre}</strong></p>
      <p>Mi web es: {web} </p>

      <input type="text" onChange={e => cambiarNombre(e.target.value)}placeholder/>
{/* quiero cambiar el el nombre de ingrid que tengo almacenado en la variable */}

        <button onClick={e=>{console.log("el valor guardado en tu estado es:",nombre);}}>
            Mostrar valor de estado</button>

      <button onClick={e=> cambiarNombre("Ingrid Alison")}>
        cambiar Nombre
      </button>



      <h2>Cursos:</h2>
      <ul>
        {
        cursos.map((curso,indice) =>{
            return(<li key={indice}>
                {curso}


            </li>);

        })}
      </ul>
    </div>
  )
}

export default PrimerComponente
