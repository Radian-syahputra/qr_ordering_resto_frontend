import api from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import type { LoginInput, RegisterInput, User } from "@/types/auth";

export const login = async (input: LoginInput): Promise<User> => {
    const response = await api.post<ApiResponse<User>>('/auth/login', input)

    return response.data.data
}

export const register = async (input : RegisterInput) : Promise<User> => {
    const response = await api.post<ApiResponse<User>>('/auth/register', input)

    return response.data.data
}

export const logout = async () : Promise<null> => {
    const response = await api.post<ApiResponse<null>>('/auth/logout')

    return response.data.data
}

export const me = async () : Promise<User> => {
    const response = await api.get<ApiResponse<User>>('/auth/me')
    return response.data.data
}