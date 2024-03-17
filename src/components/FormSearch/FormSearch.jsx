import React from 'react'
import { Button, Form, Row,Col } from "react-bootstrap";
import { useState } from "react";

export default function FormSearch(props) {

const {handleInputSearch,handlesubmit,inputSearch} = props;



  return (
    <>
      <Form className="my-5">
        <h2 className="text-light">Cerca il tuo Libro</h2>
        <Form.Group as={Row} className="mb-3">
          <Col sm="10">
            <Form.Control type="text" placeholder="Inserisci il titolo del libro" value={inputSearch} onChange={(e) => handleInputSearch(e.target.value)} />
          </Col>
          <Col sm="2">
            <Button type="submit" onClick={(e) => handlesubmit(e)}>Cerca</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}
