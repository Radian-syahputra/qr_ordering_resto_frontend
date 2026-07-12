import api from "@/lib/axios";
import type { Menu, CreateMenuInput,UpdateMenuInput } from "@/types/menu";
import type { ApiResponse } from "@/types/api";


const appendIsExist = (formData : FormData, key : string, value : unknown) => {
    if (value === undefined) return

    if(value instanceof File) {
        formData.append(key, value)
    }else {
        formData.append(key, String(value))
    }
}


export const getMenus = async (search? : string, category? : string) : Promise<Menu[]> => {
    const response = await api.get<ApiResponse<Menu[]>>('/menus', {
        params : {search, category}
    })

    return response.data.data
}


export const getMenuById = async (id : string) : Promise<Menu> => {
    const response = await api.get<ApiResponse<Menu>>(`/menus/${id}`)

    return response.data.data
}

export const createMenu = async (input : CreateMenuInput) : Promise<Menu> => {
    const formData = new FormData()
    formData.append('name', input.name)
    formData.append('price', String(input.price))
    formData.append('description', input.description)
    formData.append('categoryId', input.categoryId)
    formData.append('available', String(input.available))
    formData.append('image', input.image)

    const response = await api.post<ApiResponse<Menu>>('/menus', formData)
    return response.data.data   

}


export const updateMenu = async (id : string, input : UpdateMenuInput) : Promise<Menu> => {
    const formData = new FormData()

    appendIsExist(formData, 'name', input.name)
    appendIsExist(formData, 'price', input.price)
    appendIsExist(formData, 'description', input.description)
    appendIsExist(formData, 'categoryId', input.categoryId)
    appendIsExist(formData, 'available', input.available)
    appendIsExist(formData, 'image', input.image)

    const response = await api.put<ApiResponse<Menu>>(`/menus/${id}`, formData)

    return response.data.data
}


export const deleteMenu = async (id : string) : Promise<null> => {
    const response = await api.delete<ApiResponse<null>>(`/menus/${id}`)

    return response.data.data
}
