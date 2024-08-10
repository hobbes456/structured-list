import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "@/models/product";

export const rootReducer = combineReducers({
    products: productsSlice,
});
