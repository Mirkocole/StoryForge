import Gridcards from "../Gridcards/Gridcards";


function AllTheBooks({books}) {

const {fantasy,romance,scifi,history,horror} = books;

console.log(horror)

    return (
        <>
            <Gridcards count = {4} books = {fantasy}/>
            <Gridcards count = {4} books = {horror}/>
            <Gridcards count = {4} books = {romance}/>
            <Gridcards count = {4} books = {scifi}/>
            <Gridcards count = {4} books = {history}/>
        </>
    );
}

export default AllTheBooks;