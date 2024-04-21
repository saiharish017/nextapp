"use server"
import Question from "@/database/question.model";
import {connectToDatabase} from "../mongoos"
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";


export async function getQuestion(){
    try {
        connectToDatabase();
        const questions = await Question.find({})
        .populate({path:'tags',model:'Tag'})
        .populate({path:'author',model:'User'})
        .sort( '-createdAt')
        return questions
        
    } catch (error) {
        console.log(error)
        
    }
   
}
export async function CreateQuestion(params){
    //try and catch
    try {
        connectToDatabase();
        const {title, content, tags, author, path} = params;
        console.log("author"+author)
        const question = await Question({
            title,
            content,
            author,
            
        });
        console.log(question);
        await question.save();
        const tagDocument =[];
        for (const tag of tags){
            const existingTag= await Tag.findOneAndUpdate(
                {name:{$regex:new RegExp(`^$(tag)$`)}},
                {$setOnInsert:{name:tag}, $push:{question:question._id}},
                {upsert: true,new:true}
            )
            tagDocument.push(existingTag._id)
        }
        await Question.findOneAndUpdate(question._id,{
            $push:{tags:{$each:tagDocument}}
        }
            )
        //await code
        //i have to track user questions
        revalidatePath(path)
    } catch (error) {
        console.log("unable to create"+error)
        //err code if any
    }
}