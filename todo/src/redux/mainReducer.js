import {combineReducers} from "redux";
import toolkitSlice from "./toolkitSlice";
import {configureStore} from "@reduxjs/toolkit";
import getTaskSlice from "./getTaskSlice";


const rootReducer = combineReducers(
    {
        toolkit: toolkitSlice,
        getToDoItem: getTaskSlice
    })

export const store = configureStore({
    reducer: rootReducer,
})