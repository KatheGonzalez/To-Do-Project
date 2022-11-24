import React from "react";
import { UselocalStorage } from "./UseLocalStorage";


// para hacer esa comparticion de propiedades de provider a consumer tenemos que hacer un puentesito 
//este componente sera un atajo para llegar a ese todocontext provider
//pero primero le diremos que queremos compartir, los valores , el estdo, de una vez le daremos eso  
function useTodos() { //le estamos pasando toda la logica de la aplicacion a este provider 

    const{
        item : todos, 
        saveItem : saveTodos,     //desestructuracion 
        loading,
        error,
        sincronizeItem: sincronizeTodos, //aqui lo estamos renombrando para los demas componentes, le decimos que no escucha 
        //cualquier elemento del local estorage sino el TODOS V1 que es el de nuestros TODOS
      } = UselocalStorage('TODOS_V1', []); //mandamos como argumento donde queremos guardar ese elemento
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false); // el modal no debe de estar abierto 
  
      const completedTodos = todos.filter(todo => !!todo.completed).length; 
      const totalTodos = todos.length; 
      
      let searchedTodos = [];
  
      if(!searchValue.length >= 1) { // aqui estamos jugando y trayendo ese searchValue
        searchedTodos = todos;

      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
      })
        
      }

      // CREAR UN NUEVO OBJETO TODO 

      const addTodo = (text) => {   
        const newTodos = [...todos]; 
        newTodos.push({
          completed: false,
          text
        });
        saveTodos(newTodos) 
      }
  
      // MARCAR COMO COMPLETADO 

      const completeTodo = (text) => { 
        const todoIndex = todos.findIndex(todo => todo.text === text);  
        const newTodos = [...todos]; 
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos) 
      }

  
      // ELIMINAR UN TODO  

      const deleteTodo = (text) => { 
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; 
        newTodos.splice(todoIndex, 1); 
        saveTodos(newTodos); 
      }

    return(
      { // entonces al value le ponemos las propiedades, funciones, metodos  y esas cosas , que es el que vamos a compartir con nuestro provider
        //son todad las propiedades que usamos anteriormente, todos lo componentes que querramos usar despues 
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal, 
        setOpenModal,
        addTodo,
        sincronizeTodos
      }
    );
} 

//solo nos falta exportar nuestro context y nuestro todoprovider 
export { useTodos };