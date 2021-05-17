import express from 'express';
//Create a variable called router
const router = express.Router();
//Import product model from mongoose
import Product from '../models/productModel.js'
//import async handler for express 
import asyncHandler from 'express-async-handler'

//@desc  Fetching all productss
//@route GET /api/products
//@access Fetch all products // Some routes need access tokens.
//THIS GET api products will send send products as a JSON 
//replace app with router
//Remember because we're pull from mongodb. ITS A ASYNC CALL from the DB. SO WE MUST DELCARE ASYNC.
//no need to do '/api/products' within the GET call since we will be creating /api/products pointers to thhis router.
//Simply wrap the asyncHandler over the async get function parameter.
router.get('/', asyncHandler(async (req, res)=>{
    //Pull products using Product model find.
    //Mongoose function to find all products
    const products = await Product.find({})
    res.json(products);
}))



//@desc  Fetching all productss
//@route GET /api/products
//@access Fetch all products // Some routes need access tokens.
//THIS GET will send back individual product
//no need to do '/api/products' within the GET call since we will be creating /api/products pointers to thhis router.
//Make sure this is wrapped in the async handler aswell.
router.get('/:id', asyncHandler(async (req, res)=>{
    //Similar to the ES6 react method, we use products.find but instead of match we use req.
    //Mongoose function to find from model by id.
    const product = await Product.findById(req.params.id);

    //Check if product exists
    if(product){
        res.json(product);
    } else{
        //Send json as a message.
        //res.status(404).json({message: 'product not found'})

        //Because we have Middleware established in server.js, the middleware will help us handle the error and send it through JSON. (notFound from middleware/errorMiddleware.js)
        res.status(404)
        throw new Error('Product not found')
    }


    res.json(product);
}))

export default router