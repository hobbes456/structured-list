import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
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
} from "@/models/product";

import { IProduct } from "@/interfaces/IProduct";

function* fetchProductsSaga() {
    try {
        const products: IProduct[] = yield call(getProducts);
        yield put(fetchProductsSuccess(products));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* createProductSaga(action: PayloadAction<IProduct>) {
    try {
        const response: IProduct = yield call(createProduct, action.payload);
        yield put(setCreateProduct(response));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* deleteProductSaga(action: PayloadAction<IProduct>) {
    try {
        const response: IProduct = yield call(deleteProduct, action.payload);
        yield put(setDeleteProduct(response));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

function* updateProductSaga(action: PayloadAction<IProduct>) {
    try {
        const response: IProduct = yield call(updateProduct, action.payload);
        yield put(setUpdateProduct(response));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* watchProductSagas() {
    yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
    yield takeEvery(getCreateProduct.type, createProductSaga);
    yield takeEvery(getDeleteProduct.type, deleteProductSaga);
    yield takeEvery(getUpdateProduct.type, updateProductSaga);
}
