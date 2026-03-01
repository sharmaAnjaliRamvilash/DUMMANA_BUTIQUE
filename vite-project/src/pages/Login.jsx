import React, { useState } from 'react'

function Login() {
  const[currentState,setCurrentState] = useState("Sign Up");
   const onSubmitHandler = (e)=>{
       e.preventDefault();
   }

  return (
     <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center w-[90%] m-auto sm:max-w-96 mt-12 gap-4 text-slate-600 shadow-lg border border-slate-300  px-5 py-5 rounded'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
           <p className='prata-regular text-3xl '>{currentState}</p>
           <hr className='border-none h-[1.5px] w-8 bg-slate-400' />

        </div>
       
          {currentState==="Login"? '': <input type="text"  className='w-full px-3 py-2 border border-slate-800' placeholder='Name' required />}  
            <input type="email" className='w-full px-3 py-2 border border-slate-800' placeholder='Email' required/>
            <input type="password" className='w-full px-3 py-2 border border-slate-800' placeholder='Password' required />
              <div className='w-full flex justify-between text-sm mt-[-1px]'>
                <p className='cursor-pointer'>Forgot your password? </p>
                {currentState==='Login'? <p onClick={()=>setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p>:<p onClick={()=>setCurrentState("Login")} className='cursor-pointer'>Login Here</p>}
              </div>
              <button className='bg-black text-white font-light px-8 py-2 mt-4  rounded'>{currentState==="Login"? "Sign In":"Sign Up"}</button>
       

     </form>
  )
}

export default Login