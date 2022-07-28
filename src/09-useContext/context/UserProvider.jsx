import { useState } from "react"
import { UserContext } from '../context/UserContext'

//const user = {
//   id: 1515,
//   name: 'Silvana',
//    email: 'sil@google.com'
//}

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
