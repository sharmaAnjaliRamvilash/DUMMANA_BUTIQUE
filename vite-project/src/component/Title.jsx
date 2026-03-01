import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='inline-flex items-center gap-3 mb-3'>
         <p className='text-slate-500'>{text1} <span className='text-slate-600 font-medium'>{text2}</span></p>
         <p className='w-8 sm:w-12 h-[1x] sm:h-[2px] bg-slate-700'></p>

    </div>
  )
}

export default Title;