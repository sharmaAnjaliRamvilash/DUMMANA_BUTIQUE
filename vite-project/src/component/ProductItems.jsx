import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import {Link, NavLink} from 'react-router'

function ProductItems({id,name,image,price}) {
      const {currency} =  useContext(ShopContext);
       
  return (
 
          <Link to={`/product/${id}`} className="text-slate-600 cursor-pointer ">
              <div className='overflow-hidden' >
                 <img src={image[0]}  className='hover:scale-110 transition-all duration-300 ease-in-out' alt="" />

              </div>
               <p  className='pt-2 pb-1 text-sm'>{name}</p>
               <p className='text-sm font-medium'>{currency}{price}</p>

          </Link>

   
  )
}

export default ProductItems;