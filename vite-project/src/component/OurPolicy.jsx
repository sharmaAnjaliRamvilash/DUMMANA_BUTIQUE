import React from 'react'
import { assets } from '../assets/fronted/assets'




function OurPolicy() {
  return  (
     <div   className='flex flex-col sm:flex-row justify-around  gap-12 sm:gap-2 text-center '>
                    <div>
                        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>Easy exchange Policy</p>
                        <p className='text-slate-600'>We offer  hassle free exchnage policy</p>
                    </div>
                    <div>
                        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>7 Days return policy</p>
                        <p className='text-slate-600'>We offer  hassle free exchnage policy</p>
                    </div>
                    <div>
                        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>Best customer support</p>
                        <p className='text-slate-600'>We offer  hassle free exchnage policy</p>
                    </div>
     </div>
  )
}

export default OurPolicy