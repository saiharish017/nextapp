import Feed from "@/components/shared/Feed";
import LocalSearch from "@/components/shared/LocalSearch/LocalSearch";
import NothingFound from "@/components/shared/NothingFound";
import TagButtons from "@/components/shared/TagButtons";
import { UserButton } from "@clerk/nextjs";
import { Divide } from "lucide-react";
 
export default function Home() {
  const filters=[
    {id:1, filter: "Newest"},
    {id:2, filter: "Recommeded"},
    {id:3, filter: "Frequent"},
    {id:4, filter: "Unanswered"}
  ]
  const quactions=[
    {id:1, quaction: "Best practices for data fetching in a Next.js application with Serverless functions?", tag:"somthing"},
    {id:2, quaction: "Best practices for data fetching in a Next.js application with Serverless functions?", tag:"somthing"}

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
     <div className="mt-5 gap-3 flex flex-wrap ">
      {filters.map((filter)=>(
        <TagButtons key={filter.id} name={filter.filter}></TagButtons>
      ))}
      
     </div>
     {quactions.length>0?quactions.map((quaction)=>(
        <Feed key={quaction.id} title={quaction.quaction} tag={quaction.tag}></Feed>
      )): <NothingFound />}
    </div>
    
    
  )
}