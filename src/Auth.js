import React, { useEffect, useState } from "react";

import {app,auth} from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
       console.log(auth)
    
        // createUserWithEmailAndPassword(authentication, email, password)
    }, []);

    return ( <AuthContext.Provider value = {
            { currentUser } } >

        { children } </AuthContext.Provider>
    )

}