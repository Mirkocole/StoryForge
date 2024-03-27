import Gridcards from "../Gridcards/Gridcards";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";


function AllTheBooks({ allBooks }) {


    const { fantasy, horror, romance, scifi, history } = allBooks;
    const {selected} = useContext(SelectedBookContext);
    const {theme} = useContext(ThemeContext);


    return (
        <>
            {/* <FormSearch handlesubmit = {handlesubmit} handleInputSearch = {handleInputSearch} inputSearch = {inputSearch}/> */}
            <Container fluid>
                <Row className="">
                    <Col xs='7' md='9'>
                        <Gridcards count={4} books={fantasy} />
                        <Gridcards count={4} books={horror} />
                        <Gridcards count={4} books={romance} />
                        <Gridcards count={4} books={scifi} />
                        <Gridcards count={4} books={history} />
                    </Col>
                    <Col xs='5' md='3' className={`border-none rounded p-0 my-3 position-relative ${!selected ? 'bg-'+theme : ''}`}>
                        <CommentArea bookasin={selected}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AllTheBooks;