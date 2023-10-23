import {createSlice} from "@reduxjs/toolkit";


const getTaskSlice = createSlice({
    name: "getTask",
    initialState: {
        todosItem: {}
    },
    reducers: {
            getTaskItem (state, action) {
                state.todosItem = action.payload;
            },
        completeTaskItem (state, action){
                state.todosItem.status = !action.payload.status
        },
        deleteTaskItem(state){
                state.todosItem = {}
        },
        editTaskItem(state, action){
                state.todosItem.name = action.payload.name
                state.todosItem.body = action.payload.body
        }
    }
})

export default getTaskSlice.reducer
export const {getTaskItem, completeTaskItem, deleteTaskItem, editTaskItem} = getTaskSlice.actions
