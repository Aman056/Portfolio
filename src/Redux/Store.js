import { configureStore } from '@reduxjs/toolkit'
import  OpenFormWithDataReducer  from './Slices/FormSlice'

export const Store = configureStore({
    reducer: {
        Dialog: OpenFormWithDataReducer
    },
})