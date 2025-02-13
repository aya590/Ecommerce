import React from 'react'
import { Helmet } from 'react-helmet'

export default function Resetpassword() {
  return (
<>
<Helmet>
  <title>
  Resetpassword
  </title>
</Helmet>
<h1 className='text-3xl font-bold py-6 mt-2'>
reset your account password    
    </h1>
   
      <input className='form-control w-full py-4' 
      type='email'
       placeholder='email'
       />
       
      <input className='form-control w-full mt-4 py-4' 
      type='email'
       placeholder='email'
       />
       
       
        <button  
 className='border border-green-700 text-green-700  py-3 mt-4 px-2 btn text-xl bg-white hover:bg-green-700 hover:text-white transation-all duration-500'>
  verify</button>
      </>

  )
}
