const Order  = require("../models/OrderModel");
const CateringOrder = require("../models/CateringOrder");
const StrongKombuchaOrder  = require("../models/StrongKombuchaOrder");

const makeMpesaPayments = async (req,res)=>{
    try{
        console.log(req.body)
        // const {Body:{stkCallback:{MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc}}} = req.body;
        // if(MerchantRequestID){
        //     const order = await Order.findOne({mpesaIdentifier:CheckoutRequestID})
        //     const cateringOrder = await CateringOrder.findOne({mpesaIdentifier:CheckoutRequestID})
        //     const strongKombuchaOrder = await StrongKombuchaOrder.findOne({mpesaIdentifier:CheckoutRequestID})
        //     const theOrder = [order,cateringOrder,strongKombuchaOrder].find(theOne => theOne !== null && theOne !== undefined); 

        //     console.log("*************Order from DB**************")
        //     if(theOrder.mpesaIdentifier === CheckoutRequestID){
        //         const update = {MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc }
        //         console.log("**************Payload from Safaricom**************")
        //         await theOrder.updateOne({mpesaPaymentResult:update})
        //     }
        // }
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
