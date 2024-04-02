import React, { useContext } from 'react'
import { Button, Form, Row,Col } from "react-bootstrap";
import { SearchContext } from '../../context/SearchContextProvider';

export default function FormSearch() {

const {handleInputSearch,handlesubmit,inputSearch} = useContext(SearchContext);



  return (
    <>
      <Form className="">
        <Form.Group as={Row} className="mb-3">
          <Col sm="10">
            <Form.Control type="text" placeholder="Inserisci il titolo del libro" value={inputSearch} onChange={(e) => handleInputSearch(e.target.value)} data-testid='inputSearch'/>
          </Col>
          <Col sm="2">
            <Button type="submit" className='color-primary border border-none' onClick={(e) => handlesubmit(e)} data-testid='buttonSearch'>Cerca</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}
