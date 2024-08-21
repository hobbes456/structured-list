import React, { useState } from "react";
import Image from "next/image";

import { IProduct } from "@/interfaces/IProduct";

import ModalWindow from "@components/ModalWindow";
import ProductView from "@components/ProductView";

import svgs from "@/constants/svgs";

import s from "./ProductCard.module.scss";

type ProductCardProps = {
    item: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const { booksSvg } = svgs;

    const handleClick = () => setIsShowModal(!isShowModal);

    return (
        <>
            <li className={s.productCard} onClick={handleClick}>
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
            {isShowModal && (
                <ModalWindow title={item.title} onClose={handleClick}>
                    <ProductView item={item} />
                </ModalWindow>
            )}
        </>
    );
};

export default ProductCard;
