import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { IProduct } from "@/interfaces/IProduct";

import { Cover } from "@classes/Cover";

import { isValidUrl } from "@/constants/isValidUrl";
import svgs from "@/constants/svgs";

import s from "./ProductImage.module.scss";

type ProductImageProps = {
    item: IProduct;
};

const ProductImage: React.FC<ProductImageProps> = ({ item }) => {
    const isValid = isValidUrl(item.coverPath);

    const cover = isValid ? new Cover(item.coverPath) : svgs.booksSvg;

    return (
        <Image
            className={clsx(s.productImage, {
                [s.productImage_border]: isValid,
                [s.productImage_favorite]: isValid && item.isFavorite,
            })}
            src={cover.src}
            alt="Book cover"
            width={cover.width}
            height={cover.height}
            unoptimized={true}
        />
    );
};

export default ProductImage;
