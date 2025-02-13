import React, { useState,useContext } from 'react'
import { object, ref, string } from 'yup'
import { useFormik } from 'formik';
import axios  from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from "../../context/User.context"
import { Helmet } from 'react-helmet';


export default function Login() {


  let  {setToken} =useContext(UserContext)

  const navigate =useNavigate()
 const [ incorroctemail , setincorroctemail]= useState(null);

async function Senddatatologin(values) {
  const loadingtoasterid =toast.loading ("waiting...")
  try {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
      method: "post",
      data: values,
    };
    const { data } = await axios.request(options);
    console.log("Response from server:", data);
   if (data.message== "success"){
    localStorage.setItem("token", data.token);
    setToken(data.token);
    toast.success("welcome ");
    
    setTimeout(() => {
      navigate("/")
      
     }, (2000));
   }
  } catch (error) {
    console.log( error)
    setincorroctemail(error.response.data.message)
  }finally{
    toast.dismiss(loadingtoasterid)
  }

}
const passwardRegix=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

const validationSchema = object ({

  email:string().required("Email is required" ).email( " Email is invalid"),
  password: string().required("password is required"),

})
  
  const formik = useFormik ({ 
    initialValues :{
 
    email:"",
    password:"",
    

    },
 
  onSubmit:Senddatatologin,
  validationSchema,
  })

  return (
    <>
    <Helmet>
    <title>
   Login
    </title>
  </Helmet>
    <div className=" mx-auto py-20  ">
    <h1 className='w-fit text-3xl font-bold mb-2 '> Login now</h1>
      <form className=" space-y-2 mt-4  " onSubmit={formik.handleSubmit}> 
        
        <div>
        <span className='text-gray-700'>Email: </span>
          <input className='form-control w-full p-2 ' type='Email' placeholder='Enter Your Email '
          onChange={ formik.handleChange}
          value={formik.values.email}
          name ="email"
          onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 p-4 border bg-red-200 rounded-md mt-2 ">{formik.errors.email}</p>
          )}
        </div>
        <div className='mb-6'>
        <span className='text-gray-700'>Password: </span>
          <input className='form-control w-full p-2  '  type='password' placeholder='Enter Your password '
          onChange={ formik.handleChange}
          value={formik.values.password }
          name ="password"
          onBlur={formik.handleBlur}
          />
           {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 p-4 border bg-red-200 rounded-md mt-2">{formik.errors.password}</p>
          )}
          {incorroctemail && 
            <p className="text-red-500 p-4 border bg-red-200 rounded-md mt-2">*{incorroctemail}</p>}
            
        </div>
        
        <div className='flex py-5 justify-between  items-center'>
        <button className='btn mr-auto bg-primary-700 hover:bg-primary-500 ' type='submit'> Login now</button>
        <Link  to = "/forgetpassward" className='font-semibold md:text-2xl hover:text-primary-800 transation-text duration-500'>forget your password ?</Link>
        
    
   
        </div>
       
   
      </form>
     
    </div>
      </>

  )
}


