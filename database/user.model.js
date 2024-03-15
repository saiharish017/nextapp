//user model
import { Schema, model, models, Document,  } from "mongoose";

const userSchema = new Schema({
    clerkId:{type:String, required:true, unique:true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String},
    role: { type: String, default: 'user' },
    bio:{type:String},
    picture:{type:String},
    location:{type:String},
    portfolioWebsite:{type:String},
    reputation:{type:Number, default:0},
    saved:[{type:Schema.Types.ObjectId, ref:'Question'}],
    joinedAt: { type: Date, default: Date.now }
  });

  const User = models.User || model('User', userSchema)
export default User;