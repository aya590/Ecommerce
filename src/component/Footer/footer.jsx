
import React from 'react';
import amazonpay from "../../assets/images/amazon-pay.png";
import AmericanExpress from "../../assets/images/American-Express-Color.png";
import Mastercard1 from "../../assets/images/mastercard.webp";
import paypal from "../../assets/images/paypal.png";
import applestore from "../../assets/images/get-apple-store.png";
import googleplay from "../../assets/images/get-google-play.png";



export default function Footer() {
  return (
 <div className=" bg-stone-200 px-8 py-4 ">
  <header className=' space-y-2 py-8'>
    <h2 className='  font-bold'>
      Get the FreshCart app
    </h2>
    <p className=' text-stone-400'> we will send you alink, open it in your phone to download tge app </p>
  <div className=' flex justify-center '>
    <input className='form-control mr-2 grow' type='email' placeholder='Email'/>
    <button className=' btn bg-primary-600 hover:bg-primary-400'>Share app link</button>
  </div>
  </header>

  <div className="paying md:flex gap-64 py-8 border-t-2 border-b-2 border-stone-400 ">
  <div className='payment-patener md:flex grid grid-cols-2 align-middle gap-2   '>
  
    <img className='w-24' src={amazonpay} alt="" />
     <img className='w-24' src={AmericanExpress} alt="" />
    <img className='w-24' src={Mastercard1} alt="" />
    <img className='w-24' src={paypal} alt="" />
 
  </div>
<div className="deliveires md:flex   ">
  <p  className=' pt-3'> Get deliveires with FreshCart</p>
  <img className='w-24' src={applestore} alt="" />
  <img className='w-28' src={googleplay} alt="" />
</div>
  </div>
 
 </div>
  )
}



