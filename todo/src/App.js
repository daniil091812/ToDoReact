
import ToDoList from "./ToDoList/ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from "./ModalBootstrap/ModalAddTask";
import React from "react";

function App() {
    return (
        <div>
            <Example></Example>
            <ToDoList/>
        </div>
    );
}

export default App;
