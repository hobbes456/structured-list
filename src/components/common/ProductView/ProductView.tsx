import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";

import { remove } from "@/models/product";

import ProductForm from "@components/ProductForm";

import { IProduct } from "@/interfaces/IProduct";

import { Cover } from "@classes/Cover";

import svgs from "@/constants/svgs";

import s from "./ProductView.module.scss";

type ProductViewProps = {
    item: IProduct;
};

const ProductView: React.FC<ProductViewProps> = ({ item }) => {
    const [isShowForm, setIsShowForm] = useState<boolean>(false);

    const isEmpty: boolean = item.coverPath.trim() === "";

    const cover = isEmpty ? svgs.booksSvg : new Cover(item.coverPath);

    const handleDelete = useAction(remove);
    const handleClick = () => setIsShowForm(!isShowForm);

    return (
        <>
            {isShowForm ? (
                <ProductForm item={item} onClose={handleClick} />
            ) : (
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
                    <p className={s.productView__description}>
                        {item.description}
                    </p>
                    <div className={s.productView__buttons}>
                        <button
                            className={clsx(
                                s.productView__button,
                                s.productView__button_edit
                            )}
                            onClick={handleClick}
                        >
                            Edit
                        </button>
                        <button
                            className={clsx(
                                s.productView__button,
                                s.productView__button_delete
                            )}
                            onClick={() => handleDelete(item)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductView;
