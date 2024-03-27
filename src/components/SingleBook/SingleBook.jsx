import { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleBook.css';
import { ThemeContext } from '../../context/ThemeContextProvider';
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import { useNavigate } from 'react-router-dom';

function SingleBook({book,details}) {
    
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    
    const {selected,setSelected} = useContext(SelectedBookContext);
    const [border,setBorder] = useState('none');


    function hendleSelected(){

        setBorder(selected === book.asin ? 'danger' : 'none');
        setSelected((e) => {
            return e ? '' : book.asin;
        });

        
    }


    useEffect(()=>{
       
            setBorder(selected === book.asin ? 'danger' : 'none');
        
    },[selected])

    
    
    return ( 
        <>
            <Card style={{ height:'500px' }} className='my-3 border-4' border={details ?? border} bg={theme === 'dark' ? theme : 'principal'} text={theme === 'dark' ? 'white' : 'dark'}>
                <Card.Img variant="top" src={book.img} style={{height:'280px', objectFit:'contain', objectPosition:'center', cursor:'pointer'}} onClick={hendleSelected}/>
                <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
                    <div>
                    <Card.Title className='fs-6 text-ellipsis line-clamp'>{book.title}</Card.Title>
                    <Card.Text className='fw-bolder fs-6'>
                       Category: {book.category}
                    </Card.Text>
                    <Card.Text className='fw-bolder fs-5'>
                        {book.price.toFixed(2)}€
                    </Card.Text>
                    </div>
                    {details ?? <Button className='color-primary border border-none' onClick={()=> navigate('/details/'+book.asin)}>Details</Button>}
                </Card.Body>
            </Card>
        </>
     );
}

export default SingleBook;