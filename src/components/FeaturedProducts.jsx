import React from "react";
import { useGetProductsData } from "../reactQueryHooks/useProductsData";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const { data: products } = useGetProductsData();

  return (
    <div className="flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[12rem] md:py-10">
      <h1 className="text-center font-bold text-blue-950 text-xl md:text-3xl">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-y-8 md:gap-x-8">
        {products?.products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-lg relative group cursor-pointer h-[20rem]"
          >
            <Link to={`/productDetails/${product.id}`}>
              <div className="border flex justify-center bg-[#f6f7fb] group-hover:bg-[#f7f7f7] rounded-t-lg h-[10rem]">
                <img src={product?.images[0]} alt={product.name} />
              </div>
            </Link>

            <div className="text-center h-[8rem] py-3 gap-1 rounded-b-lg group-hover:bg-blue-950 space-y-2 border">
              <h3 className=" font-semibold group-hover:text-white text-red-500">
                {product.title.length > 20
                  ? `${product.title.substring(0, 20)}...`
                  : product.title}
              </h3>
              <p className="group-hover:text-white text-blue-950 text-sm">
                Brand - {product.brand}
              </p>
              <p className="group-hover:text-white text-blue-950 text-sm">
                ${product.price}
              </p>
              <div className="flex items-center justify-center space-x-2 group-hover:text-white">
                <IoCartOutline size={20} />
                <CiHeart size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
