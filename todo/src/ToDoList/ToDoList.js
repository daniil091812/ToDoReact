import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {completeTask, deleteTask, editTask, sortItems} from "../redux/toolkitSlice";
import {v4 as uuidv4} from 'uuid';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {FormControl, ListGroup} from "react-bootstrap";
import "./toDoList.css"

const ToDoList = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")

    const [body, setBody] = useState("")

    const dispatch = useDispatch()

    const todos = useSelector(state => state.toolkit.todos)

    const [task, setTask] = useState({})

    useEffect(() => {
        dispatch(sortItems())
    }, [todos]);

    useEffect(() => {
        setName(task.name)
        setBody(task.body)
    }, [task]);

    return (
        <div className="center_style">
            {todos.map(todo => <ListGroup className="mt-3 mb-5 mx-auto" as="ul">
                    <ListGroup.Item as="li" disabled key={uuidv4()}>{todo.name}</ListGroup.Item>
                    <ListGroup.Item as="li" disabled key={uuidv4()}>{todo.body}</ListGroup.Item>
                    <ListGroup.Item variant="light" action as="li" key={uuidv4()}
                                    onClick={() => dispatch(completeTask(todo.id))}>{(todo.status === false) ? "не виконано" : "виконано"}</ListGroup.Item>
                    <ListGroup.Item as="li" action variant="light" key={uuidv4()}
                                    onClick={() => dispatch(deleteTask(todo.id))}>видалити завдання</ListGroup.Item>
                    <ListGroup.Item as="li" action variant="light" key={uuidv4()} onClick={() => {
                        setTask(todo)
                        handleShow()
                    }}>редагувати
                    </ListGroup.Item>
                </ListGroup>
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Редагувати завдання</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <FormControl type="text" value={body} onChange={e => setBody(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleClose()
                        dispatch(editTask({name: name, body: body, id: task.id}))
                    }}>
                        Зберегти зміни
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default ToDoList;