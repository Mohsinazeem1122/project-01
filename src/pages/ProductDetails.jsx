import React from "react";
import { useProductDetailsData } from "../reactQueryHooks/useProductDetailsData";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useFirebase } from "../firebase/firebaseContext";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../features/favoriteSlice";
import { toggleCart } from "../features/cartSlice";

function ProductDetails() {
  const { data } = useProductDetailsData();

  const dispatch = useDispatch();
  const { isLoggedIn } = useFirebase(); // Get authentication status
  const navigate = useNavigate();

  const handleFavorite = (data) => {
    if (!isLoggedIn) navigate("/login");
    dispatch(toggleFavorite(data));
  };

  const handleCart = (data) => {
    if (!isLoggedIn) navigate("/login");
    dispatch(toggleCart(data));
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-2">
          <div className="shrink-0 max-w-md lg:max-w-md mx-auto border">
            <img className="w-full dark:hidden" src={data?.images[0]} alt="" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {data?.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${data?.price}
              </p>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <Button onClick={() => handleFavorite(data)}>
                Add to favorites
              </Button>
              <Button variant="primary" onClick={() => handleCart(data)}>
                Add to cart
              </Button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
