import React from 'react';
import Todo from './Todo'


const TodoList = (props) =>{
    console.log(`HEY DUMMY${props}`)
    return(
            <div>
                {props.map( todo =>(<Todo
                key ={props.list.id}
                todo={todo}
                handleToggleComplete={props.handleToggleComplete}
                />))}

            </div>
        )
    }; 
export default TodoList;