import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favoriteSlice";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function Favorite() {
  const { favoriteProducts } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };
  return favoriteProducts.length > 0 ? (
    <div className="mx-28 my-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-blue-900">
          Ecommerce Acceories & Fashion item
        </h1>
      </div>
      <div>
        {favoriteProducts?.map((item) => (
          <div className="flex my-12 shadow rounded p-3" key={item?.id}>
            <div>
              <img className="w-72 bg-gray-100" src={item?.images[0]} alt="" />
            </div>
            <div>
              <div className="p-5 space-y-2">
                <h1 className="font-bold text-blue-900">{item?.title}</h1>
                <div className="flex space-x-2">
                  <p className="font-semibold text-blue-900">${item?.price}</p>
                </div>
                <p className="max-w-md text-[#9295AA]">{item?.description}</p>
                <div className="flex items-center space-x-4 pt-2">
                  <IoCartOutline
                    className="font-semibold text-blue-900"
                    size={22}
                  />
                  <CiHeart
                    size={22}
                    className="font-semibold text-blue-900"
                    onClick={() => handleFavorite(item)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1 className="text-4xl text-center mt-10">No Favorite products</h1>
    </div>
  );
}

export default Favorite;
