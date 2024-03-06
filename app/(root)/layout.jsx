"use client"
import React from 'react'
import Navbar from '@/components/shared/navbar/navbar';
import { useThemeContext } from "@/context/ThemeProvider";
import LsideBar from '@/components/shared/navbar/LsideBar';

function Layout({children}) {
  const {mode}= useThemeContext();

  return (
    <main className={mode}>
<div >
        <Navbar/>
        
        {children}
        </div>
    </main>
  )
}

export default Layout