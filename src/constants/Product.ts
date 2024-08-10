import { IProduct } from "@/interfaces/IProduct";

const nextProductId = (products: IProduct[]): number => {
    return (
        products.reduce((maxId, product) => Math.max(product.id, maxId), 1) + 1
    );
};

export class Product implements IProduct {
    public id: number;
    public title: string;
    public author: string;
    public date: string;
    public description: string;

    constructor(state: IProduct[], product: IProduct) {
        this.id = nextProductId(state);
        this.title = product.title;
        this.author = product.author;
        this.date = product.date;
        this.description = product.description;
    }
}
