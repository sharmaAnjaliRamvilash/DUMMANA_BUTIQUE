import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

function LatestCollection() {
       const {products}  = useContext(ShopContext);
       const [latestProducts,setLatestProducts] =  useState([]);
        useEffect(()=>{
       setLatestProducts(products.slice(0,10));
        },[])
       console.log(products);
  return (
    <div className='my-10'>
                 <div className='text-center py-10 text-3xl'>
                    <Title text1={'LATEST'} text2={'COLLECTIONs'}/>
                      <p className='md:text-sm text-base text-slate-600 w-3/4 text-xs '>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla illum magnam perspiciatis officiis, saepe sint labore reprehenderit dignissimos, ipsa commodi veritatis. Quos excepturi recusandae id obcaecati magnam itaque eaque?

                       </p>

                 </div>
                  {/*   rendering the products */}
                    <div className='grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-5 gap-y-6 '>
                      {
                          latestProducts.map((items,index)=>(
                              <ProductItems key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
                          ))
                      }

                    </div>

    </div>
  )
}

export default LatestCollection