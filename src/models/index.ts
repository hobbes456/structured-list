import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "@/models/product";
import filtersSlice from "@/models/filter";

export const rootReducer = combineReducers({
    products: productsSlice,
    filter: filtersSlice,
});
