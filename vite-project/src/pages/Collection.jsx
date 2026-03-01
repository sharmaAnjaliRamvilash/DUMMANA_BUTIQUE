import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../contex/ShopContext';
import { assets } from '../assets/fronted/assets';
import Title from '../component/Title';
import ProductItems from '../component/ProductItems';


function Collection() {
    const {products,search,showSearch} = useContext(ShopContext);
        
     const [showFilter,setFilter] = useState(true);
      const [filterProducts,setFilterProducts] = useState([]);
      const [category,setCategory] = useState([]);
       const [subCategory,setSubCategory] = useState([]);
       const [sortType,setSortType] = useState('relavent');

       const toggleCategory=(e)=>{
                if(category.includes(e.target.value)){
                      setCategory(pre=>pre.filter(items=>items!==e.target.value));
                }else{  
                     setCategory(pre=>[...pre,e.target.value]);
                }
       }
       const toggleSubCategory =(e)=>{
                if(subCategory.includes(e.target.value)){
                        setSubCategory(pre=>pre.filter(items=>items!==e.target.value));
                }else{
                    setSubCategory(pre=>[...pre,e.target,value]);
                }
       }
       const applyFilter=()=>{
            let productCopy = products.slice();
             if(search  && showSearch){
                    productCopy = productCopy.filter((items=>items.name.toLowerCase().includes(search.toLowerCase())));
             }
            if(category.length>0){
              productCopy = productCopy.filter(items=>category.includes(items.category));
            }
            if(subCategory.length>0){
                productCopy = productCopy.filter(item=>subCategory.includes(item.subCategory));
                 
            }
            setFilterProducts(productCopy);

       }
         const sortProduct = ()=>{
              let fp = filterProducts.slice();
               switch(sortType){
                  case 'low-high':
                    setFilterProducts(fp.sort((a,b)=>a.price-b.price));
                    break;
                   case 'high-low':
                    setFilterProducts((fp.sort((a,b)=>b.price-a.price)));
                    break;
                    default :
                      applyFilter();
                      break;
               }
         }
       useEffect(()=>{
               
             applyFilter();
       },[category,subCategory,search,showSearch]);
       useEffect(()=>{
            sortProduct();
       },[sortType]);
        
  return (
    <div className='flex flex-col sm:flex-row  gap-1 sm:gap-10 pt-10 border-t'>
        <div className='min-w-60'>
            <p onClick={()=>setFilter(!showFilter)} className='my-2 text-xl  flex items-center cursor-pointer gap-2'>
              FILTERS
              <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter? 'rotate-90': ''}`} alt="" />

            </p>
             <div className={`border pl-3 py-3 mt-6  ${showFilter? '':'hidden'}`}>
               <p className='mb-3 font-medium  text-sm'>
                CATEGORIES

               </p>
                <div className='flex flex-col items-center gap-2  font-light text-slate-700'>
                   <p className='flex gap-2'>
                     <input onChange={toggleCategory} type="checkbox"  className='w-3' value={'Men'} />MEN

                   </p>
                   <p className='flex gap-2'>
                     <input onChange={toggleCategory} type="checkbox"  className='w-3' value={'Women'} /> WOMEN

                   </p>
                   <p className='flex gap-2'>
                     <input onChange={toggleCategory} type="checkbox"  className='w-3' value={'Kids'} /> KIDS

                   </p>

                </div>

             </div>
              <div className={`border pl-3 py-3 my-5  ${showFilter? '':'hidden'}`}>
               <p className='mb-3 font-medium  text-xm'>
                TYPE

               </p>
                <div className='flex flex-col items-center gap-2  font-light text-slate-700'>
                   <p className='flex gap-2'>
                     <input onChange={toggleSubCategory} type="checkbox"  className='w-3' value={'Topwear'} />TOPWEAR

                   </p>
                   <p className='flex gap-2'>
                     <input onChange={toggleSubCategory} type="checkbox"  className='w-3' value={'Bottomwear'} /> BOTTOMWEAR

                   </p>
                   <p className='flex gap-2'>
                     <input onChange={toggleSubCategory} type="checkbox"  className='w-3' value={'Winterwear'} /> WINTERWEAR

                   </p>

                </div>

             </div>

        </div>

            {/*   ui of the right side */}
             <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl my-5'>
                    <Title text1={"ALL"} text2={"COLLECTION"}/>
                        <select onChange={(e)=>setSortType(e.target.value)} name="" id="" className='border border-slate-400m text-sm px-4 py-2'>
                          <option value="relavent">SORT BY: RELEVENT</option>
                          <option value="low-high">SORT BY:HIGH-LOW</option>
                          <option value="high-low">SORT BY:LOW-HIGH</option>
                        </select>
                </div>
                {/*  mapping  */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((items,index)=>(
                           <ProductItems key={index} id={items._id} name={items.name} image={items.image} price={items.price}/>
                    ))}

                </div>

             </div>
    </div>
  )
}


export default Collection
