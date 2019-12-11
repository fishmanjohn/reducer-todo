import React from 'react';

function Todo (props){
    console.log(props)
    return (
        <div
        style={props.todo.completed ? {color: 'red'}: null }
        onClick={()=>props.handleToggleComplete(props.todo.id )}
        
        >
           {props.todo.item} 
        </div>
    )
}
export default Todo