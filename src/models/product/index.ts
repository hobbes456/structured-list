import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "@/interfaces/IProduct";

import { Product } from "@/constants/Product";

export * as productsSelectors from "./selectors";

interface InitialStateProductsProps {
    entities: any[];
}

const initialState: InitialStateProductsProps = {
    entities: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            state.entities.unshift(new Product(state.entities, action.payload));
        },
    },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
