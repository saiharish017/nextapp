"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoos"


export async function getUserById(userId){
    try {
        connectToDatabase();
       // const {userId} = params;
        
        const userL =  await User.findOne({ clerkId: userId});
        console.log("hi this is "+userL)
         return userL;

    } catch (error) {
        console.log(error)
        
    }
}