import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { useTodos } from "./useTodos";
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { Modal } from './modal/modal';
import { TodoForm } from './components/TodoForm';
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoHeader } from './components/TodoHeader';
import { ChangeAlert } from './components/changealert/ChangeAlert'

// toca enviar las propiedades enviandose a nuestro componente 
// envovler toda la app en todoprovider  

function App() {
  const  {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal, 
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos
    } = useTodos(); //sencillamente llamamos a la funcion que acabamos de importar 
    
    return ( 
      <React.Fragment>

      <TodoHeader loading={loading}>

          <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
          />
          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
      </TodoHeader>
      
      <TodoList
        error = {error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}

        onError={()=> <TodosError/>}
        onLoading = {() => <TodosLoading/>} // estos son render props 
        onEmptyTodos = {() => <EmptyTodos/>}

        onEmptySearchResults = {(searchText) => <p>No hay resultados para {searchText}</p>}
      >
        
        
        {/* render ={todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} 
                //creamos una nueva propiedad que se lleva al todoitem 
                //el componente todoitem se lleva esa y la llamamos desde alla 
                onDelete = {()=> deleteTodo(todo.text)} //para que elimine ese todo
            />) */}
        
        {todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} 
                //creamos una nueva propiedad que se lleva al todoitem 
                //el componente todoitem se lleva esa y la llamamos desde alla 
                onDelete = {()=> deleteTodo(todo.text)}
            />)
        }

      </TodoList>

      {!!openModal && (
          <Modal>
              <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              />
          </Modal>
      )}

      <CreateTodoButton
          setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    
  </React.Fragment>

  ); 
}

export default App;
