import { configureStore } from "@reduxjs/toolkit";
import { BaseReducer } from "./reducers";

export const Store = configureStore({
    reducer: {
        BaseReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

type AppStore = typeof Store;
export type AppDispatch = AppStore['dispatch']
export type AppSelector = AppStore['getState']