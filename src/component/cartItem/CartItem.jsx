import React, { useContext } from 'react'
import { Cartcontext } from '../../context/cart.context'
import { Link } from 'react-router-dom'


export default function CartItem({productInfo}) {
  const{ count,price,product}=productInfo
  const{category,id,imageCover,title}=product
  let { removeProductFromCart,upduteProductCount}=useContext(Cartcontext)
  return (
<>
<div  className='flex justify-center items-centenr gap-2'>
  <div className="cartitem p-4 flex grow justify-between  items-center bg-gray-200 rounded-lg">
    <img  className="w-24 h-24 rounded-full object-cover border-4 border-white  " src= {imageCover} alt="" />
    <h3 className=' text-lg text-gray-700 font-semibold line-clamp-1'><Link to= {`/product/${id}`}>{title}</Link> </h3>
    <h4 className=' text-gray-500 font-semibold line-clamp-1'> {category.name} </h4>
    <div className="count flex justify-center items-center gap-3">
    <span className='text-lg'>{count}</span>
    <div className="icons space-y-7">
      <div onClick={()=>{upduteProductCount({productId:id ,count:count+1})}}
      className="h-6 w-6 rounded-full bg-gray-700 cursor-pointer text-white flex justify-center items-center plus">
        <i className='fa-solid fa-plus'></i>
      </div>
      <div  onClick={()=>{upduteProductCount({productId:id ,count:count-1})}}
      className="h-6 w-6 rounded-full bg-gray-700 cursor-pointer text-white flex justify-center items-center  minus">
      <i className='fa-solid fa-minus'></i>
      </div>
    </div>
    </div>
  <span>{price}L</span>
  </div>
  <div  >
  <button onClick = { ()=>{removeProductFromCart({productId:id})}}
  className=' rounded-md p-3 h-32 bg-gray-100 hover:bg-gray-200 transaton-bg duration-100 '>
    <i className="fa-solid fa-xmark"></i>
    </button>
  </div>
  
</div>
</>
  )
}
