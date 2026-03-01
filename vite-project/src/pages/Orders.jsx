import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import Title from '../component/Title';
import { assets } from '../assets/fronted/assets';

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />

      </div>
      <div>
        {products.slice(1, 4).map((items, index) => (
          <div key={index} className='py-4 border-t border-b flex flex-col  sm:justify-between md:flex-row md:items-center  md:justify-between gap-4 '>
            <div className='flex items-start gap-6 text-sm'>
              <img src={items.image[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className='sm:text-base font-medium'>{items.name}</p>
                <div className='flex items-center gap-3 mt-3 text-slate-600'>
                  <p className='text-lg'>{currency}{items.price}</p>
                  <p>Quantity:1</p>
                  <p>Size:M</p>

                </div>
                <p className='mt-2'>Date: <span className='text-slate-400'>25,Jul,2026</span></p>
              </div>
              <div className='md:flex-1/2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>

                </div>

                     <button className='border px-4 py-2 text-sm font-medium  rounded-sm'>Track order</button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Orders