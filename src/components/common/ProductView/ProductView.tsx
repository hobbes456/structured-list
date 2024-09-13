import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { useAction } from "@/hooks/useAction";

import { getDeleteProduct, getToggleProduct } from "@/models/product";

import ProductImage from "@components/ProductImage";
import ProductForm from "@components/ProductForm";

import { IProduct } from "@/interfaces/IProduct";

import svgs from "@/constants/svgs";

import s from "./ProductView.module.scss";

type ProductViewProps = {
    item: IProduct;
};

const ProductView: React.FC<ProductViewProps> = ({ item }) => {
    const [isShowForm, setIsShowForm] = useState<boolean>(false);
    const { emptyBookmark, fillBookmark } = svgs;

    const handleDelete = useAction(getDeleteProduct);
    const handleToggle = useAction(getToggleProduct);
    const handleClick = () => setIsShowForm(!isShowForm);

    const currentBookmark = item.isFavorite ? fillBookmark : emptyBookmark;

    return (
        <>
            {isShowForm ? (
                <ProductForm item={item} onClose={handleClick} />
            ) : (
                <div
                    className={clsx(s.productView, {
                        [s.productView_favorite]: item.isFavorite,
                    })}
                >
                    <ProductImage item={item} />
                    <div className={s.productView__information}>
                        <p>Article: {item.article}</p>
                        <p>Title: {item.title}</p>
                        <p>Author: {item.author}</p>
                        <p>Year of writing: {item.year}</p>
                        <Link
                            className={s.productView__link}
                            href={`/books/${item.id}`}
                        >
                            Details...
                        </Link>
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
                    <Image
                        className={s.productView__bookmark}
                        src={currentBookmark.src}
                        alt="heart image"
                        width={40}
                        height={40}
                        onClick={() => handleToggle(item)}
                    />
                </div>
            )}
        </>
    );
};

export default ProductView;
