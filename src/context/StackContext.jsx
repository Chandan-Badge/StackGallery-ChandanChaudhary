import React, { createContext } from 'react';

export const StackContext = createContext();

function StackContextProvider(probs) {

    const value = {

    }

    return (
        <StackContext.Provider value={value}>
            {probs.children}
        </StackContext.Provider>
    )
}

export default StackContextProvider;
