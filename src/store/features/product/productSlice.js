import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    edit: false,
    products: [
        { id: 1, title: 'Iphone', price: 25 },
        { id: 2, title: 'Samsang', price: 30 },
        { id: 3, title: 'Huawei', price: 40 },
    ],
    productUpdated: {
        id: 0,
        title: '',
        price: 0
    },

}
export const getAllProducts = (state) => {
    return state.product.products;
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        persistProduct: (state, action) => {
            state.products.unshift(action.payload)
        },
        updateProduct: (state, action) => {
            let item = {
                ...action.payload,
                id: state.productUpdated.id
            }
            state.products = state.products.map(product => product.id === item.id ? item : product)
            state.edit = false
            state.productUpdated = {
                id: 0,
                title: '',
                price: 0,
            }
        },
        showProductToEdit: (state, action) => {
            state.productUpdated = action.payload
            console.log(state.productUpdated)
            state.edit = true
        },
        deleteProduct: (state, action) => {
            console.log(action.payload)
            state.products = state.products.filter((product) => product.id !== action.payload)
            console.log(state.products)
        }

    }
})
// productSlice.actions pour exporter function du reducer du productSlice
export const { persistProduct, updateProduct, showProductToEdit, deleteProduct } = productSlice.actions
// productSlice.reducer pour exporter state du productSlice
export default productSlice.reducer;