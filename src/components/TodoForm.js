import React, {useState} from 'react';



const TodoForm =(props)=> {

const [input, setInput] = useState('')

// const handleChanges = e => {
//     setInput(...input, {[e.target.name]: e.target.value})
// }
  
        return(
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    props.addTodo(input)
                    setInput('')
                    }}>
                     <input 
                    
                     type='text'
                     name='todo'
                     onChange={(e)=> setInput(e.target.value)}
                     placeholder='To Do.'
                     />
                     <button type='submit'>Add to to do list.</button>
                     
                </form>
             </div>
        )
    }

export default TodoForm