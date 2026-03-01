import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from '../component/Title';
import { assets } from '../assets/fronted/assets';
import CartTotal from '../component/CartTotal';
import { Link } from 'react-router';

function Cart() {
  const {products,currency,cartItems,updateQuantity,navigate} = useContext(ShopContext);
  const [cartData,setCartData]= useState([]);
   useEffect(()=>{
        let tempData =[];
        for(let items in cartItems){
            for(let item in cartItems[items]){
                if(cartItems[items][item]>0){
                     tempData.push({
                        _id:items,
                        size:item,
                        quantity:cartItems[items][item]
                     })
                }
            }
        }
            setCartData(tempData);
        
   },[cartItems]);
  return (
     <div className='border-t pt-12 transition-all duration-500'>
        <div className='text-3xl font-medium mb-3'>
          <Title text1={"YOUR"} text2={"DATA"}/>

        </div>
        <div>
           {cartData.map((items,index)=>{
               const productData = products.find((product)=>product._id===items._id);
               return (
                  <div key={index} className='py-4 border-t border-b text-slate-700 text-slate-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                       <div className='flex items-center gap-6'>
                         <img src={productData.image[0]} className='w-16  sm:w-20' alt="" />
                              <div className=''>
                                    <p className='text-sm sm:text=lg font-medium'>{productData.name}</p>
                                      <div className='flex items-center gap-5  mt-3'>
                                         <p>{currency}{productData.price}</p>
                                         <p className='px-2 sm:px-3 sm:py-1 border bg-slate-100 rounded shadow-sm border-slate-500'>{items.size}</p>

                                      </div>
                              </div>
                       </div>
                       <input onChange={(e)=>e.target.value===" "|| e.target.value==='0'? null : updateQuantity(items._id,items.size,Number(e.target.value))} type="number" defaultValue={items.quantity} min={1} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded border-slate-500' />
                       <img onClick={()=>updateQuantity(items._id,items.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
                    </div>
               )
           })}
        </div>
         <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
                <CartTotal/>
                 <div className='w-full text-end'>
                
                 <button onClick={()=>navigate('/place-order')}  className='bg-slate-900 text-sm my-10 px-8 py-3 text-white border cursor-pointer rounded'>PROCCED TO CHECKOUT</button>
                

            </div>
          </div>
           
         </div>

     </div>
  )
}

export default Cart