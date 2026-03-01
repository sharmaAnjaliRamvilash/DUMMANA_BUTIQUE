import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { assets } from '../assets/fronted/assets';
import { useLocation, useParams } from 'react-router';
import { Search } from 'lucide-react';
import { Cross } from 'lucide-react';


function SearchBar() { 
      const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
       const location = useLocation();
       const [visible,setVisible] = useState(false);
         useEffect(()=>{
                if(location.pathname.includes('collection')){
                          setVisible(true);
                } else{
                        setVisible(false);
                }
         },[location]);
  return showSearch && visible?(
    <div className='border-t border-b bg-slate-50 text-center'>
          <div className='inline-flex items-center justify-center border border-slate-400 py-2 px-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text"  placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} />
                <img src={Search} className='w-4 cursor-pointer' alt="" />
          </div>
          <img onClick={(e)=>setShowSearch(false)} src={Cross} className='inline w-3 cursor-pointer' alt="" />

    </div>
  ):<></>
}

export default SearchBar