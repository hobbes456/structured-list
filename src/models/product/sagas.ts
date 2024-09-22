import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    toggleProduct,
} from "./api";

import {
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
} from "@/models/product";

import { IProduct } from "@/interfaces/IProduct";

function* fetchProductsAsync() {
    try {
        const products: IProduct[] = yield call(getProducts);
        yield put(fetchProductsSuccess(products));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* createProductAsync(action: PayloadAction<IProduct>) {
    try {
        const responce: IProduct = yield call(createProduct, action.payload);
        yield put(setCreateProduct(responce));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* deleteProductAsync(action: PayloadAction<IProduct>) {
    try {
        const responce: IProduct = yield call(deleteProduct, action.payload);
        yield put(setDeleteProduct(responce));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* updateProductAsync(action: PayloadAction<IProduct>) {
    try {
        const responce: IProduct = yield call(updateProduct, action.payload);
        yield put(setUpdateProduct(responce));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* toggleProductAsync(action: PayloadAction<IProduct>) {
    try {
        const responce: IProduct = yield call(toggleProduct, action.payload);
        yield put(setToggleProduct(responce));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* watchProductSagas() {
    yield takeEvery(fetchProductsRequest.type, fetchProductsAsync);
    yield takeEvery(getCreateProduct.type, createProductAsync);
    yield takeEvery(getDeleteProduct.type, deleteProductAsync);
    yield takeEvery(getUpdateProduct.type, updateProductAsync);
    yield takeEvery(getToggleProduct.type, toggleProductAsync);
}
