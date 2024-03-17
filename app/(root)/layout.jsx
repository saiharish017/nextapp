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
        <div className=' bg-white dark:bg-black dark:text-white' >
        <Navbar onMenuClick={toggleSidebar}/>
        <div className="flex">
        <LsideBar isOpen={isSidebarOpen} ></LsideBar>
        <section className="flex min-h-screen flex-1 flex-col  max-md:pb-14 sm:px-5 md:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RsideBar />
        
      </div>

        
        
        </div>
    </main>
  )
}

export default Layout