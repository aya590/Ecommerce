import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const Cartcontext =createContext(null);


export default function CartProvider({children}){
    let {token }= useContext(UserContext);
    const [cart,setCart]= useState(null)

// & add product
     async function addProducttocard({productId}){
        const toastid =toast.loading ("addingproduct...")
try{
    const option ={
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers:{
            token 
        },
        data:{
            productId
        }
       } 
     let {data}= await axios.request(option);

     if( data.status == "success"){
        getcartproducts()
        toast.success(data.message);}
}catch(error){
}finally{
toast.dismiss(toastid);
    }}
// & get product
    async function getcartproducts(){
       try {
        const option = {
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method: "GET",
            headers:{
                token
            }
        }
        let {data}= await axios.request(option)
       
        setCart(data)
       } catch (error) {
        
       }
    }
    // & remove product
    async function removeProductFromCart({productId}) {
      let toastid =toast.loading ("Deleting Product...")
       try {
        const option ={
            url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            method:"DELETE",
            headers:{
                token 
            },
        }
        let {data}= await axios.request(option);
  if (data.status== "success"){
    setCart(data)
   
    toast.success ("Product has been deleted")
  }  
       } catch (error) {
        console.log(error)
       }finally{
     
        toast.dismiss(toastid);
       }
    }
// & clear card
    async function clearCard(){
        let toastid =toast.loading ("clear card...")
       try {
        const option ={
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method :"DELETE",
            headers :{
                token,
            }
        }
        let {data}= await axios.request(option);
        if (data.message == "success"){
            toast.success ("your card has been cleard")
            setCart({numOfCartItems:0})
        }

        console.log(data)
       } catch (error) {
        console.log(error)
       }finally{
        toast.dismiss(toastid);
       }
    }
// & update product count

 async function upduteProductCount({productId,count}){
try {
    const option ={
        url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method :"PUT",
        headers:{
            token ,
        },
        data:{
            count
        }
    }
    let {data}= await axios.request(option)
    if (data.status== "success"){
        setCart(data)}
} catch (error) {
    console.log(error)
}
 } 
    async function getrelatedproduct() {
       const option= {
         url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${data.category._id}`,
         method :"GET",
       }
       let {data}= await axios.request(option);
   
     }
   

    return(
        <Cartcontext.Provider value={{
            addProducttocard,
            getcartproducts,
            cart, 
            removeProductFromCart,
            clearCard,
            upduteProductCount,
            getrelatedproduct
            }}>
            {children}
        </Cartcontext.Provider>
    );
}