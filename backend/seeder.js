//This is a separate script to import models annd data to seed into our MongoDB environment

import mongoose from 'mongoose'
//We need mongodb link from dotenv.
import dotenv from 'dotenv' 
// for coloring text
import colors from 'colors' 
//Import the sample data.
import users from './data/users.js'
import products from './data/products.js'
//Import the models we created for MongoDB.
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
//Finally import our connectDB that we created to connect to Mongo.
import connectDB from './config/db.js'//import mongoose connection

//establish dotenv.config to get the env variables
dotenv.config()

connectDB();//To connect to MongoDB Db to run the import and destroy functions that we created.

//Remember, because this a databased everything we do is asynchronous!! Therefore, we need to create async await function

/**
 * Mongo functions for models for our seeder script
 * deleteMany();
 * insertMany();
 */

//Import Products
const importData = async () =>{
    //Implement try catch
    try{
        //Mongoose function to delete everything. This returns a promise, so we have to add an await call.
        //We just want to do a FRESH INSTALL of DATA
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        //console.log('Deleting done!')

        //Mongoose function to insert users
        //We want to have admins responsible for managing products so we need to store into a variable
        const createdUsers = await User.insertMany(users)

        //We know the first item in the createdusers(Users.js) contains the admin
        const adminUser = createdUsers[0]._id;

        //Map the admin user to each product, because ONLY ADMINS CAN CREATE PRODUCTS
        const sampleProducts = products.map(product =>{
            //Using the object with spread operator with user field will add products + adminUser.
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts);//Now use this to insert all products assigned with admin user 

        console.log('Data imported!'.green.bold);

        //Exit the process once finished
        process.exit();
    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit(1);//ONLY use process.exit(1) for errors.
    }
};


//Destroy data
const destroyData = async () =>{
    //Implement try catch
    try{
        //Mongoose function to delete everything. This returns a promise, so we have to add an await call.
        //We just want to do a FRESH INSTALL of DATA
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed!'.green.bold)
        //Exit the process once finished
        process.exit()
    }catch(err){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
};

//This will check for -d in the command line call. If -d exists, it will destroy all data.
if(process.argv[2] === '-d'){
    destroyData()
}else{//Otherwise it will import data.
    importData()
}