import React from 'react'
import Navbar from '@/components/shared/navbar/navbar';


function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout