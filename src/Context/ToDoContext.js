import { createContext, useState } from "react";

export const ToDoContext = createContext({})

export const ToDoContextProvider = ({children}) => {
    const [value,setValue] = useState()
    const [toDo,setToDo] = useState({
        items:[
            {id:1,name:'Create ToDo list.',date:'17.01.2023',status:true}
        ]
    })

    // const handleAdd = (value,data) => {
    //     setToDo({
    //         items:[
    //             ...toDo.items,
    //             {id:toDo.length + 1,name:value,data:data,status:true}
    //         ]
    //     })
    // }
    const removeToDo = (deleteItems) => {
        console.log(deleteItems)
        const updateTodo = toDo.items.map((item) => {
            if(deleteItems.id == item.id){
              return {
                ...item,
                status: !item.status
              }
            }
            return item
        })
        setToDo(prev => ({
            ...prev,
            items: updateTodo
         }))
    }
    return(
        <ToDoContext.Provider value={{
            toDo,
            setToDo,
            removeToDo,
            items:toDo.items
        }}>
        {children}
        </ToDoContext.Provider>
    )
}