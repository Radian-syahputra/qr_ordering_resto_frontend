import api from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import type { Table, CreateTableInput } from "@/types/table";


export const createTable = async (input : CreateTableInput) : Promise<Table> => {
    const res = await api.post<ApiResponse<Table>>('/tables', input)

    return res.data.data
}

export const getAllTable = async (search? : string) : Promise<Table[]> => {
    const res = await api.get<ApiResponse<Table[]>>('/tables', {
        params : {search}
    })

    return res.data.data
}

export const getTableById = async (id : string) : Promise<Table> => {
    const res = await api.get<ApiResponse<Table>>(`/tables/${id}`)
    return res.data.data
}

export const updateTable = async (id : string, input : CreateTableInput) : Promise<Table> => {
    const res = await api.put<ApiResponse<Table>>(`/tables/${id}`, input)

    return res.data.data
}

export const deleteTable = async (id : string) : Promise<null> => {
    const res = await api.delete<ApiResponse<null>>(`/tables/${id}`)

    return res.data.data
}