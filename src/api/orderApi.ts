import api from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import type { OrderStatus,Order, CreateOrderInput } from "@/types/order";


export const createOrder = async (order : CreateOrderInput) : Promise<Order> => {
    const res = await api.post<ApiResponse<Order>>('/orders', order)

    return res.data.data
}


export const getOrders = async (search? : string) : Promise<Order[]> => {
    const res = await api.get<ApiResponse<Order[]>>('/orders', {
        params : {search}
    })

    return res.data.data
}

export const getOrderById = async (id : string) : Promise<Order> => {
    const res = await api.get<ApiResponse<Order>>(`/orders/${id}`)

    return res.data.data
}

export const updateOrderStatus = async (id : string, status : OrderStatus) : Promise<Order> => {
    const res = await api.patch<ApiResponse<Order>>(`/orders/${id}/status`, {status})

    return res.data.data
}