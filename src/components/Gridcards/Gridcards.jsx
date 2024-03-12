import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";

function Gridcards({count, books}) {

    if (count && books.length > 0) {
        console.log(books)
        let maxBook  = [];
        if (count === 'full') {
            maxBook  = books;
        } else {
            
            for (let index = 0; index < count && index < books.length; index++) {
                maxBook.push(books[index]);
                
            }
        }
    
            
            return ( 
                <>
                    <Container className="my-5">
                    <h3 className="text-light">Categoria {books[0].category.toUpperCase()}</h3>
                        <Row xs={1} md={3} lg={count}>
                        {
                           maxBook.map((ele) => {
                              return <Col key ={ele.asin}>
                                        <SingleBook book={ele}/>
                                    </Col>
                                
                            })
                        }
                        </Row>
                    </Container>
                </>
             );
        
    }

}

export default Gridcards;