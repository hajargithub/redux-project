import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../util/api";

const moduleName = '/products'
export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    try {
        const { data } = await api.get(moduleName)
        console.log("data", data)
        return data.products;

    } catch (error) {
        return error.message
    }
})
// export const getAllProducts = createAsyncThunk('product/getAllProducts', () => {
//     return axios
//         .get('https://dummyjson.com/products')
//         .then(({ data }) => {
//             return data.products;

//         })
//         .catch((error) => {
//             return error.message
//         });

// })
export const deleteProductById = createAsyncThunk('product/deleteProductById', async (id) => {
    try {
        const { data } = await api.delete(`${moduleName}${id}`)
        return data;

    } catch (error) {
        return error.message
    }
})
export const storeProduct = createAsyncThunk('product/storeProduct', async (newProduct) => {
    try {
        const { data } = await api.post(`${moduleName}/add`, newProduct)
        return data;

    } catch (error) {
        return error.message
    }
})