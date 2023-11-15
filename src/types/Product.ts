type ProductRace = {
    rate: number;
    count: number;
}

export type ProductType = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: ProductRace;
}