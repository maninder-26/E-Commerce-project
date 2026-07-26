import React from 'react'

const Newsletter = () => {
  return (
    <div className='
      flex flex-col items-center justify-center 
      gap-4 
      my-10 
      px-5
      py-12
      bg-gradient-to-b from-orange-100 to-white
    '>

      <h1 className='
        text-2xl 
        sm:text-3xl 
        lg:text-4xl 
        font-bold 
        text-center 
        text-gray-800
      '>
        Get Exclusive Offers On Your Email
      </h1>


      <p className='
        font-semibold 
        text-sm 
        sm:text-lg 
        text-center
        text-gray-900
      '>
        Subscribe To Our Newsletter & Stay Updated
      </p>



      <div className='
        flex 
        flex-col 
        sm:flex-row 
        gap-3
        w-full
        sm:w-auto
      '>

        <input 
        className='
          border 
          border-gray-600 
          py-3 
          px-5
          rounded-3xl
          outline-none
          w-full
          sm:w-80
        ' 
        type="email" 
        placeholder='Your Email Id' 
        />


        <button 
        className='
          px-8 
          py-3 
          bg-black 
          text-white 
          rounded-3xl
          font-semibold
        '>
          Subscribe
        </button>

      </div>

    </div>
  )
}

export default Newsletter