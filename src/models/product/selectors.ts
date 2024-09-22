import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";

import { filtersSelectors } from "@/models/filter";

import { IProduct } from "@/interfaces/IProduct";

import { filterOptions } from "@/constants/filterOptions";

export const entities = (state: RootState) => state.products.entities;
export const isLoading = (state: RootState) => state.products.isLoading;
export const isError = (state: RootState) => state.products.isError;

export const selectedFilteredProducts = createSelector(
    (state) => entities(state),
    (state) => filtersSelectors.status(state),
    (entities, status) => {
        if (status === filterOptions.all) return entities;

        return entities.filter((product: IProduct) =>
            status === filterOptions.isFavorites
                ? product.isFavorite
                : !product.isFavorite
        );
    }
);
