import React from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';

export default function EditComment(props) {

    const { edit, setEdit, comm, newRefresh } = props;
    const [resultComment, setResultComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(comm.author);
    const [rate, setRate] = useState(comm.rate);
    const [comment, setComment] = useState(comm.comment);
    const API = 'https://striveschool-api.herokuapp.com/api/comments/';
    // Token di autenticazione API
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY0OWY0ZTdiZWEzMTAwMWEyZGYyYjgiLCJpYXQiOjE3MTA1MzAzODIsImV4cCI6MTcxMTczOTk4Mn0.fcccY5IbTKhtp-3jPKsl6gbngnrGCH4KhnXYQY6j6jA';

    function handleClose() {
        setEdit(!edit);
    }

    async function editComment() {

        try {
            let res = await fetch(API + comm._id, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
                method: 'PUT',
                body: JSON.stringify({
                    email,
                    comment,
                    rate
                })
            });

            if (res.ok) {
                setLoading(false);
                setResultComment('true');
                newRefresh();

            } else {
                setLoading(false);
                setResultComment('false');

            }
        } catch (error) {

        }
    }

    return (
        <>
            <Modal show={edit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>ID Libro</Form.Label>
                                <Form.Control type="text" value={comm._id} readOnly disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Valutazione</Form.Label>
                                <Form.Control type="number" min={1} max={5} step={1} placeholder="min 1 - max 5" value={rate} onChange={(e) => setRate(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editComment}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                {resultComment === 'true' && <Alert variant='success'>
                    Commento modificato con successo!
                </Alert>}
                {resultComment === 'false' && <Alert variant='danger'>
                    C'è stato un errore nella modifica del commento!
                </Alert>}
            </Modal>
        </>
    )
}
