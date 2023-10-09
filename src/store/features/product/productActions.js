import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    try {
        const { data } = await axios.get('https://dummyjson.com/products')
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
        const { data } = await axios.delete(`https://dummyjson.com/products/${id}`)
        return data;

    } catch (error) {
        return error.message
    }
})
export const storeProduct = createAsyncThunk('product/storeProduct', async (newProduct) => {
    try {
        const { data } = await axios.post('https://dummyjson.com/products/add', newProduct)
        return data;

    } catch (error) {
        return error.message
    }
})