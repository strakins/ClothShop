import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCLoudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCLoudinary();


// Setup middleware
app.use(express.json());
app.use(cors());


// api endpoints
app.use('/api/user', userRouter);

app.listen(port, () => console.log('Server started on PORT:' + port))
