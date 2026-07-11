

export type Role = 'ADMIN' | 'STAFF'

export interface User {
    id : string,
    name : string,
    email : string
    role : Role
    createdAt : string
    updatedAt : string
}

export interface RegisterInput {
    name : string,
    email : string,
    password : string
}

export interface LoginInput {
    email : string
    password : string
}