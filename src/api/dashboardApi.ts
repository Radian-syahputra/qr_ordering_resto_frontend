import api from "@/lib/axios";
import type { DashboardStats,Period } from "@/types/dashboard";
import type { ApiResponse } from "@/types/api";


export const getDashboardStats  = async (period : Period ) : Promise<DashboardStats> => {
    const res = await api.get<ApiResponse<DashboardStats>>('/dashboard', {
        params : {period}
    })

    return res.data.data
}


export const exportDashboard  = async (period : Period) : Promise<Blob> => {
    const res = await api.get('/dashboard/export', {
        params : {period},
        responseType : 'blob'
    })

    return res.data
}