import { useFormik } from 'formik';
import * as Yup from 'yup'; // لإضافة الـ validation
import React, { useContext, useState } from 'react';
import { Cartcontext } from '../../context/cart.context';
import { UserContext } from '../../context/User.context';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function CheckOut() {
  const [payment,setpayment]=useState(null)
  const { cart } = useContext(Cartcontext);
  console.log(cart)
  const { token } = useContext(UserContext);
  const navigate =useNavigate()
// cash order
  async function cashorder(values) {
    try {
      const option = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cart.cartId}`,
        method: 'POST',
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(option);
      console.log(data)
      if (data.status== "success"){
     
        setTimeout(() => {
          navigate("/allorder")
          
         }, (2000));
       }
    } catch (error) {
      console.log(error);
    }
  }

  // online order
  async function onlineorder(values) {
    try {
      const option = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=${location.origin}`,
        method: 'POST',
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(option);
      console.log(data)
      if (data.status== "success"){
toast.loading("redirecting to stripe")
        setTimeout(() => {
       location.href=data.session.url
          
         }, 2000);
       }
    } catch (error) {
      console.log(error);
    }
  }

  const validationSchema = Yup.object({
    shippingAddress: Yup.object({
      details: Yup.string()
        .required('Details are required'),
   
      phone: Yup.string()
        .required('Phone is required')
        .matches(/^01[0125][0-9]{8}$/, 'Phone must be a valid Egyptian number'),
      city: Yup.string().required('City is required').min(3, 'Details must be at least 3 characters'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: '',
        phone: '',
        city: '',
      },
    },
    validationSchema, 
    onSubmit: (values)=>{
      if( payment=="cash")cashorder(values);
      else onlineorder(values)
    }
  });

  return (
    <>
    <Helmet>
    <title>
    CheckOut
    </title>
  </Helmet>
      <section>
        <form className="py-14 px-10 space-y-4" onSubmit={formik.handleSubmit}>
          {/* City Input */}
          <div className="city">
            <input
              className="form-control w-full"
              type="text"
              placeholder="city"
              value={formik.values.shippingAddress.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingAddress.city"
            />
            {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city && (
              <p className="text-red-500">{formik.errors.shippingAddress.city}</p>
            )}
          </div>

          {/* Phone Input */}
          <div className="phone">
            <input
              className="form-control w-full"
              type="tel"
              placeholder="phone"
              value={formik.values.shippingAddress.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingAddress.phone"
            />
            {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone && (
              <p className="text-red-500">{formik.errors.shippingAddress.phone}</p>
            )}
          </div>

          {/* Details Input */}
          <div className="details">
            <textarea
              className="form-control w-full"
              placeholder="details"
              value={formik.values.shippingAddress.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="shippingAddress.details"
            />
            {formik.errors.shippingAddress?.details && formik.touched.shippingAddress?.details && (
              <p className="text-red-500">{formik.errors.shippingAddress.details}</p>
            )}
          </div>
          <button
  className={`btn font-semibold py-2 mr-4 ${
    formik.isValid && formik.dirty
      ? "bg-blue-500 hover:bg-blue-300"
      : "bg-blue-100"
  }`}
  type="submit"
  onClick={() => {
    setpayment("cash")
  }
  }
  disabled={!(formik.isValid && formik.dirty)} // تأكد أن الزر يتوقف عن العمل إذا كانت المدخلات غير صحيحة
> CASH ORDER
</button>

<button
  className={`btn font-semibold py-2 ${
    formik.isValid && formik.dirty
      ? "bg-lime-500 hover:bg-lime-300"
      : "bg-lime-100 cu"
  }`}
  type="submit"
  onClick={() => {
    setpayment("online")
  }
  }
  disabled={!(formik.isValid && formik.dirty)}
>
  Online payment
</button>
        </form>
      </section>
    </>
  );
}
