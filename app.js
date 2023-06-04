const express = require ("express")
const app = express()
const connectdb = require("./node/db/connect")
require("dotenv").config()
const port= process.env.PORT || 3000
const router= require("./node/router/routes")
const controuter= require("./node/router/controute")
const auth= require("./node/middleware/auth")

app.get("/api/v1",(req,res)=>res.status(200).json({msg:"change2"})) 
app.use(express.json() )
// app.use("/api/v1",router)
app.use(express.static("./node/js"))
app.use(express.urlencoded({extended:false}))
 app.use("/api/v1",router)
 app.use("/api/v1/content",auth,controuter)
// app.use("/api/v1",router)








const start= async()=>{
    
    try { await connectdb("mongodb+srv://jeghosa:jsureeva@cluster0.spmtchq.mongodb.net/?retryWrites=true&w=majority")
        app.listen(port,()=>console.log(`app listening on port: ${port}`))
    } catch (error) {
       console.log(error) 
    }
}

start()

