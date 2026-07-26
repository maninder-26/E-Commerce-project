import React from "react";
import data_product from "../../assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-100 to-white py-12 px-4">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          POPULAR IN WOMEN
        </h1>

        <hr className="w-40 md:w-60 mx-auto mt-3 border-2 border-black rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

          {data_product.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Popular;