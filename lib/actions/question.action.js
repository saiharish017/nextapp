"use server"
import Question from "@/database/question.model";
import {connectToDatabase} from "../mongoos"
import Tag from "@/database/tag.model";

export async function CreateQuection(params){
    //try and catch
    try {
        connectToDatabase();
        const {title, content} = params;
        const question = await Question({
            title,
            content,
            auther
        });
        const tagDocument =[];
        for (const tag of Tag){
            const existingTag= await Tag.findOneAndUpdate(
                {name:{$regex:new RegExp(`^$(tag)$`)}},
                {$setOnInsert:{name:tag}, $push:{question:question._id}},
                {upsert: true,new:true}
            )
            tagDocument.push(existingTag)
        }
        await Question.findOneAndUpdate(question._id,{
            $push:{tags:{$each:tagDocument}}
        }
            )
        //await code
        //i have to track user questions
    } catch (error) {
        console.log("unable to create")
        //err code if any
    }
}