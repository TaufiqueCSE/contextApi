import { createContext,useContext } from "react";

export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext)
}



//another way 

// import { createContext,useContext } from "react";

// export const TodoContext =createContext()

// export const TooProvider=({children})=>{
//     const todos=[
//             {
//                 id:1,
//                 todo:"Todo msg",
//                 completed:false
//             }
//     ];
//     const addTodo=(todo)=>{};
//     const updatedTodo=(id,todo)=>{};
//     const deleteTodo=(id)=>{}
//     const  toggleComplete=(id)=>{};

//     return (
//         <TodoContext.Provider value={{addTodo,updatedTodo,deleteTodo,toggleComplete,todos}}>
//             {children}
//         </TodoContext.Provider>
//     )
// }

// export const useTodo=()=>{
//     return useContext(TodoContext)
// }



