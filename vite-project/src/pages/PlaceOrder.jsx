import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/fronted/assets'
import { ShopContext } from '../contex/ShopContext';

function PlaceOrder() { 
   const[method,setMethod] = useState("cod");
   const {navigate} = useContext(ShopContext);
   

  return (
    <div className='flex flex-col sm:flex-row  gap-4 justify-between pt-5 sm:pt-14 min-h-[80vh] border-t'>
       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"INFORMATION"}/>

          </div>
            <div className='flex gap-3 '>
                 <input type="text" placeholder='First name' className='border border-slate-700 py-1.5 px-3  w-full rounded' />
                 <input type="text" placeholder='Last name' className='border border-slate-700 py-1.5 px-3  w-full rounded' />

            </div >
            <input type="email" placeholder='Enter Email' className='border border-slate-700 py-1.5 px-3 w-full rounded' />
            <input type="text" placeholder='Enter Street' className='border border-slate-700 py-1.5 px-3 w-full rounded' />
             <div className='flex gap-3 '>
                 <input type="text" placeholder='Enter city' className='border border-slate-700 py-1.5 px-3  w-full rounded' />
                 <input type="text" placeholder='Enter State' className='border border-slate-700 py-1.5 px-3  w-full rounded' />

            </div >
             <div className='flex gap-3 '>
                 <input type="text" placeholder='Enter Zip code' className='border border-slate-700 py-1.5 px-3  w-full rounded' />
                 <input type="text" placeholder='Enter Country' className='border border-slate-700 py-1.5 px-3  w-full rounded' />

            </div >
            <input type="number" placeholder='Enter Phone' className='border border-slate-700 py-1.5 px-3  w-full rounded' />
            
       </div>
       {/*  ............................................. RIGHT SIDE CONTENT FOR ............................... */}
          <div className='mt-8'>
              <div className='mt-8 min-w-80'>
               <CartTotal/>

              </div>
              <div className='mt-12'>
                <Title text1={'PAYMENT'} text2={'METHOD'}/>
                   <div className=' flex gap-3 flex-col  lg:flex-row'>
                            <div onClick={()=>setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                               <p className={`min-w-3.5 h-3.5 border border-slate-200  rounded-full ${method==='stripe'? 'bg-green-600':''} `}></p>
                                     <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
                            </div>
                            <div onClick={()=>setMethod("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                               <p className={`min-w-3.5 h-3.5 border border-slate-200  rounded-full ${method==='razorpay'? 'bg-green-600':''}`}></p>
                                     <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
                            </div>
                            <div onClick={()=>setMethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                               <p className={`min-w-3.5 h-3.5 border border-slate-200  rounded-full ${method==='cod'? 'bg-green-600':''}`}></p>
                                     <p className='text-slate-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                            </div>

                   </div>
                   <div className='w-full text-end mt-8'>
                       <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm cursor-pointer rounded'>PLACE ORDER</button>

                   </div>

              </div>

          </div>

       
    </div>
  )
}

export default PlaceOrder