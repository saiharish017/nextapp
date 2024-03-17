import React from 'react'


function RsideBar() {
    const questions = [
        { id: 1, question: "What is the difference between a variable and a constant in programming?" },
        { id: 2, question: "Explain the concept of loops in programming and their different types." },
        { id: 3, question: "What are functions in programming and how do they help organize code?" },
        { id: 4, question: "Describe the difference between conditional statements (if-else) and loops in programming." },
        { id: 5, question: "What are some common data structures used in programming and their applications?" }
    ];
    const PopularTags = [
        { id: 1, tag: "Next Js" , count: 30 },
        { id: 2, tag: "React", count: 20 },
        { id: 3, tag: "CSS", count: 5 },
        { id: 4, tag: "JavaScript", count: 50 },
       
    ];
  return (
    <div className=' bg-white dark:bg-slate-950  custom-scrollbar sticky inset-y-0 right-0 flex h-screen w-[300px] shrink-0 flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
        <h1 className='font-bold  dark:text-white text-xl'>Top Questions</h1>
        <div className='flex flex-col gap-4 mt-3 '>
        { questions.map((question) => (
  <div key={question.id} className='flex justify-between items-center gap-5'> 
    <p className='dark:text-white text-sm'>{question.question}</p>
    <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
  </div>
))}</div>
<div className='mt-[80px]'>
<h1 className='font-bold  dark:text-white text-xl'>Popular Tags</h1>
        <div className='flex flex-col gap-4 mt-3 '>
        { PopularTags.map((PopularTag) => (
  <div key={PopularTag.id} className='flex justify-between items-center gap-5'> 
    <p className='dark:text-white text-sm'>{PopularTag.tag}</p>
    <p className="w-3 h-3 text-gray-800 dark:text-white text-[12px]">{PopularTag.count}</p>
  </div>
))}</div>
</div>

    </div>
   
  )
}

export default RsideBar