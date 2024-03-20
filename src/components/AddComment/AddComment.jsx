import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

export default function AddComment(props) {

    const { showModal, handleHidden, bookasin,newRefresh } = props;
    const [loading, setLoading] = useState(false);
    const [resultComment, setResultComment] = useState('');
    const [email, setEmail] = useState('');
    const [rate, setRate] = useState(1);
    const [comment, setComment] = useState('');
    const API = 'https://striveschool-api.herokuapp.com/api/comments/';
    // Token di autenticazione API
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY0OWY0ZTdiZWEzMTAwMWEyZGYyYjgiLCJpYXQiOjE3MTA1MzAzODIsImV4cCI6MTcxMTczOTk4Mn0.fcccY5IbTKhtp-3jPKsl6gbngnrGCH4KhnXYQY6j6jA';


    async function addComment() {

        
        
        setLoading(true);
        try {
            let res = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
                body: JSON.stringify({
                    comment: comment,
                    rate: rate,
                    elementId: bookasin,
                }),

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
            console.log(error);
            setResultComment('false');
        }

        setComment('');
        setEmail('');
        setRate('');

        setTimeout(() => {
            setResultComment('');
        }, 3000);

    }

    return (
        <>
            <Modal show={showModal} onHide={handleHidden}>
                <Modal.Header closeButton>
                    <Modal.Title>Aggiungi un Commento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID Libro</Form.Label>
                            <Form.Control type="text" value={bookasin} readOnly disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Valutazione</Form.Label>
                            <Form.Control type="number" min={1} max={5} step={1} placeholder="min 1 - max 5" maxLength={1} value={rate} onChange={(e) => setRate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHidden}>
                        Annulla
                    </Button>
                    <Button variant="primary" onClick={addComment}>
                        Aggiungi
                    </Button>
                </Modal.Footer>
            {resultComment === 'true' && <Alert variant='success'>
                Commento aggiunto con successo!
            </Alert>}
            {resultComment === 'false' && <Alert variant='danger'>
                C'è stato un errore nell'aggiunta del commento!
            </Alert>}
            </Modal>

        </>
    )
}
