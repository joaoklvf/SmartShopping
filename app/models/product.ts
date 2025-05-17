export interface Product {
  id: string;
  name: string;
  price:number;
  quantity: number;
  categoryId: string;
  imgUrl: string;
  promotional_price?: number;
}