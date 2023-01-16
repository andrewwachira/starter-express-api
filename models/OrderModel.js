const mongoose =require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
        orderItems:[{
            name:{type:String, required:true},
            quantity:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:String, required:true}
        }],
        shippingAddress : {
        fullName:{type:String,required:true},
        county:{type:String,required:true},
        area:{type:String,required:true},
        specificAddress:{type:String,required:true},
        roadName:{type:String,required:true},
        },
        paymentMethod : {type : String,required : true},
        mpesaIdentifier : {type :String},
        mpesaPaymentResult : {MerchantRequestID:{type:String},CheckoutRequestID:{type:String},ResultCode:{type:Number},ResultDesc:{type:String}},
        itemsPrice : {type : Number,required : true},
        totalTax : {type : Number,required : true},
        delivery : {type : String,required : true},
        totalPrice : {type : Number,required : true},
        isPaid : {type : Boolean,required : true,default:false},
        isDelivered : {type : Boolean,required : true,default:false},
        paidAt : {type : Date},
        deliveredAt : {type:Date}
    },
    {
        timestamps:true
    }
) 

const Order = mongoose.models.Order || mongoose.model("Order",orderSchema);
module.exports = Order; 