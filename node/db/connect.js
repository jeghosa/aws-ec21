const mongoose =require("mongoose")
mongoose.set("strictQuery", true)





const connectdb= (url)=>{
    mongoose.connect(url),
    {useNewUrlParser:true,
    useCreateIndex:true,
useFindAndModify:false, useUnifiedTopology:true}


}

module.exports= connectdb