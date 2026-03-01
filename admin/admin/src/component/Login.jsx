import React, { useState } from 'react'
import axios from 'axios';
import {backendUrl}  from '../App';

import { toast } from 'react-toastify';

function Login({setToken}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onSubmitHandler =async(e)=>{
              try {
                  e.preventDefault();
                  const response = await axios.post(backendUrl + '/api/user/admin',{email,password});
                  if(response.data.success){
                         setToken(response.data.token); 
                  }else{
                     toast.error(response.data.message);
                       
                  }
                  
                
                
              } catch (error) {
                console.log(error);
                toast.error(error.message);
                
              }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
         <div className='bg-white shadow-lg rounded-lg px-8 py-6 max-w-md '>
             <h1 className='text-center font-bold mb-5'>Admin Panel</h1>
               <form  onSubmit={onSubmitHandler} action="">
                   <div className='mb-3 min-w-72 my-10'>
                    <p className='text-sm font-medium text-slate-700 mb-2 '>Enter your Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded w-full px-3 py-2 border border-slate-300 outline-none' type="email"  placeholder='Enter @Email' required />
                   </div>
                   <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-slate-700 mb-2'>Enter your password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded w-full px-3 py-2 border border-slate-300 outline-none' type="password"  placeholder='Enter Password'  required/>
                   </div>
                   <button type='submit' className='w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer'>Login</button>
               </form>
            
         </div>

    </div>
  )
}

export default Login