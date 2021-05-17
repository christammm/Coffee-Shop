import mongoose from 'mongoose';

//Use the User model as a reference to understand schema

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {//The individual rating for each review
        type: Number,
        required: true,
    },
    comment: {//The individual rating for each review
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

//Create user schema
const productSchema = mongoose.Schema({
    user: {//Create user field to understand who is the author of the product
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'User' //We need to reference this specific model for the Id.
        //This will add a relationship between the product and user.
    },
    name: {
        type: String,
        required: true//Object to make it required
    },
    image: {
        type: String,
        required: true,//Object to make it required
    },
    brand: {
        type: String,
        required: true//Object to make it required
    },
    category: {
        type: String,
        required: true//Object to make it required
    },
    description: {
        type: String,
        required: true//Object to make it required
    },
    reviews: [reviewSchema],//Reviews section will be an array with reviewSchema
    rating: {//Average rating in the review
        type: Number,
        required: true,//Object to make it required
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true//Object to make it required
    },
    price: {
        type: Number,
        required: true//Object to make it required
    },
    countInStock: {
        type: Number,
        required: true//Object to make it required
    },
    
    
},{
    timestamps: true
});

//Create a model from this schema
const Product = mongoose.model('Product', productSchema);

export default Product
