import mongoose from "mongoose";

let isConnected=false;

export async function connectToDatabase(){
  mongoose.set("strictPopulate", true)

const MONGODB_URL = process.env.MONGODB_URL; 

if (!MONGODB_URL) {
  return console.log("missing Url")
}
if (isConnected){
  return console.log("Already Connected")
}
try {
  await mongoose.connect(MONGODB_URL,{
    dbName:'devflow'
  });
  isConnected=true;
  console.log("Md is connected ")
  
} catch (error) {
  console.log(err+"unable to connected ")
  
}


}
