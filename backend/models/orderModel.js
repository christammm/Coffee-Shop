import mongoose from 'mongoose';

//Create order schema
const orderSchema = mongoose.Schema({
    user: {//We need to attach the user recorded in this order so we'll need to create mongoose.
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [{//WE use an array to store multiple products in the order
        name: { type: String, required:true},
        qty: { type: String, required:true},
        image: { type: String, required:true},
        price: { type: Number, required:true},
        product: { type: mongoose.Schema.Types.ObjectId, required:true, ref: 'Product'},// This will be a ref to product
        name: { type: String, required:true},
    }],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        zipcode: {type: Number, required: true},
        city: {type: String, required: true},
    },
    paymentMethod: {
        type:String,
        required: true 
    },
    paymentResult: { // The data returned from paypal will live here.
        id:{type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },
    taxPrice: {
        type:Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type:Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type:Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidDate: {
        type:Date,
    },
    isDelivered:{
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredDate:{
        type:Date,
    }
},{
    timestamps: true
});

//Create a model from this schema
const Order = mongoose.model('Order', orderSchema);

export default Order
