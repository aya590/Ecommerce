import React, { useEffect, useState } from 'react'
import Categoryitem from '../../component/category/Categoryitem'
import axios from 'axios'
import Loading from '../../component/loading/loading'
import Subcategoryitem from '../../component/subcategoryitem/subcategoryitem'
import { Helmet } from 'react-helmet'

export default function Categories() {

const [category,setcategory]=useState(null)
const [subcategory,setsubcategory]=useState([])
const [selectedCategoryName, setSelectedCategoryName] = useState('');
// get category
async function getcategory(){
   try {
   const  option={
        url:"https://ecommerce.routemisr.com/api/v1/categories",
        method: "GET",

    }
    let{data}=await axios.request(option)
    setcategory(data)
    console.log(data.data)
   } catch (error) {
    console.log(error)
   }
}
// get subcategory

async function getsubcategory(productId , productName){
  setSelectedCategoryName(productName);
    try {
    const  option={
         url:`https://ecommerce.routemisr.com/api/v1/categories/${productId}/subcategories`,
         method: "GET",
 
     }
     let{data}=await axios.request(option)
     setsubcategory(data.data)
     console.log('Subcategories:', data.data)

    } catch (error) {
     console.log(error.request)
    }
 }


  useEffect
  (() =>{getcategory() },[])


  return (
   <>
    <Helmet>
    <title>
    categories
    </title>
  </Helmet>
  {category == null ? (
        <Loading />
      ) : (
        <div   
        className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-10'>
          {category?.data?.map((product) => (

<div key={product._id}>

<Categoryitem
  onClick={() => getsubcategory(product._id ,product.name)}
  productInfo={product}
/>
</div>
            
          ))}
          
        </div>
      )}

{subcategory.length > 0 && (
        <>
          <h1 className='text-3xl font-bold text-primary-950 text-center py-10'>
     {selectedCategoryName} Subcategories
          </h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-10'>
            {subcategory.map((sub) => (



              <Subcategoryitem key={sub._id} subInfo={sub} />
            ))}
          </div>
        </>
      )}
    </>
  )
}



  