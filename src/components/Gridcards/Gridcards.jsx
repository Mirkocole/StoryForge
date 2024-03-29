import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

function Gridcards({count, books}) {

    const {theme} = useContext(ThemeContext);

    if (count && books.length > 0) {
        
        let maxBook  = [];
        if (count == 0) {
            maxBook  = books;
        } else {
            
            for (let index = 0; index < count && index < books.length; index++) {
                maxBook.push(books[index]);
                
            }
        }
    
            
            return ( 
                <>
                    <Container className="my-5">
                    <h3 className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>Categoria {books[0].category.toUpperCase()}</h3>
                        <Row xs={2}  md={3} xl={4} >
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