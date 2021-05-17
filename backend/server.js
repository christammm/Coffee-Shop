//Declare express 
import express from 'express'
import dotenv from 'dotenv' //Declare dotenv\
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

//Import connectDB js
import connectDB from './config/db.js';

//products
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

//Declare express instance or app
const app = express();

//GET ROUTE for home screen
app.get('/', (req, res)=>{
    res.send('API is running');
});

//Now any reference to /api/products will now use the routes assigned from productRoutes.js
app.use('/api/products',productRoutes);


//Error handling middleware
//404 error
app.use(notFound)
//Have err front of the params first to detect error for 500 Error.
app.use(errorHandler)

//DOT ENV ABOVE app.listen use PORT, else use PORT 5000
const PORT = process.env.PORT || 5000;


//listen on app
//THe app listen is now using the varibles we declare in dotenv and .env
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode. Now listening on Port ${PORT}`.green.bold));

