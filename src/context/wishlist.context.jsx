import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./User.context";
import axios from "axios";


export const wishlistcontext =createContext(null)


export default function WishlistProvider({children}){
    const [wishlist,setwishlist]= useState(null)
        let {token }= useContext(UserContext);

        // addproduct 

async function addproducttowishlst({productId}){
    
    const toastid =toast.loading ("addingproduct...")
try{
    const option ={
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "POST",
        headers:{
            token 
        },
        data:{
            productId
        }
       } 
     let {data}= await axios.request(option);
console.log(data)
     if( data.status == "success"){
        getwishlistproducts()
        toast.success(data.message);}
}catch(error){
}finally{
toast.dismiss(toastid);
    }
  }
//  get product

async function getwishlistproducts(){
    try {
     const option = {
         url:"https://ecommerce.routemisr.com/api/v1/wishlist",
         method: "GET",
         headers:{
             token
         }
     }
     let {data}= await axios.request(option)
     console.log("Cart Data:", data);
     setwishlist(data.data)
    } catch (error) {
     
    }
 }

// & remove product
async function removeProductFromwishlist({productId}) {
  let toastid =toast.loading ("Deleting Product...")
   try {
    const option ={
        url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        method:"DELETE",
        headers:{
            token 
        },
    }
    let {data}= await axios.request(option);
    console.log(data)
if (data.status== "success"){
    setwishlist(data.data)
    getwishlistproducts()
toast.success ("Product has been deleted")
}  
   } catch (error) {
    console.log(error)
   }finally{
 
    toast.dismiss(toastid);
   }
}


    return(
        <wishlistcontext.Provider value={{
            addproducttowishlst,
            getwishlistproducts,
            wishlist,
            removeProductFromwishlist
            }}>
            {children}
        </wishlistcontext.Provider>
    );}