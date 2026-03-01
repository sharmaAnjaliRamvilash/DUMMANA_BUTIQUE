import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

const app = express();
const port = process.env.PORT || 4000


app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);

app.get('/',(req,res)=>{
       res.send("Now server has started with right port ");
})
app.listen(port,()=>{
      console.log("Server started on port ",port);
})