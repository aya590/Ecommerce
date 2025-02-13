import React, { useEffect, useContext} from 'react'
import { Cartcontext } from '../../context/cart.context'
import Loading from '../../component/loading/loading'
import CartItem from '../../component/cartItem/cartItem'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Cart() {


let {getcartproducts,cart,clearCard}=useContext(Cartcontext)

    useEffect(()=>{
        getcartproducts()
     },[])
  return (
<>
<Helmet>
    <title>
cart
    </title>
  </Helmet>
{cart==null ? <Loading/> :<section >
    <div className='flex items-center gap-3  pt-3'>
    <i className="text-xl text-primary-600 fa-brands fa-opencart"></i>
    <h3 className='text-xl font-semibold  mb-3'>your shopping cart</h3>
    </div>
   
   
   
    {cart.numOfCartItems ===0 ?(<div className='  bg-gray-300 space-y-3 flex flex-col px-5 w-fit rounded-xl py-4 m-auto my-28'>
    <p>Oops! your cart is empity. start shoping now by clicking the button below and find something you love!</p>
    <Link to ="/" className='bg-primary-600 p-2 rounded-lg hover:bg-primary-300 w-fit m-auto'> BACK TO HOME</Link>
   </div>):( <>
     <div className='space-y-4 my-3'>
  {cart.data.products.map((product)=><CartItem key={product._id} productInfo={product}/>)}
    </div>
    <div className=' flex justify-between items-center px-6 py-5 mb-3'>
        <p><i className=" text-primary-600 fa-solid fa-dollar-sign text-lg font-semibold"></i> your total cart price<span className=' ml-2 text-primary-600 font-semibold'>{cart.data.totalCartPrice}</span>
        </p>
        <button onClick={clearCard}
        className='btn bg-red-500 hover:bg-red-300 '><i className="fa-regular fa-trash-can mr-2 "></i>clear cart </button>
    </div>
    <Link 
    to="/CheckOut"
    className='btn bg-primary-600 hover:bg-primary-300 ml-9 '
    >CheckOut</Link>
    </>)
   
   
     }
    </section>}


</>
  )
}
