import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
};

export const useGetCategoriesData = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
