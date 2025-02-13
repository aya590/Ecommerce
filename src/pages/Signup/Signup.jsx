import React, { useState } from 'react'
import { object, ref, string } from 'yup'
import { useFormik } from 'formik';
import axios  from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Signup() {

  const navigate =useNavigate()
 const [ accontExisting , setaccontExisting ]= useState(null);

async function Senddatatoregister(values) {
   const loadingtoasterid =toast.loading ("waiting...")
  try {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
      method: "post",
      data: values,
    };
    const { data } = await axios.request(options);

   if( data.message== "success"){
    toast.success(' user creat Successfully ');
   setTimeout(() => {
    navigate("/login")
    
   }, (2000));
    
   }
  } catch (error) {
    toast.error(error.response.data.message)
    setaccontExisting (error.response.data.message)
  }finally{
    toast.dismiss(loadingtoasterid)
  }

}
const passwardRegix=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const phoneRegex= /^01[01259][0-9]{8}$/

  const validationSchema = object ({
    name :string().required("Name is required" ).min(3, " Name must be at least 3 characters "). max(25, "Name can not be more than 25 characters"),
    email:string().required("Email is required" ).email( " Email is invalid"),
    password: string().required("password is required"). matches(passwardRegix,"Minimum eight characters at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword: string() .required("confirm is required") .oneOf([ref("password")], "Password and confirm must same"),
    phone: string() .required("phone is required") . matches( phoneRegex,"sorry , we accept Engyption phone only"), 
  })
  
  const formik = useFormik ({ 
    initialValues :{
     name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",

    },
  validationSchema,
  onSubmit:Senddatatoregister,

  })

  return (
    <>
    <Helmet>
      <title>
        Signup
      </title>
    </Helmet>
    <div className=" mx-auto  p-11 ">
    <h1 className='w-fit text-xl font-bold '> <i className=" fa-solid fa-circle-user mr-2"></i>Register</h1>
      <form className=" space-y-2 mt-4  " onSubmit={formik.handleSubmit}> 
        <div>
          <span className= "text-gray-600">name: </span>
          <input className='form-control w-full p-2  ' type='text' placeholder='Enter Your Name '
          onChange={formik.handleChange}
          name ="name"
       value={formik.values.name}
          onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </div>
        <div>
        <span className= "text-gray-600">email: </span>
          <input className='form-control w-full p-2 ' type='Email' placeholder='Enter Your Email '
          onChange={ formik.handleChange}
          value={formik.values.email}
          name ="email"
          onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div>
        <span className= "text-gray-600">password: </span>
          <input className='form-control w-full p-2  '  type='password' placeholder='Enter Your password '
          onChange={ formik.handleChange}
          value={formik.values.password }
          name ="password"
          onBlur={formik.handleBlur}
          />
           {formik.touched.password && formik.errors.password && (
            <p className="text-red-600">{formik.errors.password}</p>
          )}
        </div>
        <div>
        <span className= "text-gray-600">rePassword: </span>
          <input className='form-control w-full p-2 ' type='Password' placeholder='rePassword'
          onChange={ formik.handleChange}
          value={formik.values.rePassword}
          name ="rePassword"
          onBlur={formik.handleBlur}
          />
           {formik.touched.rePassword && formik.errors.rePassword && (
            <p className="text-red-500">{formik.errors.rePassword}</p>
          )}
        </div>
        
        <div>
        <span className= "text-gray-600">phone: </span>
          <input className='form-control w-full p-2 ' type='tel' placeholder='Enter Your phone '
          onChange={ formik.handleChange}
          value={formik.values.phone}
          name ="phone"
          onBlur={formik.handleBlur}
          />
           {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500">{formik.errors.phone}</p>
          )}
        </div>
        <button className='btn bg-primary-700 hover:bg-primary-500 ' type='submit'> Regist</button>
        {accontExisting && <p className="text-red-500 mt-2">{accontExisting}</p>}
      </form>
   
    </div>
      </>

  )
}
