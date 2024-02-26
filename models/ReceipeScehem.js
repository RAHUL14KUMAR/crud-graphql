const mongoose=require("mongoose");
const schema=mongoose.Schema

const receipeSchema=new schema({
    name:String,
    description:String,
    createdAt:String,
    thumbsUp:Number,
    thumbsDown:Number
})

module.exports=mongoose.model("Receipe",receipeSchema)