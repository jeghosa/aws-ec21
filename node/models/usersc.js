const mongoose= require("mongoose")
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")



const userSchema= new mongoose.Schema({name:{type:String,maxlength:[20,"must not be more than twenty letters"]}
,email:{type:String,maxlength:[20,"must not be more than twenty characters"],match:[ /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "please provide email"]},
password:{type:String}})

userSchema.pre("save", async function(next){
const salt= await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userSchema.methods.getf = function (){return this.name}

userSchema.methods.pcompare = async function (epassword){
    return  await bcrypt.compare(epassword,this.password)
    
 }

 userSchema.methods.jwtf= function () {
   return  jwt.sign({name:this.name,id:this._id},"gsffsrwswtswgsgf",{expiresIn:"20d"})
    
 }

module.exports = mongoose.model("User",userSchema)