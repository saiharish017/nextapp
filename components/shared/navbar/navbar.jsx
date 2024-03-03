import React from 'react'
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className='bg-white dark:bg-black  p-5 flex justify-between '>
        <div className='flex gap-5'>
        <img src="/assets/images/site-logo.svg" className='w-8' alt="Logo" />
        <p className=' text-[22px] font-bold  text-zinc-900'>FristApp</p>
        </div>
        <div>
          <button><img src='@/' alt="" /></button>
        <UserButton />
        </div>
    </div>
  )
}

export default Navbar