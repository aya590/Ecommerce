
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Forgetpassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");  
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  async function sendemail() {
   try {
    if (!email) {
      setError('Please enter your email!'); 
      return;
    }
     const options = {
       url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
       method: "post",
       data: {
        email:email,
    }
     };
     const { data } = await axios.request(options);
     setMessage('Verification email sent successfully!');
      setError(''); 
      setStep(2);
 
    console.log(data)
   } catch (error) {
 console.log(error)
 setMessage('');
      setError('Failed to send email. Please try again.');
   }
 
 }

 async function sendCode() {
  try {
    if (!resetCode) {
      setError('Please enter the verification code!'); 
      return;
    }
   
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      method: "post",
      data: {
        resetCode:resetCode,
   }
    };
    const { data } = await axios.request(options);
    
    setError('');
   console.log(data)
   setStep(3);
  
  } catch (error) {
console.log(error)
setMessage('');
setError('Invalid verification code. Please try again.');

  }

}

async function resetPassword() {
  try {
    if (!newPassword) {
      setError("Please enter your new password!");
      return;
    }


    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      method: "PUT",
      data: {
        email:email,
        newPassword: newPassword,
      },
    };
    const { data } = await axios.request(options);
    setMessage("Password reset successfully!");
    setError("");
    console.log(data);
    setTimeout(() => {
      setStep(1);
      setEmail("");
      setResetCode("");
      setNewPassword("");  
      navigate("/"); 
    }, 2000);
  } catch (error) {
    console.log(error.request);
    console.log(error.response);
    setMessage("");
    setError("Failed to reset password. Please try again.");
  }
}



return (
  <div>
    <Helmet>
    <title>
    Forgetpassword
    </title>
  </Helmet>
  <h1 className='text-3xl font-bold py-6 mt-2'>

      {step === 1
          ? "Please enter your email"
          : step === 2
          ? "Enter Verification Code"
          : "reset your account password "}
    </h1>
    {step === 1 && (
      <>
      <input className='form-control w-full py-4' 
      type='email'
       placeholder='Email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
       
       
        <button   onClick={sendemail}
 className='border border-green-700 text-green-700  py-3 mt-4 px-2 btn text-xl bg-white hover:bg-green-700 hover:text-white transation-all duration-500'>
  verify</button>
      </>
    )}

    {/* المرحلة الثانية: إدخال الكود */}
    {step === 2 && (
      <>
      <input className='form-control w-full py-4' 
      type='text'
       placeholder='code'
          value={resetCode}
          onChange={(e) => setResetCode(e.target.value)}
        />
        <button
          onClick={sendCode}
          className='border border-green-700 text-green-700  py-3 mt-4 px-2 btn text-xl bg-white hover:bg-green-700 hover:text-white transation-all duration-500'>
          verify</button>
      </>
    )}
 {step === 3 && (
        <>
         
         <input
  className="form-control w-full py-4"
  type="email"
  placeholder="Email"
  value={email}  // تأكد من استخدام email في هذا الحقل
  onChange={(e) => setEmail(e.target.value)}
/>



          <input
            className="form-control w-full py-4 mt-4"
            type="password"
            placeholder=" New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />


       

          <button
            onClick={resetPassword}
            className="border border-green-700 text-green-700 py-3 mt-4 px-2 btn text-xl bg-white hover:bg-green-700 hover:text-white transition-all duration-500"
          >
            Reset Password
          </button>
        </>
      )}

    {/* عرض الرسائل */}
    {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
    {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
  </div>
);
}
