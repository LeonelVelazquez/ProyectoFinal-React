import { createContext } from "react"


export const userContext = createContext({user: "anonymous"})

export function UserContextProvider(props){
    return(
        <>
        <userContext.Provider value={{user: "Leonel"}}>
        {props.children}
        </userContext.Provider>
        </>
    )
}

