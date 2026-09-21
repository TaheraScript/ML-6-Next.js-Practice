'use client'
import { createContext } from 'react';
import React from 'react';

export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    return (
       <UserContext.Provider value ='something'>
        {children}
       </UserContext.Provider>
    );
};

export default UserProvider;