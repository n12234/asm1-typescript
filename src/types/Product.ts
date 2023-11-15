type ProductRate = {
    rate: number;
    count: number;
}
export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    rating: ProductRate;
};