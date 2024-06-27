import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        data: productSlice
    }
})

export default store;