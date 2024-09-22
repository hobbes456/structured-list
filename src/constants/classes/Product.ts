import { IProduct } from "@/interfaces/IProduct";

export class Product implements IProduct {
    public id: number;
    public isFavorite: boolean = false;
    public article: string;
    public title: string;
    public author: string;
    public year: string;
    public coverPath: string;
    public description: string;

    constructor(product: IProduct) {
        this.id = product.id;
        this.article = product.article;
        this.title = product.title;
        this.author = product.author;
        this.year = product.year;
        this.coverPath = product.coverPath;
        this.description = product.description;
    }
}
