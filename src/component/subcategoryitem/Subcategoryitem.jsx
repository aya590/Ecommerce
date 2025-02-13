import React from 'react'

export default function Subcategoryitem({subInfo}) {

  const{name}=subInfo
  return (
    <>
    <div>
    
       <div className="card border hover:shadow-[0_0_12px_8px_rgba(34,197,94,0.2)] rounded-lg transation-shadow duration-500">
<p className=' text-3xl font-bold text-center px-4 py-6'>{name}</p>
   </div>
    </div>
   
    </>

  )
}
