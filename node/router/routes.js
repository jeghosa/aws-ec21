const express= require("express")
const router= express.Router()
const {createacc,getlogged}= require("../controllers/users")
// const auth = require("../middleware/auth")


router.post("/register",createacc)
router.post("/login",getlogged)


module.exports= router