import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/fronted/assets'
import NewsLetterBox from '../component/NewsLetterBox'

function Contact() {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t '>
          <Title text1={"CONTACT"} text2={"US"}/>
        </div>
        <div className='flex  flex-col md:flex-row my-10 justify-center mb-28 gap-10 '>
          <img src={assets.contact_img} className='w-full md:max-w-[480px] rounded-lg' alt="" />
           <div className='flex flex-col items-center items-start gap-6'>
             <p className='font-semibold text-slate-600 text-xl'>Our Store</p>
             <p className='text-slate-600'>Ahemdabad Gujarat <br /> Suite 360 India</p>
             <p className='text-slate-600'>Tel : +21334444</p>
             <p className='text-slate-600'>Email : career123@gmail.com</p>
             <p className='font-semibold text-xl '>Career at @Forever</p>
             <p>Learn more about out team and job opening</p>
             <button className='border border-black bg-black text-white px-8 py-3 hover:text-white hover:bg-slate-700 transition-all duration-500 rounded-lg'>Explore More</button>

           </div>

        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default Contact