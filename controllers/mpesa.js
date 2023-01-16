const Order  = require("../models/OrderModel");
const makeMpesaPayments = async (req,res)=>{
    try{
        const {Body:{stkCallback:{MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc}}} = req.body;
        if(MerchantRequestID){
            const order = await Order.findOne({mpesaIdentifier:CheckoutRequestID})
            console.log("*************Order from DB**************")
            if(order.mpesaIdentifier === CheckoutRequestID){
                const update = {MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc }
                console.log("**************Payload from Safaricom**************")
                await order.updateOne({mpesaPaymentResult:update})
            }
        }
        let message={
          "ResponseCode": "00000000",
          "ResponseDesc": "success"
        }
        res.json(message);
    }catch(error){
        console.log(error.message)
    }
}
module.exports  = makeMpesaPayments
