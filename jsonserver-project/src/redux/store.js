import { configureStore } from "@reduxjs/toolkit";
import { todoApiSlice } from "./api/apiSlice";
import todoSlice from "./state/todoSlice";

const store = configureStore({
    reducer:{
        [todoApiSlice.reducerPath]: todoApiSlice.reducer,
        data: todoSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApiSlice.middleware)
});


export default store