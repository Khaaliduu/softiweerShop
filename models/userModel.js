import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name:{type: String, required: true},
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cart:[],
    wishlist:[]
})

const Users = mongoose.model('users', userShema)
export default Users