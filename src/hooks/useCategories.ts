import { useQuery } from "@tanstack/react-query";
import { categories } from "@/api/categoryApi";


export const useCategories = () => {
    return useQuery({
        queryKey : ['categories'],
        queryFn : () => categories()
    })
}