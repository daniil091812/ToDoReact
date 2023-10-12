import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {v4 as uuidv4} from "uuid";
import {addNewTask} from "../redux/toolkitSlice";
import {useDispatch} from "react-redux";
import {FormControl} from "react-bootstrap";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("")
    const [body, setBody] = useState("")
    const status = false
    const dispatch = useDispatch()
    return (

        <>
            <div className="d-flex justify-content-center align-items-center">
                <Button variant="primary" onClick={handleShow}>
                    Створити завдання
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Створити завдання</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl required isInvalid type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">Введіть назву</Form.Control.Feedback>
                    <FormControl type="text" value={body} onChange={e => setBody(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleClose()
                        if (name !== "") {
                            const id = uuidv4()
                            dispatch(addNewTask({name: name, body: body, status: status, id: id}))
                            setName("")
                            setBody("")
                        } else {
                            setName("")
                            setBody("")
                        }
                    }}>
                        Створити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;