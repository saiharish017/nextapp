"use client"
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useThemeContext } from "@/context/ThemeProvider";

function Navbar() {
  const {mode,setMode}= useThemeContext();
 
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-gray-900 z-10" >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-10">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FirstApp</span>
  </a>
  <div class="flex ">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    
    <div className="relative hidden md:block w-[35vw] h-11">
      
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      
      <input type="text" id="search-navbar" class="h-full block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button onClick={()=>mode==="dark"?setMode("light"):setMode("dark")} className=" md:hidden">
     <img src={mode === 'dark' ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg'} ></img>
    </button>
      
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  
    <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <button onClick={()=>mode==="dark"?setMode("light"):setMode("dark")}>
     <img src={mode === 'dark' ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg'} />
    </button>
    
     
    </div>
    {/* <UserButton /> */}
    
  </div>
</nav>

    </>
    /* <div className="bg-white dark:bg-black  p-5 flex justify-between ">
      <div className="flex gap-5">
        <img src="/assets/images/site-logo.svg" className="w-8" alt="Logo" />
        <p className=" text-[22px] font-bold  text-zinc-900">FristApp</p>
      </div>
      <h1>Mode</h1>
      <div>
     <button onClick={()=>mode==="dark"?setMode("light"):setMode("dark")}>
     <img src={mode === 'dark' ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg'} ></img>
    </button>
        <UserButton />
      </div>
    </div> */
  );
}

export default Navbar;
