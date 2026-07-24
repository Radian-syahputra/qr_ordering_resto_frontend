import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "@/api/orderApi";


export const useOrder = (id : string) => {
    return useQuery({
        queryKey : ['order', id],
        queryFn : () =>  getOrderById(id),
        enabled : !!id
    })
}