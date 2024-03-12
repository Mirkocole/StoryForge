import React from 'react'

export default function FormSearch() {
  return (
    <>
        <Form className="my-5">
                <h2 className="text-light">Cerca il tuo Libro</h2>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Inserisci il titolo del libro" />
                    </Col>
                    <Col sm="2">
                        <Button type="submit" onClick={(e)=>{
                            e.preventDefault();
                            console.log();
                            }}>Cerca</Button>
                    </Col>
                </Form.Group>
            </Form>
    </>
  )
}
