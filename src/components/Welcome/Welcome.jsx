import Alert from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Welcome/Welcome.css'

function Welcome() {
    // const [show,setShow] = useState(true);

    // function hideMessage(){
    //     setTimeout(()=>{
    //         setShow(false);
    //     },3000)
    // }

    return (
        <>

            {/* {show && <Alert key= 'success' variant='success' className='w-75 mx-auto'>Benvenuto su StoryForge! </Alert>}
            {hideMessage()} */}

            <Container fluid className='jumbotron d-flex flex-column justify-content-center ' data-testid='welcome'>
                <Container>

                <h1 className={`text-light text-center`}>Welcome to <b>StoryForge</b></h1>
                <p className='text-light text-center'>Siamo entusiasti di darti il benvenuto  nel nostro mondo di storie e avventure. <br />Speriamo che tu trovi ispirazione, scoperta e connessione tra le pagine dei nostri libri. <br />Sii pronto a immergerti in nuovi mondi e ad esplorare il potere delle parole.<br /> Buona lettura! 📚✨</p>
                </Container>
            </Container>
        </>
    );
}

export default Welcome;