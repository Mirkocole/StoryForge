import Alert from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Welcome() {
    const [show,setShow] = useState(true);

    function hideMessage(){
        setTimeout(()=>{
            setShow((prev) => {
                return prev = false
            });
        },3000)
    }

    return (
        <>

            {show && <Alert key= 'success' variant='success' className='w-75 mx-auto'>Benvenuto su StoryForge! </Alert>}
            {hideMessage()}
        </>
    );
}

export default Welcome;