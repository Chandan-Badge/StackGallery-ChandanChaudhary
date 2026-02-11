import React, { createContext, useEffect, useState } from 'react';

export const StackContext = createContext();

function StackContextProvider(probs) {

    // Applying dark & light mode
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const value = {
        theme, setTheme
    }

    return (
        <StackContext.Provider value={value}>
            {probs.children}
        </StackContext.Provider>
    )
}

export default StackContextProvider;
