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
import Footer from './components/Footer/Footer';

function App() {
const books = {
  fantasy : fantasyBook,
  history : historyBook,
  horror : horrorBook,
  romance : romanceBook,
  scifi : scifiBook,
}
  return (
    <div className="bg-dark m-0">
      <MyNav />
      <Welcome />
      <Container className='pb-5'>

      <AllTheBooks books = {books} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
