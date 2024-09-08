import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useAppSelector";

import product, { productsSelectors } from "@/models/product";

import ProductPage from "@pages/ProductPage";
import Layout from "@components/Layout";

const Product = () => {
    const router = useRouter();

    const products = useAppSelector(productsSelectors.entities);

    const item = products.find(
        (product) => product.id.toString() === router.query.id
    );

    return (
        <Layout>
            <ProductPage item={item} />
        </Layout>
    );
};

export default Product;
