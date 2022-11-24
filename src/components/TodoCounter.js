import React from "react";
import '../estilos/TodoCounter.css' 

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

function TodoCounter({ completedTodos, totalTodos, loading}) {
    
    return(
        <>
            <h1 className="TodoCounter_Title">Your Task</h1>
            <h2 
                className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
                    You've completed {completedTodos} to {totalTodos} tasks</h2>
        </>
    );
}

export { TodoCounter } //usar las llaves nombradas