import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { filterOptions } from "@/constants/filterOptions";

export * as filtersSelectors from "./selectors";

interface initialStateFiltersProps {
    status: string;
}

const initialState: initialStateFiltersProps = {
    status: filterOptions.all,
};

const filtersSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        change(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
    },
});

export const { change } = filtersSlice.actions;

export default filtersSlice.reducer;
