import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPaginatedProducts = async ({ skip, limit }) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return data;
};

export const useGetPaginatedProducts = ({ skip, limit }) => {
  return useQuery({
    queryKey: ["products", skip, limit],
    queryFn: () => fetchPaginatedProducts({ skip, limit }),
    placeholderData: keepPreviousData,
  });
};
