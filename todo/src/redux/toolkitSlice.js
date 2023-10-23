import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toDo",
    initialState: {
        todos: [{
            name: '12',
            body: '2',
            status: false,
            id: '92ff4db9-a2d2-4066-8d61-e46e95176334'
        },{
            name: '32',
            body: '2',
            status: false,
            id: '92ff4db9-a3d2-4066-8d61-e46e95176334'
        },{
            name: '42',
            body: '2',
            status: false,
            id: '92ff4db9-a252-4066-8d61-e46e95176334'
        }]
    },
    reducers: {
        addNewTask(state, action) {
            state.todos.push(action.payload)
        },
        deleteTask(state, action) {
            const findItem = state.todos.find(item => item.id === action.payload)
            console.log(state.todos.indexOf(findItem));
            state.todos.splice(state.todos.indexOf(findItem), 1)
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
        },
        // editTaskTest(state, action){
        //     const findItem = state.todos.find(item => item.id === action.payload.id)
        //     console.log(state.todos.indexOf(findItem));
        //     state.todos.splice(state.todos.indexOf(findItem), 1, action.payload)
        //     console.log(action.payload);
        // }
    }
})



export default toolkitSlice.reducer
export const { sortItems, addNewTask, completeTask, deleteTask, editTask} = toolkitSlice.actions
