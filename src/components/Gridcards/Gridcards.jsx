import { Col, Container, Row } from "react-bootstrap";
import Cardbook from "../Cardbook/Cardbook";

function Gridcards({count, books}) {

    let maxBook  = [];
    for (let index = 0; index < count; index++) {
        maxBook.push(books[index]);
        
    }

    console.log(maxBook)
    return ( 
        <>
            <Container className="my-5">
            <h3 className="text-light">Categoria {books[0].category.toUpperCase()}</h3>
                <Row>
                {
                    maxBook.map((ele) => {
                      return <Col key ={ele.asin}>
                                <Cardbook book={ele}/>
                            </Col>
                        
                    })
                }
                </Row>
            </Container>
        </>
     );
}

export default Gridcards;