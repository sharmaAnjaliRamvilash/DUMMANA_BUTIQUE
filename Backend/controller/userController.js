import validator from 'validator';
import bcrypt from "bcrypt";
import userModel from '../models/userModel.js';
import jwt  from "jsonwebtoken";


const createToken = (id)=>{
        jwt.sign({id},process.env.JWT_SECRET);

}

const loginUser = async(req,res)=>{
    let {email,password} =  req.body;
     try {
        const user = await userModel.findOne({email});
        if(!user){
              return res.json({success:false,message:"User doesn't exist"});
        }
         const isMatch = await bcrypt.compare(password,user.password);
         if(isMatch){
                const token= await createToken(user._id);
                res.json({success:true,token});
         }else{
                res.json({success:false,message:"Invalid creditials"});
         }
        
     } catch (error) {
           console.log(error);
           res.json({success:false,message:error.message});
        
     }

}
const registerUser = async(req,res)=>{
     let {name,email,password} = req.body;

      try {
        const exist = await userModel.findOne({email});
        if(exist){
            return   res.json({success:false,message:"user already exist"});
        }
        if(!validator.isEmail(email)){
            return  res.json({success:false,message:"Entered email is incorrect"});
        } 
        if(password.length<8){
               return res.json({success:false,message:"Please enter the strong password"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword =  await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name,
            email,
            password:hashPassword,
        })
         const user = await newUser.save();
         const token = createToken(user._id);
       return   res.json({success:true,token});


        
      } catch (error) {
        console.log(error);
       return res.json({success:false,message:error.message});
        
      }

}
const adminLogin = async(req,res)=>{
   try {
       let {email,password}  = req.body;
       if(email===process.env.ADMIN_EMAIL   && password===process.env.ADMIN_PASSWORD){
         const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,message:token});
       }else{
          res.json({success:false,message:"Invalid credentials"});
       }
    
   } catch (error) {
     console.log(error);
       return res.json({success:false,message:error.message});
    
   }

}
export {loginUser,registerUser,adminLogin};