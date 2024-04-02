import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    data: []
}

export const OpenFormWithData = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        HandleOpen: (state) => {
            state.open = true
        },
        HandleClose: (state) => {
            state.open = false
        },
        HandleStore: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { HandleOpen, HandleClose, HandleStore } = OpenFormWithData.actions
export default OpenFormWithData.reducer