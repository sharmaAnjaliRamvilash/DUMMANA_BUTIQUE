import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

function BestSeller() {
     const {products}  =  useContext( ShopContext);
       const [bestSeller,setBestSeller] = useState([]);
        useEffect(()=>{
               const filterBest = products.filter((items)=>items.bestSeller);
                  setBestSeller(filterBest.slice(0,5));
        },[])
  return (
    <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                 <Title text1={'BEST'} text2={'SELLER'}/>
                 <p className="w-3/4 m-auto sm:text-sm md:text-base text-slate-600" >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati veritatis eligendi. Provident ducimus quisquam eligendi quaerat qui ipsam pariatur molestias laborum dolores nisi! Placeat dolore similique molestiae nihil possimus.

                 </p>
            </div>
             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gapy-5'>
                 {bestSeller.map((items,index)=>(
                          <ProductItems key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
                 ))}
             </div>

    </div>
  )
}

export default BestSeller