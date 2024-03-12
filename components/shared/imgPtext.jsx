import React from 'react'
import Image from 'next/image'


function imgPtext({Img,  alt, text}) {
  return (
    <div className='flex gap-1'>
        <Image src={Img} width={25} height={25} alt={alt}></Image>
        <p>{text}</p>
    </div>
  )
}

export default imgPtext