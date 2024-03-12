import React from 'react'
import Image from 'next/image'

function NothingFound() {
  return (
    <div className='m-[100px] flex flex-col items-center justify-center gap-5'>
      <div className='flex justify-center'>
      <Image src="/assets/images/dark-illustration.png" alt="Dark Illustration"
    width={300}
    height={300}  ></Image></div>
    <div className='flex flex-col gap-4'>
    <h3 className='text-[20px] text-center font-semibold'>There’s no question to show</h3>
    <p className='text-[16px] text-center w-[400px] '>Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡</p>
    </div></div>
  )
}

export default NothingFound