import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favoriteSlice";
import { toggleCart } from "../features/cartSlice";
import { useGetPaginatedProducts } from "../reactQueryHooks/useGetPaginatedProducts";
import debounce from "lodash.debounce";
import { useGetCategoriesData } from "../reactQueryHooks/useCategoriesData";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 10,
  });
  const skip = parseInt(searchParams.get("skip") || 0);
  const limit = parseInt(searchParams.get("limit") || 0);
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );

  const { data: categories } = useGetCategoriesData();

  const { data: products } = useGetPaginatedProducts({
    skip,
    limit,
    q,
    category,
  });

  const handlePaginate = (move) => {
    setSearchParams((prev) => {
      prev.set("skip", Math.max(skip + move, 0));
      return prev;
    });
  };

  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };

  const handleCart = (data) => {
    dispatch(toggleCart(data));
  };

  return (
    <div className="flex">
      <div className="mt-[11rem] ml-10 w-full max-w-40">
        <h1 className="text-xl font-semibold text-blue-950 underline underline-offset-[5px] mb-3">
          Categories
        </h1>
        <div>
          {categories?.map((category, index) => (
            <div key={index} className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                value={category.name}
                checked={selectedCategory === category.name}
                onChange={(e) => {
                  const newCategory = e.target.value;
                  setSelectedCategory((prev) =>
                    prev === newCategory ? "" : newCategory
                  );

                  setSearchParams((prev) => {
                    prev.set("skip", 0);
                    prev.delete("q");

                    if (prev.get("category") === newCategory) {
                      prev.delete("category");
                    } else {
                      prev.set("category", newCategory);
                    }

                    return prev;
                  });
                }}
              />
              <p className="text-gray-500">{category?.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[5rem] md:py-10">
        <h1 className="font-bold text-blue-950 text-xl md:text-3xl">
          E-commerce Accessories & Fashion item
        </h1>
        <div>
          <input
            onChange={debounce((e) => {
              setSearchParams((prev) => {
                prev.set("q", e.target.value);
                prev.set("skip", 0);
                return prev;
              });
            }, 1000)}
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
                  <IoCartOutline
                    size={20}
                    onClick={() => handleCart(product)}
                  />
                  <CiHeart size={20} onClick={() => handleFavorite(product)} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-x-4">
          <button
            onClick={() => handlePaginate(-limit)}
            className="bg-blue-500 rounded px-3 py-1 text-white"
          >
            Prev
          </button>
          <button
            onClick={() => handlePaginate(limit)}
            className="bg-blue-500 rounded px-3 py-1 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
