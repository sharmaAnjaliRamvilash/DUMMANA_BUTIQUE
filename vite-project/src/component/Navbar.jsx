import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router'
import {assets} from '../assets/fronted/assets';
import { Link } from 'react-router';
import { ShopContext } from '../contex/ShopContext';

function Navbar() {
    const [visible,setVisible] = useState(false);
    const {showSearch,setShowSearch} = useContext(ShopContext);
    const {getCartTotal} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>  <img src={assets.logo} alt="" className='w-36' /></Link>
          <ul className='hidden sm:flex gap-5 text-slate-700'>
               <NavLink to='/' className="flex flex-col items-center gap-1 ">
                  <p className=''>HOME</p>
                        <hr  className='w-2/4 border-none bg-slate-700 h-[1.5px] hidden'/>
               </NavLink>
               <NavLink to='/collection' className="flex flex-col items-center gap-1">
                  <p className=''>COLLECTION</p>
                        <hr  className='w-2/4 border-none bg-slate-700 h-[1.5px] hidden'/>
               </NavLink>
               <NavLink to='/about' className="flex flex-col items-center gap-1">
                  <p className=''>ABOUT</p>
                        <hr  className='w-2/4 border-none bg-slate-700 h-[1.5px] hidden'/>
               </NavLink>
               <NavLink to='/contact' className="flex flex-col items-center gap-1">
                  <p className=''>CONTACT</p>
                        <hr  className='w-2/4 border-none bg-slate-700 h-[1.5px] hidden'/>
               </NavLink>
            
          </ul>
          <div className='flex items-center gap-6'>
               <img onClick={()=>setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
               <div className='group relative'>
                  <Link to={'/login'}> <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                     <div className='group-hover:block hidden absolute  dropdown-menu right-0 pt-4'>
                          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-slate-200 text-slate-500 rounded'>
                            <p className='hover:text-black cursor-pointer'>My Profile</p>
                            <p className='hover:text-black cursor-pointer'>Orders</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>

                          </div>

                     </div>

               </div>
                <Link  to="/cart"  className="relative">
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
           <p className='absolute right-[-5px] bootom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartTotal()}</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />
          </div>

          {/*   sidebar menu ................. */}

                 <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible? 'w-full':'w-1'}`}>
                       <div  className='flex flex-col text-slate-400'>
                          <div className=' flex items-center gap-4 p-3 cursor-pointer'>
                            <img onClick={()=>setVisible(false)} src={assets.dropdown_icon} alt="" className='h-4 rotate-180xx' />
                            <p onClick={()=>setVisible(false)}>Back</p>


                          </div>
                           <NavLink onClick={()=>setVisible(false)} className='py-2 border-b pl-6' to='/'>HOME</NavLink>
                           <NavLink onClick={()=>setVisible(false)}className='py-2 border-b pl-6' to='/collection'>COLLECTION</NavLink>
                           <NavLink onClick={()=>setVisible(false)}className='py-2 border-b pl-6' to='/about'>ABOUT</NavLink>
                           <NavLink onClick={()=>setVisible(false)}className='py-2 border-b pl-6' to='/contact'>CONTACT</NavLink>

                       </div>
                    </div>         

    </div>
  )
}

export default Navbar