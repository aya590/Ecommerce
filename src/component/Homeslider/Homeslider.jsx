import React from 'react'
import sliderImages1 from "../../assets/images/slider-image-1.jpeg"
import sliderImages2 from "../../assets/images/slider-image-2.jpeg"
import sliderImages3 from "../../assets/images/slider-image-3.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Homeslider() {
  return (
  <>
  <section className='grid grid-cols-12 my-11'>
    <div className=' col-span-8'>
<Swiper className='h-full' slidesPerView={1} loop={true}>
    <SwiperSlide  style={{height:"100%"}}>
    <img src={sliderImages3} className='  h-full object-cover' alt="" />
    </SwiperSlide>
    <SwiperSlide style={{height:"100%"}} >
    <img src={sliderImages3} className='  h-full object-cover' alt="" />
    </SwiperSlide>
</Swiper>

    </div>
    <div className='  h-full  col-span-4'>
        <div className="h-1/2">
        <img src={sliderImages1}  className='w-full h-full' alt="" />
        </div>
<div className="h-1/2">
<img src={sliderImages2}  className='w-full h-full' alt="" /> 
</div>
     
    </div>
  </section>
  </>
  )
}
