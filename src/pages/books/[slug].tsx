import { useRouter } from "next/router";
import Error from "next/error";

import { useAppSelector } from "@/hooks/useAppSelector";

import { productsSelectors } from "@/models/product";

import ProductPage from "@pages/ProductPage";
import Layout from "@components/Layout";

const Product = () => {
    const router = useRouter();

    const products = useAppSelector(productsSelectors.entities);

    const item = products.find(
        (product) => product.id.toString() === router.query.slug
    );

    return (
        <Layout>
            {item ? <ProductPage item={item} /> : <Error statusCode={404} />}
        </Layout>
    );
};

export default Product;
