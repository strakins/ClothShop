import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true }, 
    //Added unique property to use email as identifier dor each accunt and prevent multiple account 
    password: {type: String, required: true},
    phone: {type: String, required: true},
    cartData: {type: Object, default: {}},
        
}, {minimize: false})

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;