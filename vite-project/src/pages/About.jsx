import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/fronted/assets'
import NewsLetterBox from '../component/NewsLetterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>

      </div>
       <div className='my-10 flex flex-col sm:flex-row gap-16 '>
        <img src={assets.about_img}  className='w-full md:max-w-[450px] rounded' alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-slate-600'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut illo corrupti aliquid sit, officia ratione! Odit nobis sunt corporis! Pariatur cum architecto voluptas quis libero unde facilis porro vero?</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eos harum suscipit beatae dolore repellendus blanditiis nihil quidem laudantium doloremque. Officiis minima ducimus asperiores mollitia corrupti eum dolore aut! Voluptate?</p>
          <b className='text-slate-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur, laudantium quidem ea illo obcaecati vero harum placeat quas nam enim a, quia voluptatem repudiandae esse libero aliquam, ut velit!</p>
         </div>

       </div>
        <div className='py-4 text-4xl'>
          <Title text1={"WHY"} text2={"CHOOSE US"}/>

        </div>
         <div className='flex flex-col md:flex-row text-sm mb-20  gap-6'>
           <div className=' rounded-lg shadow-lg text-slate-600 border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
            <b className='text-2xl'>Quality Assurance:</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat praesentium tempora eligendi iste? Ratione eius non vel accusamus earum rerum in itaque delectus nisi. Facere expedita debitis totam aperiam reiciendis!</p>

                 </div>
           <div className=' rounded-lg  shadow-lg text-slate-600 border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
            <b className='text-2xl'>Convinivence:</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat praesentium tempora eligendi iste? Ratione eius non vel accusamus earum rerum in itaque delectus nisi. Facere expedita debitis totam aperiam reiciendis!</p>

                 </div>
           <div className=' rounded-lg  shadow-lg text-slate-600 border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
            <b className='text-2xl'>Exceptional customer service:</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat praesentium tempora eligendi iste? Ratione eius non vel accusamus earum rerum in itaque delectus nisi. Facere expedita debitis totam aperiam reiciendis!</p>

                 </div>
           
         </div>
         <NewsLetterBox/>
    </div>
  )
}

export default About