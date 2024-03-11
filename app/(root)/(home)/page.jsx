import LocalSearch from "@/components/shared/LocalSearch/LocalSearch";
import { UserButton } from "@clerk/nextjs";
import { Divide } from "lucide-react";
 
export default function Home() {
  const filters=[
    {id:1, filter: "Newest"},
    {id:2, filter: "Recommeded"},
    {id:3, filter: "Frequent"},
    {id:4, filter: "Unanswered"}
  ]
  return (
    <div className="h-screen bg-white p-[80px] dark:bg-black dark:text-white w-full">
    <div className="flex justify-between">
     <h1 className="text-[35px]">All Questions</h1>
     <button className=" px-2 py-3 bg-blue-500 rounded-sm">
      Ask a Question
     </button>
     </div>
     <LocalSearch/>
     <div className="mt-5 gap-3 flex ">
      {filters.map((filter)=>(
        <button key={filter.id} className="px-4 py-1 bg-slate-500  rounded-lg text-gray-300 ">
        {filter.filter}
      </button>
      ))}
      
     </div>
    </div>
    
    
  )
}