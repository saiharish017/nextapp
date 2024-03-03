import React from 'react'

const Layout = ({ children }) => {
  return (
   <main className='flex min-h-screen justify-center items-center'> <div>{children}</div></main>
  )
}

export default Layout