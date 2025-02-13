
import React, { useContext, useEffect } from 'react'
import { wishlistcontext } from '../../context/wishlist.context'
import Loading from '../../component/loading/loading'
import { Cartcontext } from '../../context/cart.context';
import { Helmet } from 'react-helmet';




export default function WishList() {

let{getwishlistproducts,removeProductFromwishlist ,wishlist}=useContext(wishlistcontext);
let {addProducttocard} =useContext(Cartcontext)



  useEffect(()=>{
    getwishlistproducts()
     },[])

  return (
   <>
<Helmet>
  <title>
  WishList
  </title>
</Helmet>

   <section className='my-12 bg-gray-100  py-10 px-14'>
    <h1 className='font-bold text-3xl mb-4'>
    My wish List
    </h1>
    {wishlist==null?<Loading/>: wishlist.map(({ id, title, price, imageCover })=> <div key={id}  className='flex justify-between items-center  mb-10 border-b-2 pb-4'>
    <div className="card md:flex mr-4 justify-center items-center gap-6">
        <img className='w-40 object-cover' src= {imageCover}alt="" />
        <div className="body space-y-2 ">
      <p className='font-bold'>{title}</p>
      <p className='font-bold  text-primary-700'>{price}EGP</p>
      <p onClick = { ()=>{removeProductFromwishlist({productId:id})}}
      className='text-sm  text-red-600 '><i className="fa-regular fa-trash-can cursol-pointe  "></i> Remove</p>
    </div>
    </div>
    
    <div>
      <button onClick={ ()=>{ addProducttocard({productId :id})}} 
       className="btn border border-primary-600 bg-transparent hover:bg-white 
       py-2 px-4 text-sm sm:text-base md:text-lg lg:text-xl 
       w-full sm:w-auto rounded-md transition-all duration-300"> add to cart</button>
    </div>
    </div>)}
   
   </section>

   </>
  )
}
