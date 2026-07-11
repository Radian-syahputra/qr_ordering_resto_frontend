import api from "@/lib/axios";
import type { Category, CreateCategoryInput } from "@/types/category";
import type { ApiResponse } from "@/types/api";


export const categories = async () : Promise<Category[]> => {
    const response = await api.get<ApiResponse<Category[]>>('/categories')

    return response.data.data
}


export const categoryById = async (id : string) : Promise<Category> => {
    const response = await api.get<ApiResponse<Category>>(`/categories/${id}`)

    return response.data.data
}

export const createCategory = async (input : CreateCategoryInput) : Promise<Category> => {
    const response = await api.post<ApiResponse<Category>>('/categories', input)

    return response.data.data
}

export const updateCategory = async (id : string, input: CreateCategoryInput) : Promise<Category> => {
    const response = await api.put<ApiResponse<Category>>(`/categories/${id}`, input)

    return response.data.data
}

export const deleteCategory = async (id : string) : Promise<null> => {
    const response = await api.delete<ApiResponse<null>>(`/categories/${id}`)

    return response.data.data
}