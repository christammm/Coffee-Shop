import mongoose from 'mongoose';

//Create user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true//Object to make it required
    },
    email: {
        type: String,
        required: true,//Object to make it required
        unique: true,//Set unique to true to ensure there are no duplicates.
    },
    password: {
        type: String,
        required: true//Object to make it required
    },
    isAdmin: {
        type: Boolean,
        required: true,//Object to make it required
        default: false,
    },
    
},{
    timestamps: true
});

//Create a model from this schema
const User = mongoose.model('User', userSchema);

export default User
