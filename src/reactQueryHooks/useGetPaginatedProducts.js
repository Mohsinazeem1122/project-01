import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPaginatedProducts = async ({ skip, limit, q }) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`
  );
  return data;
};

export const useGetPaginatedProducts = ({ skip, limit, q }) => {
  return useQuery({
    queryKey: ["products", skip, limit, q],
    queryFn: () => fetchPaginatedProducts({ skip, limit, q }),
    placeholderData: keepPreviousData,
  });
};
