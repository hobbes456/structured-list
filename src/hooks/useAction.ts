import { useCallback } from "react";

import { useAppDispatch } from "./useAppDispatch";

import { Product } from "@classes/Product";

export const useAction = (action: Function) => {
    const dispatch = useAppDispatch();

    return useCallback(
        (arg?: Product) => dispatch(action(arg)),
        [dispatch, action]
    );
};
