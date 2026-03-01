import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { products } from "../assets/fronted/assets";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
export const ShopContext = createContext();


const ShopContextProvider  =(props)=>{
    const navigate = useNavigate();
    const delivery_fee = 10;
    const currency = '$';
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);
    const [cartItems,setCartItems] = useState({});
    
    const addToCart = async(itemId,size)=>{
        if(!size){
              toast.error("Please select the product size");
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
              if(cartData[itemId][size]){
                  cartData[itemId][size] += 1;
              }else{
                  cartData[itemId][size] = 1;
              }

        }else{
                 cartData[itemId] = {};
                 cartData[itemId][size] = 1;
        }
          setCartItems(cartData);

    }
     const getCartAmount = ()=>{
          let totalAmont =0;
          for(let items in cartItems){
              let itemsInfo =products.find((product)=>product._id ===items);
              for(let item in cartItems[items]){
                  try{
                    if(cartItems[items][item]>0){
                          totalAmont += itemsInfo.price  * cartItems[items][item];
                    }

                  }catch(e){

                  }
              }
          }
          
          return totalAmont;
     }
    const getCartTotal = ()=>{
         let totalAmount =0;
          for(let items in cartItems){
              for(let item in cartItems[items]){
                    try {
                         if(cartItems[items][item]>0){
                             totalAmount += cartItems[items][item];
                    }
                        
                    } catch (error) {
                        
                    }
              }
          }
          return  totalAmount;
    }
    const updateQuantity = async(itemId,size,quantity)=>{
                 let cartData = structuredClone(cartItems);
                 cartData[itemId][size] = quantity;
                 setCartItems(cartData);
    }
     const updateQuantity = async(itemId,size,quantity)=>{
          
     }
    useEffect(()=>{
          console.log(cartItems);
    },[cartItems]);
    const value={
       navigate,   products,delivery_fee,currency,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartTotal,updateQuantity,getCartAmount
    }
      return (
          <ShopContext.Provider value={value}>
                  {props.children}
          </ShopContext.Provider>
      )
}
export default ShopContextProvider;

