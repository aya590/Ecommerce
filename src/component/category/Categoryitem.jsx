import React from 'react'

export default function Categoryitem({productInfo,onClick}) {

    const{name,_id,image}=productInfo
  return (
<>
<section  onClick={onClick}
 className=' border hover:shadow-[0_0_12px_8px_rgba(34,197,94,0.2)] rounded-lg transation-shadow duration-500'>
    <div className="image  ">
        <img  className="  w-full  h-80  object-cover" src={image} alt="" />
    </div>
    <div className=' py-8 px-6 '>
    <p className='text-3xl font-bold text-primary-950 text-center'>{name}</p>
    </div>
  
</section>
</>
  )
}
