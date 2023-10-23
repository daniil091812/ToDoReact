
import Task from "./Task/Task";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function App() {
    return (
        <div>
            <BurgerMenu></BurgerMenu>
            <Task/>
        </div>
    );
}

export default App;
