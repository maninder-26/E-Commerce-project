import React from "react";
import new_collections from "../assets/NewCollection";
import Items from "../Components/Items/Items";

const NewCollections = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          NEW COLLECTION
        </h1>

        <hr className="w-40 md:w-60 mx-auto mt-3 border-2 border-black rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

          {new_collections.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default NewCollections;