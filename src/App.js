import React, {useReducer, useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from  './components/TodoList';
import {reducer, initialState} from './reducers/Reducer';
import './App.css';

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

console.log(state.list)

  const addTodo = (input) => {
     const newTodo = {item: input,
     completed: false, id: Date.now()};
    dispatch({type:'ADD_ITEM', payload: newTodo})
  };
  
  const toggleComplete = (id) =>{
    dispatch({type:'COMPLETED_TODO', payload: id})
  }
  
  
  // toggleComplete = id =>{
  //   let todos = this.state.todos.slice();
  //   todos=todos.map(todo => {
  //     if (todo.id===id){
  //       todo.completed = !todo.completed;
  //       return todo;
  //     }else {
  //       return todo;
  //     }
  //   });
  // this.setState({todos});
  // }
  
  // clearCompleted = event =>{
  //   event.preventDefault();
  //   let todos =this.state.todos.filter(todo => !todo.completed);
  //   this.setState({todos})
  // };
  
  
  
   
      return (
        <div className= 'App'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={addTodo}/>
          <TodoList list={state.list} handleToggleComplete={toggleComplete}/>
        </div>
      );
    }
  
  
  export default App;
  