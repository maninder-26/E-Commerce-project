import React, { useContext, useEffect } from "react";
import { ShopingContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Productdisplay from "../Components/productdisplay/Productdisplay";
import Bredcrums from "../Components/bredcrums/Bredcrums";
import Description from "../Components/Description/Description";

const Product = () => {
  const { all_product } = useContext(ShopingContext);
  const { ProductId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = all_product.find(
    (item) => item.id === Number(ProductId)
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-xl font-semibold">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <Bredcrums Product={product} />
      <Productdisplay Product={product} />
      <Description />
    </div>
  );
};

export default Product;