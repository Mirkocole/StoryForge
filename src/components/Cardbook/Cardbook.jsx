import { Card, Button } from 'react-bootstrap';

function Cardbook({book}) {
    
    return ( 
        <>
            <Card style={{ height:'650px' }} className='my-3'>
                <Card.Img variant="top" src={book.img} style={{height:'380px', objectFit:'contain', objectPosition:'center'}}/>
                <Card.Body className='d-flex flex-column justify-content-between align-items-between'>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className='fw-bolder fs-5'>
                       Category: {book.category}
                    </Card.Text>
                    <Card.Text className='fw-bolder fs-4'>
                        {book.price.toFixed(2)}€
                    </Card.Text>
                    <Button variant="primary">Aggiungi al Carrello</Button>
                </Card.Body>
            </Card>
        </>
     );
}

export default Cardbook;