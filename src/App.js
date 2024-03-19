import ThemeContextProvider, { ThemeContext } from './context/ThemeContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fantasyBook from './json/books/fantasy.json';
import historyBook from './json/books/history.json';
import horrorBook from './json/books/horror.json';
import romanceBook from './json/books/romance.json';
import scifiBook from './json/books/scifi.json';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import MyNav from './components/MyNav/MyNav';
import Welcome from './components/Welcome/Welcome';
import { Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {

 const {theme} = useContext(ThemeContext);

  const books = {
    fantasy: fantasyBook,
    history: historyBook,
    horror: horrorBook,
    romance: romanceBook,
    scifi: scifiBook,
  }



  const [fantasy, setFantasy] = useState(books.fantasy);
  const [horror, setHorror] = useState(books.horror);
  const [romance, setRomance] = useState(books.romance);
  const [scifi, setScifi] = useState(books.scifi);
  const [history, setHistory] = useState(books.history);


  let allBooks = {
    fantasy,
    horror,
    romance,
    scifi,
    history
  }

  const [inputSearch, setInputSearch] = useState('');

  function handleInputSearch(value) {
    setInputSearch(value);
  }

  function handlesubmit(e) {
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
      <Container fluid className={`${theme === 'dark' ? 'bg-gradient':'bg-light'}  m-0 p-0 d-flex flex-column justify-content-center`}>
        <MyNav books={books} handlesubmit={handlesubmit} handleInputSearch={handleInputSearch} inputSearch={inputSearch} />
        <Welcome />
        <Container className='pb-5'>

          <AllTheBooks allBooks={allBooks} />
        </Container>
        <Footer />
      </Container>
  );
}

export default App;
