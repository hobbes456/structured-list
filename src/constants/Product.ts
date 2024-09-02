import { IProduct } from "@/interfaces/IProduct";

const nextProductId = (products: IProduct[]): number => {
    return (
        products.reduce((maxId, product) => Math.max(product.id, maxId), 1) + 1
    );
};

export class Product implements IProduct {
    public id: number;
    public isFavorite: boolean = false;
    public article: string;
    public title: string;
    public author: string;
    public year: string;
    public description: string;

    constructor(state: IProduct[], product: IProduct) {
        this.id = nextProductId(state);
        this.article = product.article;
        this.title = product.title;
        this.author = product.author;
        this.year = product.year;
        this.description = product.description;
    }
}
