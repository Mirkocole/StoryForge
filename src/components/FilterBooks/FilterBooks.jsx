import React from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import { FilterBookContext } from '../../context/FilterBookContextProvider';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function FilterBooks() {

    const categories = [
        'fantasy',
        'horror',
        'romance',
        'scifi',
        'history',
    ];

    const {category,countBook,setCategory,setCountBook} = useContext(FilterBookContext);
    const {theme} = useContext(ThemeContext);

    function handleCategory(e){

        if (e.target.checked && !category.includes(e.target.name)) {
            setCategory((prev) => [...prev,e.target.name]);
        }else if(!e.target.checked && category.includes(e.target.name)){
            setCategory((prev) => prev.filter(el => el !== e.target.name))
        }

    }

    function handleCountBook(e){
        setCountBook(e.target.value);
    }

    return (
        <>
            <Container fluid className={`p-4 border shadow sticky-top mt-3 bg-${theme} rounded text-${theme == 'dark' ? 'light' : 'dark'}`}>
                
                <Form>
                        <h3>Filtro Libreria</h3>
                    <Form.Group as={Row} className='justify-content-center align-items-start'>
                        
                        <Col>
                            <h5>Categoria</h5>
                            {categories.map((el,index)=>{
                                return <Form.Check
                                key={index}
                                inline
                                label={el}
                                name={el}
                                type="switch"
                                id={`inline-switch-${index}`}
                                onChange={(e)=> handleCategory(e)}
                                checked = {category.includes(el) ? true : false}
                            />
                            })}
                            
                        </Col>
                        <Col >
                            <h5>Numero Risultati</h5>
                            <span>(Seleziona 0 per tutti i risultati)</span>
                            <Form.Control
                                type="number"
                                id="countResult"
                                aria-describedby="number of results"
                                placeholder='digit number of result or 0 for all books'
                                value={countBook}
                                min={0}

                                onChange={(e)=>handleCountBook(e)}
                            />

                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
