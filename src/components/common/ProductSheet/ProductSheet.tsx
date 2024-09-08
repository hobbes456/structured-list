import React, { useState, useMemo } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { productsSelectors } from "@/models/product";

import { IProduct } from "@/interfaces/IProduct";

import Search from "@components/Search";
import ProductCard from "@components/ProductCard";

import { productsUpDate } from "@/constants/productsUpDate";

import s from "./ProductSheet.module.scss";

const ProductSheet = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(event.target.value);

    const selectedProducts = useAppSelector(
        productsSelectors.selectedFilteredProducts
    );

    const products = useMemo(
        () => productsUpDate(searchValue, selectedProducts),
        [searchValue, selectedProducts]
    );

    return (
        <div className={s.productSheet}>
            <Search value={searchValue} onChange={handleChange} />
            <ul className={s.productSheet__list}>
                {products.map((product: IProduct) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductSheet;
