import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../features/cartSlice";

function Cart() {
  const { cartProducts, message } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (data) => {
    dispatch(toggleCart(data));
  };

  return (
    <div className="container mx-auto px-4">
      {cartProducts?.length > 0 ? (
        <div className="flex justify-center my-16">
          {/* Cart Table */}
          <table className="text-left w-full max-w-3xl">
            <thead>
              <tr className="border-b">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr key={product?.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <button
                          className="absolute right-3 -top-4 bg-red-500 rounded-full text-white text-xs p-1 mt-2"
                          onClick={() => handleRemoveProduct(product)}
                        >
                          X
                        </button>
                        <img
                          className="w-[100px] h-[100px] bg-gray-100 object-cover mr-4"
                          src={product?.images[0]}
                          alt={product?.title}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold">
                          {product.title.length > 20
                            ? `${product.title.substring(0, 15)}...`
                            : product.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {product?.tags[1]}
                        </p>
                        <p className="text-xs text-gray-500">
                          {product?.brand}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">${product?.price}</td>
                  <td className="p-4">1</td>
                  <td className="p-4">${product?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Subtotal Section */}
          <div className="w-full max-w-sm ml-14">
            <h1 className="text-center my-6 text-2xl font-semibold text-[#1D3178]">
              Cart Totals
            </h1>
            <div className="bg-slate-100 p-8 rounded-md">
              <div className="border-gray-400 border-b flex justify-between mb-10">
                <div className="mb-2 font-semibold text-[#1D3178]">
                  Subtotals:
                </div>
                <div className="mb-2 text-[#1D3178]">$219.99</div>
              </div>
              <div className="border-gray-400 border-b flex justify-between mb-5">
                <div className="mb-2 font-semibold text-[#1D3178]">Totals:</div>
                <div className="mb-2 text-[#1D3178]">$325.99</div>
              </div>
              <div className="mt-10">
                <button className="bg-[#19D16F] text-white w-full py-2 rounded-md">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center my-16">
          <h1 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
