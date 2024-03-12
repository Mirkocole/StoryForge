import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function SingleBook({book}) {

    const [selected,setSelected] = useState(false);
    const [border,setBorder] = useState('none');

    function hendleSelected(){
        setSelected((e) => {

            setBorder(!e ? 'danger' : 'none');
            return !e
        });

        
    }
    
    return ( 
        <>
            <Card style={{ height:'690px' }} className='my-3 border-4' border={selected ? 'danger' : 'none'}>
                <Card.Img variant="top" src={book.img} style={{height:'380px', objectFit:'contain', objectPosition:'center'}}/>
                <Card.Body className='d-flex flex-column justify-content-between align-items-between'>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className='fw-bolder fs-5'>
                       Category: {book.category}
                    </Card.Text>
                    <Card.Text className='fw-bolder fs-4'>
                        {book.price.toFixed(2)}€
                    </Card.Text>
                    <Button variant="primary" onClick={hendleSelected}>Aggiungi al Carrello</Button>
                </Card.Body>
            </Card>
        </>
     );
}

export default SingleBook;