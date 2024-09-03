import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "@/interfaces/IProduct";

import { Product } from "@classes/Product";

export * as productsSelectors from "./selectors";

interface InitialStateProductsProps {
    entities: IProduct[];
}

const initialState: InitialStateProductsProps = {
    entities: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add(state, action: PayloadAction<IProduct>) {
            state.entities.unshift(new Product(state.entities, action.payload));
        },
        remove(state, action: PayloadAction<IProduct>) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload.id
            );
        },
        edit(state, action: PayloadAction<IProduct>) {
            state.entities = state.entities.map((item) =>
                item.id !== action.payload.id ? item : { ...action.payload }
            );
        },
    },
});

export const { add, remove, edit } = productsSlice.actions;

export default productsSlice.reducer;
