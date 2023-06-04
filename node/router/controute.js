const express= require("express")
const router= express.Router()
const{createcont,allcont,singcont,deletecont,editcont}= require("../controllers/content")




router.post("/create",createcont)

router.get("/",allcont)

router.get("/sing",singcont)

router.delete("/:contId",deletecont)

router.put("/:contId",editcont)

module.exports= router