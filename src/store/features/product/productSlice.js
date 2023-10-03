import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [
        { id: 1, title: 'Iphone' },
        { id: 2, title: 'Samsang' },
        { id: 3, title: 'Huawei' },
    ],
    title: 'Welcome to product module'
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
})
export const { setTitle } = productSlice.actions
export default productSlice.reducer;