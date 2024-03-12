import { Button, Form, Row,Col } from "react-bootstrap";
import Gridcards from "../Gridcards/Gridcards";
import { useState } from "react";


function AllTheBooks({ books }) {

//    const { fantasy, romance, scifi, history, horror } = books;

const [fantasy,setFantasy] = useState(books.fantasy);
const [horror,setHorror] = useState(books.horror);
const [romance,setRomance] = useState(books.romance);
const [scifi,setScifi] = useState(books.scifi);
const [history,setHistory] = useState(books.history);

    const [inputSearch,setInputSearch] = useState('');

    function handleInputSearch(value){
        setInputSearch(value);
    }

    function handlesubmit(e){
        let filtered;
        e.preventDefault();
       filtered = books.fantasy.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase()));
       setFantasy(filtered);
       filtered = books.romance.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase()));
       setRomance(filtered);
       filtered = books.horror.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase()));
       setHorror(filtered);
       filtered = books.scifi.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase()));
       setScifi(filtered);
       filtered = books.history.filter((book) => book.title.toLowerCase().includes(inputSearch.toLowerCase()));
       setHistory(filtered);
        
    }

   

    return (
        <>
            <Form className="my-5">
                <h2 className="text-light">Cerca il tuo Libro</h2>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Inserisci il titolo del libro" value={inputSearch} onChange={(e) => handleInputSearch(e.target.value)}/>
                    </Col>
                    <Col sm="2">
                        <Button type="submit" onClick={(e) => handlesubmit(e)}>Cerca</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Gridcards count={4} books={fantasy} />
            <Gridcards count={4} books={horror} />
            <Gridcards count={4} books={romance} />
            <Gridcards count={4} books={scifi} />
            <Gridcards count={4} books={history} />
        </>
    );
}

export default AllTheBooks;