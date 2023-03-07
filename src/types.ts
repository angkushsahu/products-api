export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    ratings: number;
    images: {
        pic: string;
        publicUrl: string;
        _id: string;
    }[];
    category: string;
    stock: number;
    numberOfReviews: number;
    reviews: never[];
}
