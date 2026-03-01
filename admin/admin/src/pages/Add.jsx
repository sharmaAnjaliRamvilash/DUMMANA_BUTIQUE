import React, { useState } from 'react'
import { assets } from '../assets/admin/assets'

function Add() {
    const [image1,setImage1] = useState(false);
    const [image2,setImage2] = useState(false);
    const [image3,setImage3] = useState(false);
    const [image4,setImage4] = useState(false);
     const [category,setCategory] = useState("Men");
     const [subCategory,setSubCategory] = useState("Women");
     const [price,setPrice] = useState("");
     const [bestSeller,setBestSeller] = useState(false);
     const [name,setName] = useState("");
     const [description,setDescription] = useState("");
     const [sizes,setSizes] =  useState([]);

  return (
      <form action="" className='flex flex-col items-start gap-3'>
            <div>
                <p className='mb-2'>Upload image</p>
                 <div className='flex gap-2'>
                    <label htmlFor="image1"> 
                        <img src={!image1 ? assets.upload_area:URL.createObjectURL(image1)} alt="" className='w-20' />
                          <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
                    </label>
                    <label htmlFor="image2">
                        <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" className='w-20' />
                          <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
                    </label>
                    <label htmlFor="image3">
                        <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}  alt="" className='w-20' />
                          <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
                    </label>
                    <label htmlFor="image4">
                        <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" className='w-20' />
                          <input  onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
                    </label>
                 </div>
            </div>
            {/*  */}
             <div className='w-full'>
                <p className='mb-3'>Product name</p>
                 <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Type heere'  className='w-full max-w-[500px] px-3 py-2'/>
             </div>
             <div className='w-full'>
                <p className='mb-3'>Product Description</p>
                 <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder='Type heere'  className='w-full max-w-[500px] px-3 py-2'/>
             </div>
             <div className='flex flex-col sm:flex-row sm:gap-8 gap-3 w-full'>
                  <div>
                      <p className='mb-2'>Category</p>
                        <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2' >
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>

                  </div>
                  <div>
                     <p className='mb-2'>Sub Category</p>
                     <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Topwear">Topwear</option>
                        <option value="Winterwear">Winterwear</option>
                     </select>

                  </div>
                  <div>
                    <p className='mb-2'>Product Price</p>
                      <input onChange={(e)=>setPrice(e.target.value)} value={price} type="Number" placeholder='100' className='w-full px-3 py-2 sm:w-[120px]' />
                  </div>
             </div>
             <div className='mb-3'>
                <p>Product size</p>
                 <div className='flex gap-3'>
                    <div onClick={(e)=>setSizes(pre=>pre.includes("S")?pre.filter(items=>items!=="S"):[...pre,"S"])}>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>
                            S
                        </p>
                    </div>
                    <div onClick={(e)=>setSizes(pre=>pre.includes("M")?pre.filter(items=>items!=="M"):[...pre,"M"])}>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>
                            M
                        </p>
                    </div>
                    <div onClick={(e)=>setSizes(pre=>pre.includes("L")?pre.filter(items=>items!=="L"):[...pre,"L"])}>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>
                            L
                        </p>
                    </div>
                    <div onClick={(e)=>setSizes(pre=>pre.includes("XL")?pre.filter(items=>items!=="XL"):[...pre,"XL"])}> 
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>
                            XL
                        </p>
                    </div>
                    <div onClick={(e)=>setSizes(pre=>pre.includes("XXL")?pre.filter(items=>items!=="XXL"):[...pre,"XXL"])}>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>
                            XXL
                        </p>
                    </div>
                 </div>
             </div>
               <div className='mt-4 flex gap-4'>
                <input type="checkbox" id='bestseller' />
                  <label htmlFor="bestseller" className='cursor-pointer'>Add to best seller</label>
               </div>
               <button type='submit' className='bg-black text-white w-28 mt-1 px-4 py-3'>
                ADD
               </button>
      </form>
  )
}

export default Add