const Order  = require("../models/OrderModel");
const makePesapalPayment  = async(req,res)=>{
    try{
        const {OrderTrackingId,OrderNotificationType,OrderMerchantReference} = req.body;
         const orderToUpdate = await Order.findById(OrderMerchantReference);
        const update = {OrderTrackingId,OrderNotificationType,OrderMerchantReference};
        await orderToUpdate.updateOne({pesapalIPNData: update});
        return  res.json({"message":"Data received" });
    }
    catch(err){
        console.log(error.message);
    }
}

module.exports = makePesapalPayment;