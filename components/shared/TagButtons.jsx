import React from 'react'

function TagButtons({id,name}
) {
  return (
    <div><button key={id} className="px-4 py-1 bg-slate-500  rounded-lg text-gray-300 ">
    {name}</button></div>
  )
}

export default TagButtons