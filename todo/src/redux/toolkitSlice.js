import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toDo",
    initialState: {
        todos: []
    },
    reducers: {
        addNewTask(state, action) {
            state.todos.push(action.payload)
        },
        deleteTask(state, action) {
            state.todos.splice([action.payload], 1)
        },
        editTask(state, action) {
            state.todos.find(item => item.id === action.payload.id).body = action.payload.body
            state.todos.find(item => item.id === action.payload.id).name = action.payload.name

        },
        completeTask(state, action) {
            state.todos.find(item => item.id === action.payload).status = !state.todos.find(item => item.id === action.payload).status;
        },
        sortItems(state) {
            state.todos.sort((a, b) => b.status - a.status);
        }
    }
})

export default toolkitSlice.reducer
export const {sortItems, addNewTask, completeTask, deleteTask, editTask} = toolkitSlice.actions
export const selectData = (state) => state.data.data;
