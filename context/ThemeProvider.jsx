"use client"
import { createContext, useState, useContext} from "react";

const ThemeContext = createContext("dark")
export function ThemeWraper({children}){
let [mode, setMode]=useState("dark")
return(
    <ThemeContext.Provider value={{mode,setMode}}>
        {children}
    </ThemeContext.Provider>
)
};
export function useThemeContext(){
    return useContext(ThemeContext);
};