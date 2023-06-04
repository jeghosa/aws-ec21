const User= require("../models/usersc")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()


createacc= async(req,res)=>{
    try {
        let {name,email,password}= req.body
        //   const salt= await bcrypt.genSalt(10)
        //  const  rpassword= await bcrypt.hash(password,salt)
        
        // let outcs= {name,email,password:rpassword}
        const user = await User.create(req.body)
        console.log(User)
        if (!name|| !email || !password) {
          return res.status(400).json({msg:"please provide credentials"}) 
        }
        else{const token = jwt.sign({name:user.name,id:user._id},"gsffsrwswtswgsgf")
            return  res.status(200).json({user,token})
        
    } 
}
    catch (error) {
       res.status(500).json({msg:error}) 
    }
}

getlogged = async(req,res)=>{
    try {
        const {email,password}= req.body
        
        //  const salt= await bcrypt.genSalt(10)
        //  const  revpassword= await bcrypt.hash(password,salt)
        
        // begin
          const authheader= req.headers.authorization
        let decoded
        if(authheader || authheader.startsWith("Bearer ")){
            const token = authheader.split(" ")[1]
             decoded = jwt.verify(token, "gsffsrwswtswgsgf",(error,result)=>{
            if (error) {
              console.log(error)  
            }
            return result
             })
        
        //  end  
          
        const user= await User.findOne({email})
           if (user) {
             const checked = await user.pcompare(password)
            console.log(checked)
            if (checked) {
                 console.log(token)
             return   res.status(200).json(user)
                
            }
            else{res.status(401).json({msg:"unauthorised access"})}
           return 
        }
        res.status(400).json({msg:"please provide credentials"})
        // begin
        }
        else{res.status(401).json({msg:"unauthorised access"})}
      //  end
       
        // const user= await User.findOne(email)
        // if (user) {
        //     const checked= await user.pcompare(password)
        //     if (checked) {
        //      return   res.status(200).json(decoded)
                
        //     }
        //     else{res.status(401).json({msg:"unauthorised access"})}
            
        // }res.status(400).json({msg:"please provide credentials"})

    //  const user= await User.findOne({email})
    //         const token = authheader.split(" ")[1]
    //          const resul = jwt.verify(token, "gsffsrwswtswgsgf",(error,result)=>{
    //         if (error) {
    //           console.log(error)  
    //         }
    //         return result
    //          })
    //          res.status(200).json(resul)
    //          console.log(resul)
    
    
    
    
    
    }
     catch (error) {
       res.status(500).json({msg:error.msg}) 
    }
}





module.exports = {createacc,getlogged}