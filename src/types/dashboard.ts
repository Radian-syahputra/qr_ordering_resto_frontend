

export interface DashboardStats {
    totalOrder : number
    totalPending : number
    totalCooking : number
    totalReady : number
    totalServed : number
    totalMenu : number
    totalTable : number
}


export type Period = 'today' | 'week' | 'month'