import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showForm: false,
    buttonClicked: true,

}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        ChangeButton: (state, action) => {
            state.buttonClicked = !action.payload

        },
        DisplayForm: (state, action) => {
            console.log(state.showForm)
            state.showForm = !action.payload
            console.log(state.showForm)

        }
    }
})
export const { ChangeButton, DisplayForm } = globalSlice.actions

export default globalSlice.reducer;