import { Schema, model, models, Document } from "mongoose";

const TagSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String,required:true},
    questions: [{type:String, required:true, ref:'Question'}],
    followers:[{type:Schema.Types.ObjectId, ref:" User"}],
    createdOn:{type:Date, default: Date.now}

})
const Tag = models.Tag || model('Tag', TagSchema);
export default Tag;