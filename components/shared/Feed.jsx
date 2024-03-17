import React from 'react'
import TagButtons from './TagButtons'
import ImgPtext from './imgPtext'

function Feed({id, title, tag}) {

  return (
    <div className='p-10 flex-col flex bg-slate-700 rounded-lg shadow-md my-10 gap-3' >
        <h2>{title}</h2>
        <div className='flex gap-3'>
        {tag.map((ta)=>(<TagButtons id={ta._id} name={ta.name} ></TagButtons>))}
        </div>
        <div className='flex justify-between'>
        <ImgPtext Img="assets/icons/avatar.svg"  alt="avatar" text="saiharish"></ImgPtext>
        <div className='flex gap-4 items-center'>
        <ImgPtext Img="assets/icons/like.svg"  alt="like" text="votes"></ImgPtext>
        <ImgPtext Img="assets/icons/message.svg"  alt="messages" text="Answers"></ImgPtext>
        <ImgPtext Img="assets/icons/eye.svg"  alt="views" text="views"></ImgPtext>
        
        </div></div>
        
      
    </div>

  )
}

export default Feed