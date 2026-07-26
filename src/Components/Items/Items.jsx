import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">

      <Link to={`/Product/${props.id}`}>
        <div className="w-full h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            src={props.image}
            alt={props.name}
          />
        </div>
      </Link>

      <div className="p-3 flex flex-col flex-grow">
        <p className="font-semibold text-sm sm:text-base line-clamp-2 min-h-[48px]">
          {props.name}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-lg font-bold text-black">
            ${props.new_price}
          </span>
          <span className="text-gray-500 line-through">
            ${props.old_price}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Items;