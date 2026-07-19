import { useQuery } from "@tanstack/react-query";
import { getMenus } from "@/api/menuApi";


export const useMenus = (search? : string, category? : string) => {
    return useQuery({
        queryKey : ['menus', search, category],
        queryFn : () => getMenus(search, category)
    })
}   