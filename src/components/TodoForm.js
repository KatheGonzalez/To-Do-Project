import React from "react";
import "../estilos/TodoForm.css";


function TodoForm ({addTodo, setOpenModal}) {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onCancel = () => {
        //Todo pendiente
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        //Todo pendiente
        //el evento de los formularios recarga la pagina , necesitamos ser mas especficos 
        event.preventDefault(); //este metodo que viene por defecto nos dice que cuando el formulario se envie.no recarga la pagina sino que cancela eso 
        //el resto de nuestra logica lo podemos usar
        addTodo(newTodoValue) // le enviamos un nuevo item a este metodo que nos crea este item en nuestro array de todos en estado completed false 
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value); // le enviamos ese valor 
    }


    //vamos a retornar un formulario
    return (
        <form onSubmit={onSubmit}>

            <label>Type your New To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="What's for today?"
            />

            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel">
                    Cancel
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"> 
                    Add
                </button>
            </div>
        </form>
    );
}


export { TodoForm }