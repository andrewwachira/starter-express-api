const Order  = require("../models/OrderModel");
const CateringOrder = require("../models/CateringOrder");
const StrongKombuchaOrder  = require("../models/StrongKombuchaOrder");

const makeMpesaPayments = async (req,res)=>{
    try{
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
        // let message={
        //   "ResponseCode": "00000000",
        //   "ResponseDesc": "success"
        // }
        // res.json(message);
        const {data} = JSON.parse(JSON.stringify(req.body));
        const update = {
            kopokopoApiAttributes: {
                id: data.id,
                type: data.type,
                initiationTime: data.attributes.initiation_time,
                status: data.attributes.status,
              },
              transactionAttributes: {
                reference: data.attributes.event.resource.reference,
                originationTime: data.attributes.event.resource.origination_time,
                amount: data.attributes.event.resource.amount,
                tillNumber: data.attributes.event.resource.till_number,
                senderFirstName: data.attributes.event.resource.sender_first_name,
                senderLastName: data.attributes.event.resource.sender_last_name,
                status: data.attributes.event.resource.status,
              },
        }
        console.log(update);
        const order = await Order.findById(data.attributes.metadata.reference);
        order.mpesaPaymentResult = update;
        await order.save();
        res.status(200);
    }catch(error){
        console.log(error.message)
    }
}
module.exports  = makeMpesaPayments
