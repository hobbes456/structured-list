import { Product } from "@/constants/Product";

const templateArray = [
    {
        id: 0,
        title: "",
        author: "",
        date: "",
        description: "",
    },
];

export const templateProductFormDate = new Product(
    templateArray,
    templateArray[0]
);
