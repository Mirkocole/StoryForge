import { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';
import './SingleBook.css';
import { ThemeContext } from '../../context/ThemeContextProvider';

function SingleBook({book}) {
    
    const {theme} = useContext(ThemeContext);
    
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
            <Card style={{ height:'500px' }} className='my-3 border-4' border={selected ? 'danger' : 'none'} bg={theme} text={theme === 'dark' ? 'white' : 'dark'}>
                <Card.Img variant="top" src={book.img} style={{height:'280px', objectFit:'contain', objectPosition:'center', cursor:'pointer'}} onClick={hendleSelected}/>
                <Card.Body className='d-flex flex-column justify-content-between align-items-between'>
                    <div>
                    <Card.Title className='fs-6 text-ellipsis line-clamp'>{book.title}</Card.Title>
                    <Card.Text className='fw-bolder fs-6'>
                       Category: {book.category}
                    </Card.Text>
                    <Card.Text className='fw-bolder fs-5'>
                        {book.price.toFixed(2)}€
                    </Card.Text>
                    </div>
                    <Button className='color-primary border border-none' onClick={hendleSelected}>Add to Cart</Button>
                </Card.Body>
            </Card>
            {selected && <CommentArea bookasin = {book.asin} />}
        </>
     );
}

export default SingleBook;