import { Button, Form, Row,Col } from "react-bootstrap";
import Gridcards from "../Gridcards/Gridcards";
import { useState } from "react";
import FormSearch from "../FormSearch/FormSearch";


function AllTheBooks({ books }) {


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
            <FormSearch handlesubmit = {handlesubmit} handleInputSearch = {handleInputSearch} inputSearch = {inputSearch}/>
            <Gridcards count={4} books={fantasy} />
            <Gridcards count={4} books={horror} />
            <Gridcards count={4} books={romance} />
            <Gridcards count={4} books={scifi} />
            <Gridcards count={4} books={history} />
        </>
    );
}

export default AllTheBooks;