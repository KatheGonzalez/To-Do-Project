import React from "react";
import '../estilos/TodoItem.css';

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Completaste el To Do ' + props.text)
    // };

    // const onDelete = () => {
    //     alert('Borraste el To Do ' + props.text)
    // };

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <span className="material-symbols-outlined">done</span>
            </span>
            <p 
                className={`TodoItem-p ${props.completed && 'TextItem-p--complete'}`}
            >
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <span className="material-symbols-outlined">delete</span>
            </span>
            
        </li>
    );
}

export { TodoItem } 