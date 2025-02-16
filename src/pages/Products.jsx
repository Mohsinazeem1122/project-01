import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useGetProductsData } from "../reactQueryHooks/useProductsData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favoriteSlice";
import Categories from "../components/Categories";

function Products() {
  const { data: products } = useGetProductsData();
  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };

  return (
    <div className="flex">
      <Categories />
      <div className="flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[5rem] md:py-10">
        <h1 className="font-bold text-blue-950 text-xl md:text-3xl">
          E-commerce Accessories & Fashion item
        </h1>
        <div>
          <input
            type="text"
            className="w-full outline-none rounded p-1 border"
            placeholder="Search product..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-y-8 md:gap-x-5">
          {products?.products?.map((product) => (
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
                <h3 className="font-semibold group-hover:text-white text-red-500">
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
                  <CiHeart size={20} onClick={() => handleFavorite(product)} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex gap-2">
        <button
          className="bg-purple-500 px-4 py-1 text-white rounded"
          onClick={() => {
            handlePaginate(-limit);
          }}
        >
          Prev
        </button>
        <button
          className="bg-purple-500 px-4 py-1 text-white rounded"
          onClick={() => {
            handlePaginate(limit);
          }}
        >
          Next
        </button>
      </div> */}
      </div>
    </div>
  );
}

export default Products;
