import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "@/interfaces/IProduct";

import { Product } from "@classes/Product";

export * as productsSelectors from "./selectors";

interface InitialStateProductsProps {
    entities: IProduct[];
    isLoading: boolean;
    isError: string | null;
}

const initialState: InitialStateProductsProps = {
    entities: [],
    isLoading: false,
    isError: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProductsRequest(state) {
            state.isLoading = true;
            state.isError = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isError = action.payload;
        },
        getCreateProduct() {},
        setCreateProduct(state, action: PayloadAction<IProduct>) {
            state.entities.push(new Product(action.payload));
        },
        getDeleteProduct() {},
        setDeleteProduct(state, action: PayloadAction<IProduct>) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload.id
            );
        },
        getUpdateProduct() {},
        setUpdateProduct(state, action: PayloadAction<IProduct>) {
            state.entities = state.entities.map((item) =>
                item.id !== action.payload.id ? item : { ...action.payload }
            );
        },
        getToggleProduct() {},
        setToggleProduct(state, action: PayloadAction<IProduct>) {
            state.entities = state.entities.map((item) =>
                item.id === action.payload.id
                    ? { ...item, isFavorite: !item.isFavorite }
                    : item
            );
        },
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    getCreateProduct,
    setCreateProduct,
    getDeleteProduct,
    setDeleteProduct,
    getUpdateProduct,
    setUpdateProduct,
    getToggleProduct,
    setToggleProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
