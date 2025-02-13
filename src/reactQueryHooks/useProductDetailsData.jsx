import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchProduct = async (productId) => {
  if (!productId) return null; // Handle the case where productId is undefined
  const { data } = await axios.get(
    `https://dummyjson.com/products/${productId}`
  );
  return data;
};

export const useProductDetailsData = () => {
  const { productId } = useParams();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId, // Ensures the query runs only if productId exists
  });
};
