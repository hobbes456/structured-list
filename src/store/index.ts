import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "@/models";
import rootSaga from "@/models/sagas";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            sagaMiddleware
        ),
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
