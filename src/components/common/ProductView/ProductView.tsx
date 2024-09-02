import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { IProduct } from "@/interfaces/IProduct";

import { Cover } from "@classes/Cover";

import svgs from "@/constants/svgs";

import s from "./ProductView.module.scss";

type ProductViewProps = {
    item: IProduct;
};

const ProductView: React.FC<ProductViewProps> = ({ item }) => {
    const isEmpty: boolean = item.coverPath.trim() === "";

    const cover = isEmpty ? svgs.booksSvg : new Cover(item.coverPath);

    return (
        <div className={s.productView}>
            <Image
                className={clsx(s.productView__image, {
                    [s.productView__image_border]: !isEmpty,
                })}
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
            />
            <div className={s.productView__information}>
                <p>Article: {item.article}</p>
                <p>Title: {item.title}</p>
                <p>Author: {item.author}</p>
                <p>Year of writing: {item.year}</p>
            </div>
            <p className={s.productView__description}>{item.description}</p>
        </div>
    );
};

export default ProductView;
