import React from "react";
import { useState, useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { productsSelectors } from "@/models/product";

import AppLoader from "@components/AppLoader";
import Button from "@components/Button";
import ModalWindow from "@components/ModalWindow";
import Information from "@components/Information";
import ProductForm from "@/components/common/ProductForm";
import ProductSheet from "@/components/common/ProductSheet";

import s from "./HomePage.module.scss";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [showProductSheet, setShowProductSheet] = useState<boolean>(false);

    const products = useAppSelector(productsSelectors.entities);

    const handleClick = () => setIsShowModal(!isShowModal);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 300);
    }, []);

    useEffect(
        () => setShowProductSheet(products.length > 0 ? true : false),
        [products]
    );

    return (
        <>
            {isLoading ? (
                <AppLoader />
            ) : (
                <div className={s.homePage}>
                    <Button title={"Create Product"} onClick={handleClick} />
                    {isShowModal && (
                        <ModalWindow
                            title={"Create a new product"}
                            onClose={handleClick}
                        >
                            <ProductForm onClose={handleClick} />
                        </ModalWindow>
                    )}
                    {showProductSheet && <ProductSheet products={products}/>}
                    <Information />
                </div>
            )}
        </> 
    );
};

export default HomePage;
