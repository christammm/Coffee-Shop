import mongoose from 'mongoose'

const connectDB = async () =>{
    try{
        //Establish connection because its api connection call we want to use await async.
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewURLParser: true,
            useCreateIndex: true,
        })

        //cyan underline is just a colors function from colors.js to add color
        console.log(`Mongo DB connected : ${connection.connection.host}`.cyan.underline)
    } catch (error){
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

export default connectDB