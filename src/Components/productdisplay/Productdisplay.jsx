import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa"
import { FaStarHalfAlt } from "react-icons/fa";
import { ShopingContext } from '../../Context/ShopContext';

const Productdisplay = ({Product}) => {

  const {addtocart} = useContext(ShopingContext)

  return (
    <div className='flex flex-col lg:flex-row gap-8 px-5 lg:px-10 py-8'>

      {/* Images Section */}
      <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-1/2'>

        <div className='flex sm:flex-col gap-3'>
          <img 
          className="h-20 w-20 sm:h-24 sm:w-24 border object-cover" 
          src={Product.image} 
          alt="" />

          <img 
          className="h-20 w-20 sm:h-24 sm:w-24 border object-cover" 
          src={Product.image} 
          alt="" />

          <img 
          className="h-20 w-20 sm:h-24 sm:w-24 border object-cover" 
          src={Product.image} 
          alt="" />
        </div>


        <div className="w-full">
          <img 
          className='w-full h-[350px] sm:h-[450px] object-cover border border-black' 
          src={Product.image} 
          alt="" />
        </div>

      </div>



      {/* Product Details */}

      <div className='w-full lg:w-1/2'>

        <h1 className='font-bold text-2xl sm:text-3xl'>
          {Product.name}
        </h1>


        <div className='flex items-center pt-2 gap-2'>

          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
          <FaStarHalfAlt className='text-yellow-500'/>

          <h1 className='font-semibold text-sm'>
            (130)
          </h1>

        </div>



        <div className='flex gap-5 py-3 items-center'>

          <h1 className='line-through text-gray-500 font-semibold'>
            ${Product.old_price}
          </h1>

          <h1 className='text-red-500 text-2xl font-semibold'>
            ${Product.new_price}
          </h1>

        </div>



        <p className='font-semibold text-sm leading-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Quibusdam eligendi, reiciendis animi error alias.
        </p>



        <div className='pt-5'>

          <h1 className='font-semibold text-gray-700'>
            Select Size
          </h1>


          <div className='flex flex-wrap gap-3 pt-4'>

            {
              ["S","M","L","XL","XXL"].map((size)=>(
                <div 
                key={size}
                className='border border-gray-500 px-5 py-2 cursor-pointer'>
                  {size}
                </div>
              ))
            }

          </div>

        </div>



        <button 
        onClick={()=>addtocart(Product.id)}
        className='mt-6 bg-orange-500 text-white font-semibold py-3 w-full sm:w-72 rounded'>
          ADD TO CART
        </button>



        <div className='font-semibold text-sm pt-5'>
          Category: Women, Mens, Kids, T-Shirt, Crop Top
        </div>


        <div className='font-semibold text-sm pt-2'>
          Tags: Modern, Latest, Crop Trend
        </div>


      </div>

    </div>
  )
}

export default Productdisplay