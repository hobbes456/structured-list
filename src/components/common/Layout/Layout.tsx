import React, { useEffect } from "react";

import { useAction } from "@/hooks/useAction";
import { useAppSelector } from "@/hooks/useAppSelector";

import { fetchProductsRequest, productsSelectors } from "@/models/product";

import AppLoader from "@components/AppLoader";
import Error from "@components/Error";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isLoading = useAppSelector(productsSelectors.isLoading);
    const isError = useAppSelector(productsSelectors.isError);

    const fetchProducts = useAction(fetchProductsRequest);

    const fetchProductsAsync = async () => {
        fetchProducts();
    };

    useEffect(() => {
        fetchProductsAsync();
    }, []);

    if (isError) return <Error errorType={"Network Error"} />;

    return isLoading ? <AppLoader /> : children;
};

export default Layout;
