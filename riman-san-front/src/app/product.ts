export interface Product {}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  img: string;
  quantity?: number;
  createdAt: string | Date;
}
