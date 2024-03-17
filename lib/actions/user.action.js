"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoos"


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