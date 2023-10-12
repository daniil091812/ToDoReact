import {combineReducers} from "redux";
import toolkitSlice from "./toolkitSlice";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers(
    {
        toolkit: toolkitSlice
    })

export const store = configureStore({
    reducer: rootReducer,
})