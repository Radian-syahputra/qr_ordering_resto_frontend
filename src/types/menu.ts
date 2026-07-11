import type { Category } from "./category";

export interface Menu {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  imagePublicId: string;
  available: boolean;
  categoryId: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
}


export interface CreateMenuInput {
    name : string,
    price : number
    description : string
    categoryId : string
    available : boolean
    image : File
}

export type UpdateMenuInput = Partial<CreateMenuInput>