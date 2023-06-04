const jwt = require("jsonwebtoken")
const User= require("../models/usersc")



const auth = async(req,res,next)=>{
const authheader= req.headers.authorization
if(authheader || authheader.startsWith("Bearer ")){
            const token = authheader.split(" ")[1]
         try {
             const decoded = jwt.verify(token, "gsffsrwswtswgsgf",(error,result)=>{
            if (error) {
              console.log(error)  
            }
            return result
             })
           req.user = {id:decoded.id, name:decoded.name} 
          next()
            
         } catch (error) {
            res.status(401).json({msg:"unauthorised access"})
         }
            } 
else{res.status(401).json({msg:"unauthorised access"})}


} 


module.exports= auth