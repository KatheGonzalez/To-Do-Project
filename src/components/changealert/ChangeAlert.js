import React from 'react';
import { useStorageListener } from './useStorageListener';


function ChangeAlert({ sincronize }) {
    const {show, toggleShow} = useStorageListener(sincronize); // nuestro componente recibe esto como un custome hook 
    if(show){
    return (
        <div>Hubo Cambios
        <button
            onClick={() => toggleShow(false)}
        >Volver a cargar la informacion</button>
        </div>
    )}
}


export { ChangeAlert }


// debemos mostrarles una alerta a los usuarios indicandoales que hubo
//algun cambio dentro de la aplicacion
//cuando tengamos nuestro change alert lo queremos exportar con el evento
//del localstorage con el escuchador del local storsage 
//lo que estamos pasando realmente es el componente despies de haber pasadp por un HOC
//show is true  
//onclick nos dice que tenemos que volver a cargar la informacion de vuelta 
//como podemos modificar esta alert o poder mostrarla 
//