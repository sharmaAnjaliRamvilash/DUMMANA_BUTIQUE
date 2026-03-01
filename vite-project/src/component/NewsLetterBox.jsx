import React from 'react'

function NewsLetterBox() {
      const onSubmitHandler = (e)=>{
                e.preventDefault();
      }
  return (
    <div className='text-center mt-20 text-center items-center flex flex-col py-5 '>
          <p className='text-center text-3xl font-semibold py-5'>Subscribe Now and get 20% offer</p>
          <p className='mt-4 text-slate-400 py-3 sm:max-w-[50%]'>
            Lorem ipsum dolor sit amet consectetur a, consequatur molestiae error quasi magnam facilis minus fuga?
          </p>
          <form onSubmit={onSubmitHandler} action="" className='flex items-center  w-full sm:w-1/2 gap-3 mx-auto my-6 mt-5 border pl-3 rounded '>
             <input type="text" placeholder='Enter your email' className='w-full  sm:flex-1 outline-none' required/>
             <button type='submit' className='bg-black text-white text-sm  px-10 py-3 '>SUBMIT</button>
          </form>

    </div>
  )
}

export default NewsLetterBox