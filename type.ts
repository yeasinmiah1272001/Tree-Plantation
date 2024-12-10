// export interface TreeBlogItem {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   old_price: number;
//   stock: number;
//   rating: number;
//   offer: string;
//   category: string;
//   images: { url: string }[];
// }

export interface TreeBlogItem {
  id: number;
  title: string;
  description: string;
  price: number;
  old_price: number;
  stock: number;
  rating: number;
  offer: string;
  quantity?: number;
  category: string;
  images: {
    url: string;
  }[];
}
export interface StateType {
  tree: {
    cart: TreeBlogItem[];
    // userInfo: any;
  };
}
