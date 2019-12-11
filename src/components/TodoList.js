import React from 'react';
import Todo from './Todo'


const TodoList = (props) =>{
    console.log(`HEY DUMMY${props}`)
    return(
            <div>
                {props.state.list.map((todo) =>{
                 return <Todo key ={props.state.list.id} todo={todo} handleToggleComplete={props.handleToggleComplete}/> 
                })}

            </div>
        )
    }; 
export default TodoList;