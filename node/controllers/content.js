const Content= require("../models/contentsc") 




const createcont= async(req,res)=>{
    const{title,comment} = req.body
   
   try {
    req.body.createdby = req.user.id
     const content= await Content.create(req.body)
     res.status(201).json(content)
   } catch (error) {
    res.status(500).json({msg:error.msg})
   }
}

const singcont= async(req,res)=>{
    
  
  try {
      const createdby = req.user.id
     const content= await Content.find({createdby:req.user.id})
        console.log(createdby)
     res.status(200).json(content)
     
  } catch (error) {
    res.status(500).json({msg:error.msg})
  }
}
const allcont= async(req,res)=>{
    // const {createdby} = req.user._id
  try {
    const content= await Content.find({})
  res.status(200).json(content)
  } catch (error) {
   res.status(500).json({msg:error.msg}) 
  }
}

const deletecont= async(req,res)=>{
    const {createdby} = req.user._id
    const {contId}= req.params
  try {
    const content= await Content.findByIdAndDelete({createdby,contId})
  res.status(200).json(content)
    
  } catch (error) {
  res.status(500).json({msg:error.msg})  
  }
}
const editcont= async(req,res)=>{
    const {createdby} = req.user._id
    const {contId}= req.params
    const{title,comment}= req.body
  try {
    const content= await Content.findByIdAndUpdate({createdby,contId}, req.body)
  res.status(200).json(req.body)
  } catch (error) {
   res.status(500).json({msg:error.msg}) 
  }
}


module.exports= {createcont,singcont,allcont,deletecont,editcont}