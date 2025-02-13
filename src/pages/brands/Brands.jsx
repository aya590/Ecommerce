import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../component/loading/loading'
import { Helmet } from 'react-helmet';

export default function Brands() {
const [brands,setbrands]=useState(null)
const [selectedBrand, setSelectedBrand] = useState(null); // لتخزين العلامة التجارية المحددة
  const [isModalOpen, setIsModalOpen] = useState(false); // للتحكم في إظهار المودال
   
  async function getbrands(){
    
          try {
          const  option={
               url:`https://ecommerce.routemisr.com/api/v1/brands`,
               method: "GET",
       
           }
           let{data}=await axios.request(option)
          console.log(data)
          setbrands(data.data)
          } catch (error) {
           console.log(error)
          }
       }

 useEffect
  (() =>{getbrands() },[])


  const openModal = (brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBrand(null);
    setIsModalOpen(false);
  };


  return (
  <>
  <Helmet>
    <title>
    brand
    </title>
  </Helmet>
  <h1 className='text-5xl py-8 font-extrabold text-primary-800 text-center'>All Brands</h1>

  {brands==null? (<Loading /> )

  : (
  <> <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 '>
   {brands.map((brand)=> 
    
    <div key={brand._id} 
    onClick={() => openModal(brand)}
    className='  px-4 py-8 card border hover:shadow-[0_0_12px_8px_rgba(34,197,94,0.2)] rounded-lg transation-shadow duration-500'>
    < div className="image">
        <img src={brand.image} alt="" />
    </div>
    <h3 className='text-center'>{brand.name}</h3>
    </div>
    )} </section> 
     </>)}
   

  {isModalOpen && selectedBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start z-50 overflow-y-scroll">

<div className={`bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mt-10 relative transform transition-all duration-500 ease-in-out ${
              isModalOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}>

            <button
              className="absolute bottom-2 right-2 btn bg-gray-600 hover:bg-gray-500 text-white"
              onClick={closeModal} 
            >
             close
            </button>
            <button
              className="absolute top-1 right-4 text-5xl text-gray-600 hover:text-gray-900 :border-gray-600"
              onClick={closeModal} 
            >
              ×
            </button>
            <div className="border-t-1 border-primary-500 w-full"></div>
            <div className='flex my-10   border-y-2 justify-between items-center'>

                <div>
         <h2 className="text-4xl font-bold text-center text-primary-800 mb-2">
              {selectedBrand.name}
            </h2>
            <p className="text-gray-600 text-center">
              {selectedBrand.name}.
            </p>
           </div>
            <div className="image  ">
              <img
                src={selectedBrand.image}
                alt={selectedBrand.name}
                className="w-50 h-50 object-contain mx-auto"
              />
            </div>

            </div>
           <div className="border-b-1 border-primary-500 w-full"></div>
            
          </div>
        </div>
        
      )}
  </>
  )
}
