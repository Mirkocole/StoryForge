import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Welcome() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Benvenuto su <b>StoryForge</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Siamo entusiasti di darti il benvenuto nel nostro mondo di storie e avventure.
                    <br></br>Speriamo che tu trovi ispirazione, scoperta e connessione tra le pagine dei nostri libri.
                    <br></br>Sii pronto a immergerti in nuovi mondi e ad esplorare il potere delle parole.
                    <br></br>
                    <br></br>
                    <Button variant="primary" onClick={handleClose}>
                    Buona lettura! 📚✨
                    </Button>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Welcome;