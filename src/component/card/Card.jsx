import React,{useContext, useEffect, useState} from 'react'
import googleplay from "../../assets/images/get-google-play.png";

import { Cartcontext } from '../../context/cart.context';
import { Link, useNavigate } from 'react-router-dom';
import { wishlistcontext } from '../../context/wishlist.context';



export default function Card({ProductInfo}) {

  let {addproducttowishlst, wishlist, removeProductFromwishlist}=useContext(wishlistcontext)
  const navigate =useNavigate()
  function navigatetoproductdetails() {
   
    
      navigate (`/product/${ProductInfo.id}`)
      
     ;
    }
    
  const {imageCover,title,price,description,category,id}=ProductInfo
 let {addProducttocard } =useContext(Cartcontext)

 const [isInWishlist, setIsInWishlist] = useState(false);



 useEffect(() => {

  setIsInWishlist(wishlist?.some((product) => product._id === id));
}, [wishlist, id]);



const toggleWishlist = async () => {
  if (!isInWishlist) { 
    await addproducttowishlst({ productId: id });
  }
};


  return (
   <>
   <div
   className="card group/card rounded-lg overflow-hidden shadow-md">
    <div className='  relative'>
    <img  className="w-full" src={imageCover} alt="" />
    <div className="layer group-hover/card:opacity-100 transation-opacity duration-500 flex justify-center items-center gap-3 absolute left-0 right-0 top-0 bottom-0 bg-slate-400 bg-opacity-30 opacity-0 ">
      {/* <div onClick={
        ()=>{ addproducttowishlst({productId :id})}}
      className="icon flex justify-center items-center h-8 w-8 rounded-full bg-primary-500 text-white">
      <i className=' cursol-pointer fa-solid fa-heart '></i>
      </div> */}


<div
  onClick={toggleWishlist}
  className="icon flex justify-center items-center h-8 w-8 rounded-full bg-primary-500 text-white cursor-pointer"
>
  <i className={`fa-solid fa-heart ${isInWishlist ? 'text-red-500' : 'text-white'}`}></i>
</div>

      <div onClick={
        ()=>{ addProducttocard({productId :id})}}
      className="icon flex justify-center items-center h-8 w-8 rounded-full bg-primary-500 text-white">
      <i className=' cursol-pointer fa-solid fa-cart-shopping '></i>
      </div>
      <div onClick={navigatetoproductdetails}
       className="icon flex justify-center items-center h-8 w-8 rounded-full bg-primary-500 text-white">
      <i className=' cursol-pointer fa-solid fa-eye '></i>
      </div>
    </div>
    </div>
  
    <div onClick={navigatetoproductdetails}
     className="card-body p-4">
        <h3 className=' text-sm font-bold line-clamp-1'>{title}</h3>
        <h4 className='text-primary-600'>{category.name}</h4>
        <p className='line-clamp-1 text-gray-400 '>{description}</p>
   <div className='flex  justify-between items-center gap-4'>
    <span className=' text-xs'>{price} LE</span>
    <div >
        <i className=' text-yellow-300 fa-solid fa-star '></i>
        <span  className=' text-sm' >4.8</span>
    </div>
   </div>
    </div>
   </div>
   </>
  )
}
