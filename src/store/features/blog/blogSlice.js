import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [{ id: 1, title: 'Learn React' },
        { id: 2, title: 'Learn React' },
        { id: 3, title: 'Learn React' }
    ],
    title: "Welcome to blog module"
}
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {}
})
export default blogSlice.reducer;