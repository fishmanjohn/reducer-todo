import { act } from "react-dom/test-utils";

export const initialState = [
    {
      item: 'Learn Reducers',
      id: 1528817077286,
      completed: false
    },
    {
      item: 'Walk Gus',
      id: 1528817084358,
      completed: false
    }];

   export  const Reducer = (state,action) =>{
       if (action.type === 'ADD_ITEM'){
        return{...state, item:'', id: Date.now(), completed: false}
       }
        else if (action.type === 'REMOVE_ITEM'){
            return {...state,  completed:true}
        }
   };