import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ModalAddTask from "../ModalBootstrap/ModalAddTask";
import {useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import { getTaskItem} from "../redux/getTaskSlice";
import {sortItems} from "../redux/toolkitSlice";

function BurgerMenu() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const todos = useSelector(state => state.toolkit.todos);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sortItems())
    }, [todos]);
    return (
        <>
            <Button  variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Завдання</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ModalAddTask className="mb-30"></ModalAddTask>
                    {todos.map(task => <ListGroup>
                        <ListGroup.Item  action variant={task.status ? "success" : "danger"} className="mt-4" onClick={() => {
                            dispatch(getTaskItem(task))
                            handleClose()
                        }} >{task.name} </ListGroup.Item>
                    </ListGroup>)}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default BurgerMenu;