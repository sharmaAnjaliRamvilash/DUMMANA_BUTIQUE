import mongoose from "mongoose";
const connectDB = async()=>{
    mongoose.connection.on("Connected",()=>{
         console.log("Database connected succefully");
    })
      await mongoose.connect(`${process.env.MONGO_URI}/Ecommerce`);
}
export default connectDB;