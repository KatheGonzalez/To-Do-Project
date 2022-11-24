import React from "react";
import '../estilos/TodoSearch.css';


function TodoSearch({searchValue, setSearchValue, loading}) { //
  
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value); //le vamos a guardar el valor de nuestro input cada vez que cambie al valor de la
        //funcion del setSearchValue, cambia el valor inicial al que haya cambiado el valor del input 
    }

    return [   //vaos a conectar el valor del input al estado
        <input 
            placeholder="What will you do now?" 
            className="TodoSearch"
            value={searchValue} // aqui debemos conectar lo que este en el estado
            onChange={onSearchValueChange} // en el setSearchValue vamos poner lo que el usuario haya puesto en en input 
            disable={loading} //que quede deshabilitado mientras este cargando , unicamente cuando cargue si puedo 
        />, // lo vamos a poner en la funcion onSearcgValueChange  
        // <p>{searchValue}</p>
    ];
}

export { TodoSearch } 