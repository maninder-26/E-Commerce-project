import React, { useContext } from "react";
import { ShopingContext } from "../Context/ShopContext";
import { IoMdRemoveCircle } from "react-icons/io";

const CartItems = () => {
  const { all_product, CartItems, removeFromcart } =
    useContext(ShopingContext);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-6 items-center text-center font-semibold border-b pb-4">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div
              key={e.id}
              className="border rounded-xl shadow-sm p-4 my-4 md:border-0 md:shadow-none md:p-0"
            >
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-6 items-center text-center py-5 border-b">

                <img
                  className="h-24 w-20 object-cover rounded mx-auto"
                  src={e.image}
                  alt={e.name}
                />

                <p className="text-sm font-medium">{e.name}</p>

                <p>${e.new_price}</p>

                <button className="border rounded px-4 py-1 mx-auto">
                  {CartItems[e.id]}
                </button>

                <p>${e.new_price * CartItems[e.id]}</p>

                <IoMdRemoveCircle
                  className="text-red-600 text-3xl cursor-pointer mx-auto hover:scale-110 transition"
                  onClick={() => removeFromcart(e.id)}
                />
              </div>

              {/* Mobile */}
              <div className="md:hidden flex gap-4">

                <img
                  className="w-24 h-24 rounded object-cover"
                  src={e.image}
                  alt={e.name}
                />

                <div className="flex-1">

                  <h2 className="font-semibold text-sm">
                    {e.name}
                  </h2>

                  <p className="mt-2">
                    Price :
                    <span className="font-semibold">
                      ${e.new_price}
                    </span>
                  </p>

                  <p>
                    Qty :
                    <span className="font-semibold">
                      {CartItems[e.id]}
                    </span>
                  </p>

                  <p>
                    Total :
                    <span className="font-semibold">
                      ${e.new_price * CartItems[e.id]}
                    </span>
                  </p>

                  <button
                    onClick={() => removeFromcart(e.id)}
                    className="mt-3 flex items-center gap-2 text-red-600 font-semibold"
                  >
                    <IoMdRemoveCircle className="text-2xl" />
                    Remove
                  </button>

                </div>

              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default CartItems;