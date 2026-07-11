

export interface Table {
    id : string
    name : string
    qrCode? : string
    createdAt : string
    updatedAt : string
}

export interface CreateTableInput {
    name : string
}
