import Gridcards from "../Gridcards/Gridcards";
import { useState } from "react";
import FormSearch from "../FormSearch/FormSearch";


function AllTheBooks({ allBooks }) {


    const {fantasy,horror,romance,scifi,history} = allBooks;
   

    return (
        <>
            {/* <FormSearch handlesubmit = {handlesubmit} handleInputSearch = {handleInputSearch} inputSearch = {inputSearch}/> */}
            <Gridcards count={4} books={fantasy} />
            <Gridcards count={4} books={horror} />
            <Gridcards count={4} books={romance} />
            <Gridcards count={4} books={scifi} />
            <Gridcards count={4} books={history} />
        </>
    );
}

export default AllTheBooks;