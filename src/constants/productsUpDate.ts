import { IProduct } from "@/interfaces/IProduct";

export const productsUpDate = (value: string, items: IProduct[]) => {
    if (value.trim().length === 0) return items;

    return items.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
    );
};
