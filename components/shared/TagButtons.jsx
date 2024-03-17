import React from 'react'

function TagButtons({id,name}
) {
  console.log("tagbtn"+id)
  return (
    
      <button key={id} className="px-4 py-1 bg-slate-500  rounded-lg text-gray-300 ">
    {name}</button>
    
  )
}

export default TagButtons