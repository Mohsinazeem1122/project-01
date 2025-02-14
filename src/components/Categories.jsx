import React from "react";
import { useGetCategoriesData } from "../reactQueryHooks/useCategoriesData";

function Categories() {
  const { data: categories } = useGetCategoriesData();

  return (
    <div className="mt-[11rem] ml-10 w-full max-w-40">
      <h1 className="text-xl font-semibold text-blue-950 underline underline-offset-[5px] mb-3">
        Categories
      </h1>
      <div>
        {categories?.map((category, index) => (
          <div key={index} className="flex items-center space-x-2 ">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-500">{category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
