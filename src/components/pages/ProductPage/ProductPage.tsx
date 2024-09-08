import React from "react";
import Link from "next/link";

import { IProduct } from "@/interfaces/IProduct";

type ProductPageProps = {
    item?: IProduct;
};

const ProductPage: React.FC<ProductPageProps> = ({ item }) => {
    return <Link href="/">HOME PAGE</Link>;
};

export default ProductPage;
