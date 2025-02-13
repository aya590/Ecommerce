import axios from 'axios'
import React, { useContext, useEffect,useRef } from 'react'
import { useState } from 'react'
import Loading from '../../component/loading/loading'
import { useParams } from 'react-router-dom';
import { Cartcontext } from '../../context/cart.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation'; 
import { Helmet } from 'react-helmet';


export default function ProductDetails() {
    const swiperRef = useRef(null); 
    const[ProductDetails,setProductDetails]=useState(null);
    let {id}=useParams();

let {addProducttocard} =useContext(Cartcontext)

async function  getproductDetails() {
    const option ={
        url:`https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method : "GET"
    }
    const {data}=await axios.request(option)
    console.log(data)
    setProductDetails(data.data) 
}

  useEffect
  (() =>{getproductDetails() },[])



  return (<>
  <Helmet>
    <title>
ProductDetails
    </title>
  </Helmet>
{ProductDetails?(<>
  <Helmet>
    <title>
    {ProductDetails.title}
    </title>
  </Helmet>

    <section className=' py-12 md:grid md:grid-cols-12 gap-8'>
        <div className="image   md:col-span-3">

        <Swiper
  slidesPerView={1}
  loop={true}
  ref={swiperRef}
  
>
  {ProductDetails.images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className='h-64'>
        <img className="w-full h-full object-cover" src={image} alt={`product-image-${index}`} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>



<div className="flex justify-between mt-4">
              <button
                className=" bg-stone-400 text-white px-[4px] py-[4px] rounded-sm "
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
         
              </button>
              <button
                className=" bg-stone-400 text-white p-2 rounded-sm px-[4px] py-[4px]  "
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
            
              </button>
            </div>
        </div>
        <div className="body col-span-9 flex flex-col justify-center  space-y-4">
            <h2 className=' text-2xl font-bold'>{ProductDetails.category.name}</h2>
            <p>{ProductDetails.description}</p>
            <div className='flex justify-between pr-40 '>
                <span className='text-primary-600'>{ProductDetails.price}</span>
                <div>
                <i className=' mr-2 text-yellow-300 fa-solid fa-star '></i>
                <span >{ProductDetails.ratingsAverage}</span>
                </div>
            </div>
            <div className=' mt-80'>
                    <button onClick={ ()=>{ addProducttocard({productId :id})}}
                    className='btn   bg-primary-900 md:px-52 hover:bg-primary-700'>+ Add</button>
                    <i className='  ml-28 md:ml-48 text-4xl text-primary-950 fa-solid fa-heart '></i>
                </div>
        </div>
    </section></>)
    :<Loading/>}
    </>
  )
}
