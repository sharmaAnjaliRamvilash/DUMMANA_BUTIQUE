import React from 'react'
import { assets } from '../assets/fronted/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 text-center border border-slate-400'>
         {/* left   */}
           <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-1'>
             <div className='text-[#414141]'>
                     <div className='flex items-center gap-3'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
                        
                     </div>
                     <h1 className='text-3xl sm:py-3 lg:text-5xl leading-related'>Latest Arrival</h1>
                      <div className='flex items-center gap-3'>
                        <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                        <p className='w-8 md:w-11 h-[1px] py-[1px] bg-[#414141]'></p>

                      </div>

             </div>


           </div>
           {/* right  */}
               <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />

    </div>
  )
}

export default Hero