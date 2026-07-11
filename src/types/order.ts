import type { Menu } from "./menu"
import type { Table } from "./table"

export type OrderStatus = 'PENDING' | 'COOKING' | 'READY' | 'SERVED' | 'CANCELLED'

export interface OrderItem {
    id : string
    menuId : string
    menu : Menu
    quantity : number
    price : number
    note? : string
}


export interface Order {
    id : string
    tableId : string
    table : Table
    status : OrderStatus
    orderItems : OrderItem[]
    totalPrice : number
    createdAt : string
    updatedAt : string
}

export interface CreateOrderItemInput {
    menuId : string
    quantity : number
    note? : string
}

export interface CreateOrderInput {
    tableId : string
    items : CreateOrderItemInput[]
}