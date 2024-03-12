"use client"
import React, {useState, useEffect} from 'react'
import Navbar from '@/components/shared/navbar/navbar';
import { useThemeContext } from "@/context/ThemeProvider";
import LsideBar from '@/components/shared/navbar/LsideBar';
import useWindowSize from '@/functionality/useWindowSize.js'
import RsideBar from '@/components/shared/navbar/RsideBar';

function Layout({children}) {
  const {mode}= useThemeContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= 768) { // Adjust the breakpoint as needed, 640px is 'sm'
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [width]); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className={mode}>
        <div  >
        <Navbar onMenuClick={toggleSidebar}/>
        <div className='flex justify-between '>
        <LsideBar isOpen={isSidebarOpen}></LsideBar>
        {children}
        <div className=' max-lg:hidden'>
        <RsideBar />
        </div>
        </div>

        
        
        </div>
    </main>
  )
}

export default Layout