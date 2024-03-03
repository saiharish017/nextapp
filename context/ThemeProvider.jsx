"use client"

import React, {createContext,useContext, useState, useEffect} from "react";

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider = ({children}) => {
   const [mode, setMode] = useState('');
   const handlerThemeChange=()=>{
    setMode(mode === 'dark'? 'light' : 'dark');
   }
   useEffect(() =>{
    handlerThemeChange();
   },[mode])


   return (
    <ThemeContext.Provider value={{mode, setMode}}>
        {children}
    </ThemeContext.Provider>
)
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }else{
        return context;
    }

}
