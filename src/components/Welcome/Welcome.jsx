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

            <Container fluid className='jumbotron d-flex flex-column justify-content-center '>
                <h1 className={`text-light text-center`}>Welcome to <b>StoryForge</b></h1>
            </Container>
        </>
    );
}

export default Welcome;