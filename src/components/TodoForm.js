import React from 'react';



const TodoForm =()=> {

  
        return(
            <div>
                <form>
                     <input 
                     
                     type='text'
                     name='todo'
                     
                     placeholder='To Do.'
                     />
                     <button  >Add to to do list.</button>
                     <button >Clear completed.</button>
                </form>
             </div>
        )
    }

export default TodoForm