import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/User.context'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import Loading from '../../component/loading/loading'
import { Helmet } from 'react-helmet'

export default function Order() {
const{token}=useContext(UserContext)
const[orders,setorder]=useState(null)
let{id}=jwtDecode(token)

async function getUserorder() {
try {
    const option ={
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method :"GET"

    };
    let {data}=await axios.request(option)
    console.log(data)
    setorder(data)
} catch (error) {
    console.log(error)
}
}
  useEffect
  (() =>{getUserorder() },[])



  return (
<>
<Helmet>
    <title>
orders
    </title>
  </Helmet>
{orders?<section className='py-6 mx-12 px-10 my-12  space-y-3'>
  {orders.map((order)=> <div className=' border p-10 rounded-sm' key={order.id}>
   <div className='flex justify-between'>
        <div>
        <p className='font-semibold text-gray-400'> order ID</p>
        <p>#{order.id}</p>
        </div>
        <div>
      {order.ispaid? <span className='bg-green-500 rounded-3xl text-xl px-3 ml-3'>تم الدفع</span>
      : <span className='bg-blue-500 rounded-3xl text-xl px-3 ml-3'>غير مدفوع </span>}

      {order.isDelivered ? <span className='bg-green-500 rounded-3xl text-xl px-3'>نم التوصيل</span>:
      <span className='bg-red-500 rounded-3xl text-xl px-3'>قيد التوصيل</span>
      }
            
        </div>
    </div>
<div className=' cards grid grid-cols-6 py-5'>
   
   {order.cartItems.map((product)=><div  key={product._id} className="card rounded-lg  border  ">
    <div className='  relative'>
    <img  className="" src={product.product.imageCover} alt="" />
  </div>
    <div className="card-body p-4">
        <h3 className=' text-sm font-bold line-clamp-1'>{product.product.title}</h3>
  <p>{product.price}EL</p>
    </div>
  </div>)}

</div>
  <p>your total order price <span className='text-green-500 font-semibold'>{order.totalOrderPrice}</span>LE</p>
   </div>)}
</section> : <Loading/>}

   </> 
 )
}
