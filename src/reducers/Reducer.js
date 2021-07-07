import { act } from "react-dom/test-utils";

export const initialState =  { 
    list:[   
     {
      item: 'Learn Reducers',
      id: 1528817077286,
      completed: false
    },
    {
      item: 'Walk Gus',
      id: 1528817084358,
      completed: false
    }]
};

   export  const reducer = (state,action) =>{
      switch(action.type){
          case 'ADD_ITEM':
              return{
                  list: [...state.list, action.payload]
              }

            case 'COMPLETED_TODO':
                return state.list.map((item) => {
                    return item.id === action.payload ?
                    {...item, completed: !item.completed} :
                    item
                })
      }
   };