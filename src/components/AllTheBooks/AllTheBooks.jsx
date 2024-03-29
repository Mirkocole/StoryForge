import Gridcards from "../Gridcards/Gridcards";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import FilterBooks from "../FilterBooks/FilterBooks";
import { FilterBookContext } from "../../context/FilterBookContextProvider";


function AllTheBooks({ allBooks }) {


    const { fantasy, horror, romance, scifi, history } = allBooks;
    const {selected} = useContext(SelectedBookContext);
    const {theme} = useContext(ThemeContext);

    const {category,countBook} = useContext(FilterBookContext);

    useEffect(()=>{

        console.log(category)
    },[category,countBook])


    return (
        <>
            {/* <FormSearch handlesubmit = {handlesubmit} handleInputSearch = {handleInputSearch} inputSearch = {inputSearch}/> */}
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs='12' lg='9'>
                    <FilterBooks/>
                    {category && category.map((el,index)=>{
                       return <Gridcards key={index} count={countBook} books={allBooks[el]} />
                    })}
                    </Col>
                    <Col xs='0' lg='3' className={`border-none rounded p-0 my-3 position-relative ${!selected ? 'd-none':'' }`}>
                        <CommentArea bookasin={selected}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AllTheBooks;