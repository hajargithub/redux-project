import lodash from 'lodash'
import { createSlice } from "@reduxjs/toolkit"
import { deleteProductById, getAllProducts, storeProduct } from "./productActions"

const initialState = {
    errorMessage: '',
    isLoading: false,
    edit: false,
    products: [],
    product: {
        id: 0,
        title: '',
        price: 0
    },

}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, { payload: { name, value } }) => {
            // console.log("N:", name)
            // console.log("val:", value)
            state.product[name] = value
            // state.product[action.payload.name] = action.payload.value
        },
        persistProduct: (state, action) => {
            state.products.unshift(action.payload)
            state.product = {
                id: 0,
                title: '',
                price: 0,
            }

        },
        updateProduct: (state, action) => {
            let item = {
                ...action.payload,
                id: state.product.id
            }
            state.products = state.products.map(product => product.id === item.id ? item : product)
            state.edit = false
            state.product = {
                id: 0,
                title: '',
                price: 0,
            }
        },
        showProductToEdit: (state, action) => {
            state.edit = true
            state.product = action.payload
            console.log(state.productUpdated)
        },
        deleteProduct: (state, action) => {
            console.log(action.payload)
            state.products = state.products.filter((product) => product.id !== action.payload)
            console.log(state.products)
        }

    },
    extraReducers: {

        [getAllProducts.pending]: (state) => {
            console.log("pending")
            state.isLoading = true
            state.errorMessage = ''

        },
        [getAllProducts.fulfilled]: (state, action) => {
            console.log('payload fav', action.payload)
            state.isLoading = false
            if (lodash.isArray(action.payload)) {
                state.products = action.payload
            }
            if (lodash.isString(action.payload)) {
                state.errorMessage = action.payload
            }

        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.error
        },
        [deleteProductById.pending]: (state) => {
            console.log("pending")

        },
        [deleteProductById.fulfilled]: (state, action) => {
            console.log("fulfilled")
            console.log(action.payload)
            state.products = state.products.filter((product) => product.id !== action.payload.id)
        },
        [deleteProductById.rejected]: (state, action) => {
            state.errorMessage = action.payload

        },
        [storeProduct.pending]: (state) => {
            state.isLoading = true
            console.log("pending")

        },
        [storeProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            console.log('payload fav', action.payload)
            state.products.unshift(action.payload)
            state.product = {
                id: 0,
                title: '',
                price: 0,
            }
        },
        [storeProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload

        },
    }
})
// productSlice.actions pour exporter function du reducer du productSlice
export const { setProduct, persistProduct, updateProduct, showProductToEdit, deleteProduct } = productSlice.actions
// productSlice.reducer pour exporter state du productSlice
export default productSlice.reducer;