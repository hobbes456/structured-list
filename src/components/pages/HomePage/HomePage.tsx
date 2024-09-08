import React from "react";
import { useState, useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { productsSelectors } from "@/models/product";

import Layout from "@components/Layout";
import Button from "@components/Button";
import ModalWindow from "@components/ModalWindow";
import Information from "@components/Information";
import ProductForm from "@/components/common/ProductForm";
import ProductSheet from "@/components/common/ProductSheet";

import s from "./HomePage.module.scss";

const HomePage = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [showProductSheet, setShowProductSheet] = useState<boolean>(false);

    const products = useAppSelector(productsSelectors.entities);

    const handleClick = () => setIsShowModal(!isShowModal);

    useEffect(
        () => setShowProductSheet(products.length > 0 ? true : false),
        [products]
    );

    return (
        <Layout>
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
                {showProductSheet && <ProductSheet />}
                <Information />
            </div>
        </Layout>
    );
};

export default HomePage;
