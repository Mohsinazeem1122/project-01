import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPaginatedProducts = async ({ skip, limit, q, category }) => {
  let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`;

  if (category) {
    const categories = category.split(","); // Handle multiple categories
    url = `https://dummyjson.com/products/category/${categories[0]}?limit=${limit}&skip=${skip}`;
    // Note: API only supports one category at a time. Need a custom backend for multiple categories.
  }

  const { data } = await axios.get(url);
  return data;
};

export const useGetPaginatedProducts = ({ skip, limit, q, category }) => {
  return useQuery({
    queryKey: ["products", skip, limit, q, category],
    queryFn: () => fetchPaginatedProducts({ skip, limit, q, category }),
    placeholderData: keepPreviousData,
  });
};
