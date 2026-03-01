import jwt from "jsonwebtoken";

const adminAuthentication = async(req,res,next)=>{
      try {
         const {token} = req.headers;
       if(!token){
          return res.json({success:false,message:"Not authorised please login again"});
       }
        let decode_token = await jwt.verify(token,process.env.JWT_SECRET);
        if(decode_token !== process.env.ADMIN_PASSWORD+process.env.ADMIN_EMAIL ){
                return res.json({success:false,message:"Not authorised login again"});
        }
        next();
        
      } catch (error) {
         console.log(error);
         res.json({success:false,message:error.message});
        
      }
}

export default adminAuthentication;