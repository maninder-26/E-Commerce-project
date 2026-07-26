import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Product from '../../Pages/Product';

const Bredcrums = (props) => {
    const {Product} = props;
  return (
    <div className='flex items-center pb-10 gap-3 flex justify-center pr-30 text-gray-600'>
    Home <FaArrowRight /> Shop <FaArrowRight /> {Product.category} <FaArrowRight /> {Product.name} <FaArrowRight />
    


    </div>
  )
}

export default Bredcrums