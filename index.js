const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./config/db.js")
const cors  = require("cors");
const Order = require("./OrderModel.js");

connectDB()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Heellooo there")
})
app.get("/ipn",(req,res)=>{
    console.log(req.body)
     return  res.json({"message":"Data received" })
})
app.post("/safCallback",async(req,res)=>{
try{
    
    const {Body:{stkCallback:{MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc}}} = req.body;
    if(MerchantRequestID){
        const order = await Order.findOne({mpesaIdentifier:CheckoutRequestID})
        console.log("*************Order from DB**************")
        console.log(order)
        if(order.mpesaIdentifier === CheckoutRequestID){
              const update = {MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc }
        }
        console.log("**************Payload from Safaricom**************")
        console.log(update);
        await order.updateOne({mpesaPaymentResult:update})
    }
    let message={
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    }
    res.json(message);
}catch(error){
    console.log(error.message)
}
})
app.listen(process.env.PORT || 5000);