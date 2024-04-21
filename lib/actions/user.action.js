"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoos"
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";


export async function getUserById(userId){
    try {
        connectToDatabase();
       // const {userId} = params;
        
        const user =  await User.findOne({ clerkId: userId});
         return user;

    } catch (error) {
        console.log(error)
        
    }
}
export async function createUser(userData){
    try {
        connectToDatabase();
        const newUser =  await User.create(userData);
         return newUser;
    
    }
    catch(error){
        console.log(error)

    }
}
export async function updateUser(userData){
    try {
        connectToDatabase();
        const { clerkId, userData, path} = userData;
        await User.findOneAndUpdate({ clerkId: clerkId}, userData, {new: true});
        revalidatePath(path);
        
    } catch (error) {
        console.log(error)
        
    }
}
export async function deleteUser(userData){
    try {
        connectToDatabase();
        const {clerkId} = userData
        const user = await User.findOneAndDelete({clerkId});
        if(!user){
            throw new Error('User not found');

        }
        const userQuestionIds = await Question.find({auther:user._id}).distinct('_id');
        await Question.deleteMany({auther : user._id});
        const deletedUser = await User.findOneAndDelete(user._id);
        return deletedUser;

    } catch (error) {
        console.log(err)
        
    }
}