import { v2  as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";
const addProduct = async (req, res) => {
    try {
        const { name, price, description, category, subCategory, bestSeller, sizes } = req.body;
             let image1 = req.files.image1  && req.files.image1[0];
             let image2 = req.files.image2  && req.files.image2[0];
             let image3 = req.files.image3  && req.files.image3[0];
             let image4 = req.files.image4  && req.files.image4[0];
          let images = [image1, image2, image3, image4].filter((items)=>items!==undefined);
           let imageUrl =  await Promise.all(
             images.map(async (items)=>{
                 let result = await cloudinary.uploader.upload(items.path,{resource_type:'image'});
                 return result.secure_url;
             } )
           )
             
           const productData = {
              name,
              description,
              category,
              price:Number(price),
              subCategory,
              bestSeller:bestSeller==="true"?true:false,
              sizes:JSON.parse(sizes),
              image:imageUrl,
              date:Date.now()

           };
           console.log(productData);
           const product = new productModel(productData);
           await product.save();    

        console.log(name, price, description, category, subCategory, bestSeller, sizes);
          console.log(imageUrl);
        res.json({success:true,message:"Product added successfully"});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
         res.json({success:true,products});
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message }); 
        
    }

}

const singleProduct = async (req, res) => {

      try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
         res.json({success:true,message:product});
        
      } catch (error) {
              console.log(error);
              res.json({success:false,message: error.message})
      }


}
const removeProduct = async (req, res) => {
    try {
            await productModel.findByIdAndDelete(req.body.id);
           res.json({success:true,message:"Product removed successfully"});
        
    } catch (error) {

         console.log(error);
        res.json({ success: false, message: error.message }); 
        
    }

}
export { addProduct, listProduct, singleProduct, removeProduct };