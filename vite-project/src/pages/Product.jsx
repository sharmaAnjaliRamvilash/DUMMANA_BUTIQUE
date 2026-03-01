import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { useParams } from 'react-router';
import ProductItems from '../component/ProductItems';
import { assets } from '../assets/fronted/assets';
import Relatedproducts from '../component/Relatedproducts';

function Product() {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
  }, [productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[17.17%] w-full'>
            {productData.image.map((items, index) => (
              <img onClick={() => setImage(items)} src={items} key={index} alt='' className='w-[24%] sm:w-full h-[60%] flex-shrink-1 cursor-pointer sm:mb-3' />
            ))}
          </div>
          <div className='w-full sm:w-[40%]'>
            <img src={image} alt="" className='w-full  h-auto' />

          </div>
          {/* ....................................... product information ........................ */}
          <div className='flex-1'>
            <h1 className='font-sm text-2xl  mt-2 '>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>

            </div>
            <p className='mt-4 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-slate-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select size</p>
              <div className='flex gap-2 '>
                {productData.sizes.map((items, index) => (
                  <button onClick={() => setSize(items)} key={index} className={` ${items == size ? 'border-orange-500' : ''} border py-2 px-4 bg-slate-100 cursor-pointer border-slate-400 rounded`}> {items}

                  </button>
                ))}
              </div>

            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-slate-600'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-slate-600 flex mt-5 flex flex-col gap-1'>
              <p>100% Original</p>
              <p>Cash on Delivery</p>
              <p>Easy return and exchnage policy</p>

            </div>

          </div>

        </div>


      </div>
      <div className='mt-2'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'> DESCRIPTION</b>
          <p className='border px-5 py-3 text-sm '>REVIEWS (122)</p>
        

        </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-slate-600'>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore cumque minus ex ratione. Minus adipisci hic qui odit soluta facilis harum unde incidunt aut rerum! Reprehenderit unde minima quis.

            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis ratione doloremque qui consequuntur reprehenderit eos in. Consequuntur sunt, iste praesentium voluptatem, cumque tenetur quo obcaecati eaque, quisquam deserunt velit?



          </div>

      </div>
      {/* ..........................  display the related products ................. */}
      <Relatedproducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product