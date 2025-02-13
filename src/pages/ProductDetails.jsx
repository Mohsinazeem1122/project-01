import React from "react";
import { useProductDetailsData } from "../reactQueryHooks/useProductDetailsData";
import { Button } from "@/components/ui/button";

function ProductDetails() {
  const { data } = useProductDetailsData();

  return (
    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-2">
          <div class="shrink-0 max-w-md lg:max-w-md mx-auto border">
            <img class="w-full dark:hidden" src={data?.images[0]} alt="" />
          </div>

          <div class="mt-6 sm:mt-8 lg:mt-0">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {data?.title}
            </h1>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${data?.price}
              </p>
            </div>

            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <Button>Add to favorites</Button>
              <Button variant="primary">Add to cart</Button>
            </div>

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p class="mb-6 text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
