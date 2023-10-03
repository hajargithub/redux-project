import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: true,
    grid: false,
}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {}
})
export default globalSlice.reducer;