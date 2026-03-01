import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

function Relatedproducts({category,subCategory}) {
     const {products}  =  useContext(ShopContext);
     const [relatedProduct,setRelatedProduct] = useState([]);
     useEffect(()=>{
        let productCopy = products.slice();
        
        if(products.length>0){
              productCopy = productCopy.filter((items=>category===items.category));
              productCopy = productCopy.filter((items)=>subCategory===items.subCategory);
              setRelatedProduct(productCopy.slice(0,5));
        }
        

     },[products]);

  return (
    <div className='my-24'>
         <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>

         </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5'>
          {relatedProduct.map((items,index)=>(
               <ProductItems key={index} id={items._id} name={items.name} price={items.price} image={items.image}/>
          ))}

         </div>

    </div>
  )
}

export default Relatedproducts