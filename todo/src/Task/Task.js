import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {completeTask, deleteTask, editTask} from "../redux/toolkitSlice";
import {v4 as uuidv4} from 'uuid';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Badge, FormControl, ListGroup} from "react-bootstrap";
import "./toDoList.css"
import {completeTaskItem, deleteTaskItem, editTaskItem} from "../redux/getTaskSlice";

const Task = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")

    const [body, setBody] = useState("")

    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState({})
    const taskItem = useSelector(state => state.getToDoItem.todosItem)

    useEffect(() => {
        setName(newTask.name)
        setBody(newTask.body)
    }, [newTask]);

    return (

        <div className="center_style">
            {Object.entries(taskItem).length === 0 ?
                <h1><Badge bg="secondary">Оберіть завдання</Badge></h1> :
                <ListGroup className="mt-3 mb-5 mx-auto" as="ul">
                    <ListGroup.Item as="li" disabled key={uuidv4()}>{taskItem.name}</ListGroup.Item>
                    <ListGroup.Item as="li" disabled key={uuidv4()}>{taskItem.body}</ListGroup.Item>
                    <ListGroup.Item variant="light" action key={uuidv4()}
                                    onClick={() => {
                                        dispatch(completeTask(taskItem.id))
                                        dispatch(completeTaskItem(taskItem))
                                        }}>{(taskItem.status === false) ? "не виконано" : "виконано"}</ListGroup.Item>
                    <ListGroup.Item action variant="light" key={uuidv4()}
                                    onClick={() => {
                                        dispatch(deleteTask(taskItem.id))
                                        dispatch(deleteTaskItem())
                                    }}>видалити завдання</ListGroup.Item>

                    <ListGroup.Item action variant="light" key={uuidv4()} onClick={() => {
                        setNewTask(taskItem)
                        handleShow()
                    }}>редагувати
                    </ListGroup.Item>
                </ListGroup>}


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
                        dispatch(editTaskItem({name: name, body: body}))
                        dispatch(editTask({name: name, body: body, id: newTask.id}))

                        handleClose()

                    }}>
                        Зберегти зміни
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default Task;