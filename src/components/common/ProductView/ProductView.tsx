import React from "react";
import Image from "next/image";

import { IProduct } from "@/interfaces/IProduct";

import svgs from "@/constants/svgs";

import s from "./ProductView.module.scss";

type ProductViewProps = {
    item: IProduct;
};

const ProductView: React.FC<ProductViewProps> = ({ item }) => {
    const { booksSvg } = svgs;

    return (
        <div className={s.productView}>
            <div className={s.productView__image}>
                <Image
                    src={booksSvg.src}
                    alt="Book image"
                    width={booksSvg.width}
                    height={booksSvg.height}
                />
            </div>
            <p className={s.productView__article}>Article: {item.article}</p>
            <p className={s.productView__title}>Title: {item.title}</p>
            <p className={s.productView__author}>Author: {item.author}</p>
            <p className={s.productView__year}>Year of writing: {item.year}</p>
            <p className={s.productView__description}>{item.description}</p>
        </div>
    );
};

export default ProductView;
