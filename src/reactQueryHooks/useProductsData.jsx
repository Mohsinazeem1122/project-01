import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("http://dummyjson.com/products");
  return data;
};

export const useGetProductsData = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
