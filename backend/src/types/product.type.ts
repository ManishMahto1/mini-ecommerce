export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface ProductResponse {
  success: boolean;
  data: Product[];
  message?: string;
}
