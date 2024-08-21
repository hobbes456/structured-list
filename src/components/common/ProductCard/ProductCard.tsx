import React from "react";
import Image from "next/image";

import { IProduct } from "@/interfaces/IProduct";

import svgs from "@/constants/svgs";

import s from "./ProductCard.module.scss";

type ProductCardProps = {
    item: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const { booksSvg } = svgs;

    return (
        <li className={s.productCard}>
            <Image
                src={booksSvg.src}
                alt="Book image"
                width={booksSvg.width}
                height={booksSvg.height}
            />
            <div className={s.productCard__information}>
                <p className={s.productCard__title}>{item.title}</p>
                <p className={s.productCard__author}>{item.author}</p>
                <p className={s.productCard__year}>{item.year} год</p>
            </div>
        </li>
    );
};

export default ProductCard;
