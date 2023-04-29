const mongoose =require("mongoose");

const strongKombuchaOrderSchema = new mongoose.Schema(
    {
        user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
        orderItems:{
            strong10LQuantities: [{ product:{type:String}, qty:{type:Number,}}],
            strong20LQuantities: [{ product:{type:String}, qty:{type:Number}}],
            strong1LQuantities: [{ product:{type:String}, qty:{type:Number}}]
        },
        shippingAddress : {
            fullName:{type:String,required:true},
            recipientCell:{type:String,required:true},
            county:{type:String,required:true},
            area:{type:String,required:true},
            specificAddress:{type:String,required:true},
            roadName:{type:String,required:true},
        },
        paymentMethod : {type : String,required : true},
        mpesaIdentifier : {type :String},
        mpesaPaymentResult : {MerchantRequestID:{type:String},CheckoutRequestID:{type:String},ResultCode:{type:Number},ResultDesc:{type:String}},
        pesapalIPNData : {OrderTrackingId:{type:String},OrderNotificationType:{type:String},OrderMerchantReference:{type:String}},
        pesapalPaymentResult : {
            paymentMethod:{type:String},
            amount:{type:Number},
            createdDate:{type:Date},
            confirmationCode:{type:String},
            paymentStatusDescription:{type:String},
            description:{type:String},
            message:{type:String},
            paymentAccount:{type:String},
            callbackUrl:{type:String},
            statusCode:{type:Number},
            merchantReference:{type:String},
            paymentStatusCode:{type:String},
            currency:{type:String},
            error:{errorType:{type:String},code:{type:String},message:{type:String}},
            status:{type:String},
        },
        itemsPrice : {type : Number,required : true},
        totalTax : {type : Number,required : true},
        delivery : {type : String,required : true},
        transactionFee : {type:Number, required:true},
        totalPrice : {type : Number,required : true},
        isPaid:{type:Boolean,default:false},
        isDelivered : {type : Boolean,required : true,default:false},
        smsSentToClient:{
            sent:{type:Boolean, required:true,default:false},
            smsStatus : {type:String},
            smsStatusDetails : {type:String}
        },
        smsSentToAdmin:{
            sent:{type:Boolean, required:true,default:false},
            smsStatus : {type:String},
            smsStatusDetails : {type:String}
        },
        paidAt : {type : Date},
        deliveredAt : {type:Date}
    },
    {
        timestamps:true
    }
) 
const StrongKombuchaOrder = mongoose.models.StrongKombuchaOrder || mongoose.model("StrongKombuchaOrder",strongKombuchaOrderSchema);
module.exports =  StrongKombuchaOrder;