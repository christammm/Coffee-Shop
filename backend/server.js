//Declare express 
import express from 'express'
import dotenv from 'dotenv' //Declare dotenv

//products
import products from './data/products.js';

dotenv.config();

//Declare express instance or app
const app = express();

//GET ROUTE
app.get('/', (req, res)=>{
    res.send('API is running');
});

//THIS GET api products will send send products as a JSON 
app.get('/api/products', (req, res)=>{
    res.json(products);
});

//THIS GET will send back individual product
app.get('/api/products/:id', (req, res)=>{
    //Similar to the ES6 react method, we use products.find but instead of match we use req.
    const product = products.find(product=>product._id === req.params.id);
    res.json(product);
});

//DOT ENV ABOVE app.listen use PORT, else use PORT 5000
const PORT = process.env.PORT || 5000;


//listen on app
//THe app listen is now using the varibles we declare in dotenv and .env
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode. Now listening on Port ${PORT}`));

