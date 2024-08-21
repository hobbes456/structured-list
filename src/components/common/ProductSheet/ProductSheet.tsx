import React from "react";

import { IProduct } from "@/interfaces/IProduct";

import ProductCard from "@components/ProductCard";

import s from "./ProductSheet.module.scss";

type ProductSheetProps = {
    products: IProduct[];
};

const ProductSheet: React.FC<ProductSheetProps> = ({ products }) => {
    return (
        <div className={s.productSheet}>
            <ul className={s.productSheet__list}>
                {products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductSheet;
