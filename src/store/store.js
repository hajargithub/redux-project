import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/blog/blogSlice";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        blog: blogSlice
    },
})
export default store;