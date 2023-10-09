import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/global/globalSlice.js";
import panierSlice from "./features/panier/panierSlice.js";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        global: globalSlice,
        panier: panierSlice
    },
})
export default store;