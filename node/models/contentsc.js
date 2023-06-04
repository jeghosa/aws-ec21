const mongoose= require("mongoose")




const contentSchema= new mongoose.Schema({title:{type:String},createdby:{type:mongoose.Types.ObjectId,ref:"User"}, comment:{type:String}})



module.exports= mongoose.model("Content", contentSchema)