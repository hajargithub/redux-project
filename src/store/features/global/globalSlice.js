import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    buttonClicked: true,

}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        ChangeButton: (state, action) => {
            state.buttonClicked = !action.payload
        }
    }
})
export const { ChangeButton } = globalSlice.actions

export default globalSlice.reducer;