import React from "react";
import Link from "next/link";

import { IProduct } from "@/interfaces/IProduct";

import ProductImage from "@components/ProductImage";
import Error404 from "@components/Error404";

import s from "./ProductPage.module.scss";

type ProductPageProps = {
    item?: IProduct;
};

const ProductPage: React.FC<ProductPageProps> = ({ item }) => {
    if (item) {
        return (
            <div className={s.productPage}>
                <div className={s.productPage__content}>
                    <ProductImage item={item} />
                    <div className={s.productPage__information}>
                        <p>Article: {item.article}</p>
                        <p>Title: {item.title}</p>
                        <p>Author: {item.author}</p>
                        <p>Year of writing: {item.year}</p>
                        <Link className={s.productPage__link} href="/">
                            Home Page
                        </Link>
                    </div>
                    <div className={s.productPage__description}>
                        <p>Descripton:</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    return <Error404 />;
};

export default ProductPage;
