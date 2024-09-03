import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { IProduct } from "@/interfaces/IProduct";

import { Cover } from "@classes/Cover";

import { isValidUrl } from "@/constants/isValidUrl";
import svgs from "@/constants/svgs";

import s from "./ProductView.module.scss";

type ProductViewProps = {
    item: IProduct;
};

const ProductView: React.FC<ProductViewProps> = ({ item }) => {
    const isValid = isValidUrl(item.coverPath);

    const cover = isValid ? new Cover(item.coverPath) : svgs.booksSvg;

    return (
        <div className={s.productView}>
            <Image
                className={clsx(s.productView__image, {
                    [s.productView__image_border]: isValid,
                })}
                src={cover.src}
                alt="Book cover"
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
