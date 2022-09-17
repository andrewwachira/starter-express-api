const express = require('express')
const app = express()
app.use(express.json())
app.get("/ipn",(req,res)=>{
    console.log(req.body)
     return  res.json({"message":"Data received" })
})
app.listen(process.env.PORT || 3000)