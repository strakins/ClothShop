import userModel from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// Login User Route
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});
        if(!user) {
            return res.json({success: false, message: "User does not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            // 6:19
        }


    } catch (err) {
        console.log(err)
    }
}

// Admin Login User Route
const adminLogin = async (req, res) => {
}


// Register User Route
const registerUser = async (req, res) => {
    try {
        const {name, email, password, phone} = req.body;

        // Check for existing user
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: "User already exists"})
        }
        
        // validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please Enter a Valid Email"})
        }
        if(password.length < 8) {
            return res.json({success: false, message: "Please Enter a Strong Password"})
        }

        // hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            phone,
            password: hashedPassword,
        })

        const user = await newUser.save();

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: err.message,
        })
    }
}

export {  loginUser, registerUser, adminLogin } 