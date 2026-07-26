import React, { useContext } from "react";
import { ShopingContext } from "../Context/ShopContext";
import { IoMdArrowDropdown } from "react-icons/io";
import Items from "./Items/Items";

const Shopcategory = (props) => {

  const { all_product } = useContext(ShopingContext);

  return (
    <div>

      {/* Banner */}
      <div className="flex justify-center px-5 lg:px-0">
        <img  
          className="
            w-full 
            lg:w-[80%] 
            h-[180px]
            sm:h-[250px]
            lg:h-[300px]
            object-cover  
            rounded-lg
          " 
          src={props.banner} 
          alt="" 
        />
      </div>

      {/* Sort Section */}
      <div className="flex justify-center pt-5">
        <div className="
          flex 
          flex-col
          sm:flex-row
          justify-between 
          items-center
          gap-4
          w-full
          lg:w-[80%]
          px-5
          lg:px-0
          pt-5
        ">
          <p className="font-semibold text-sm sm:text-base">
            <span>Showing 1-12 </span>
            Out Of 36 Products
          </p>

          <div className="
            flex 
            items-center 
            gap-1 
            border 
            border-black 
            px-4 
            py-2 
            rounded-3xl
            cursor-pointer
          ">
            Sort by 
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
        mt-8
        px-5
        lg:px-[10%]
      ">
        {
          all_product.map((item, i)=>{
            if(props.category === item.category){
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              )
            }
            return null;
          })
        }
      </div>

      {/* Button */}
      <div className="
        flex 
        justify-center 
        pt-10 
        pb-12
      ">
        <button className="
          bg-gray-500 
          text-white 
          px-8
          sm:px-10
          py-2 
          text-lg
          sm:text-xl
          rounded-3xl
        ">
          Explore More
        </button>
      </div>

    </div>
  );
};

export default Shopcategory;