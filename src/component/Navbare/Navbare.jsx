import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink } from "react-router-dom";
import {UserContext} from "../../context/User.context";
import { Cartcontext } from '../../context/cart.context';
import { Link } from "react-router-dom";


export default function () {
  let {getcartproducts,cart}=useContext(Cartcontext)
  let  {token, logOut} =useContext(UserContext)
  const [Open, setOpen] = useState(false);
  useEffect(()=>{
    getcartproducts()
 },[])
  return (
    <>
  
    <nav  className=' bg-stone-200  w-full fixed  top-0 left-0 right-0 z-50  md:flex md:justify-between  px-10 md:items-center py-4  shadow-sm'>
       
            <a className=' mr-6' href='' >
                <img src= {logo} alt=" logo" />
            </a>

           <div onClick={()=> setOpen(!Open)}
            className='absolute right-8 top-5 cursor-pointer text-2xl md:hidden '>
              {Open ? <i class="fa-solid fa-xmark "></i> :<i class="fa-solid  fa-bars"></i>}
         
           </div>
        


{token&&<> <ul    className= {`md:flex  md:gap-3  md:space-y-0 space-y-2  md:mb-0 mb-3 gap-6 items-center transition-all duration-500 ${ Open ? 'block':'hidden' } `} >
         

                <li>
                    <NavLink className={({ isActive }) =>
  `relative mb-0! mt-[8px]! text-center before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}
  to ="/">home</NavLink>
</li>
<li>
<NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500  ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}
  to ="/WishList">whish list</NavLink>

                </li>
                <li>
                    <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                    to="/Products">products</NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                to="/Categories">categories</NavLink>

                </li>
                <li>
                    <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                    to="/brands">brands</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                    to="/allorders">order </NavLink>
                </li>
            </ul>
            
            </>}

            <ul className= {`hidden xl:flex  gap-6 justify-center items-center md:hidden sm:hidden mr-6 ml-4 ${ !token && "ms-auto"}`}>
                <li>
                <a href='https://instagram.com' target='_blank'>
                <i className="fa-brands text-red-400 fa-instagram"></i>
                </a>
                </li>

                <li>
                <a href='https://facebook.com' target='_blank'>
                <i className="fa-brands text-blue-700 fa-facebook"></i>
                </a>
                </li>

                <li>
                <a href='https://tiktok.com' target='_blank'>
                <i className="fa-brands fa-tiktok"></i>
                </a>
                </li>

                <li>
                <a href='https://twitter.com' target='_blank'>
                <i className="fa-brands text-blue fa-twitter"></i>
                </a>
                </li>

                <li>
                <a href='https://linkedin.com' target='_blank'>
                <i className="fa-brands text-blue-700 fa-linkedin"></i>
                </a>
                </li>

                <li>
                <a href='https://youtube.com' target='_blank'>
                <i className="fa-brands text-red-600 fa-youtube"></i>
                </a>
                </li>
            </ul>
            <ul className=  {`md:flex  gap-6 justify-center items-center  ${ Open ? 'block':'hidden' } `}> 
            
            {!token &&<><li>
                   <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                    to='/login'> login</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
  `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-600 before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-500 ${
    isActive ? "before:w-full font-semibold" : ""
  }`
}

                    to='/signup'> signup</NavLink>
                </li></>}
               {token&&(<> <li><Link  to ="/cart" className="cart-container  pt-1 relative   ">
<i className="fa-solid text-center  fa-cart-shopping cursor-pointer   "></i>
<div className="cart-counter h-4 w-4 rounded-full flex justify-center items-center bg-primary-900 absolute -right-1 -top-1 ">
{cart==null?
(<i className='fa-solid fa-spinner fa-spin'></i>):
( <span className='text-sm font-semibold'>
{cart.numOfCartItems}</span>)}
</div>
</Link ></li>


                <li onClick={logOut}>
       <a>
       <i className="fa-solid fa-right-to-bracket  "></i>
       </a>
                  
                
                </li></>)}
            </ul>
           
    </nav>




    </>
  )
} 




