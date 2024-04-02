import ThemeContextProvider, { ThemeContext } from './context/ThemeContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fantasyBook from './json/books/fantasy.json';
import historyBook from './json/books/history.json';
import horrorBook from './json/books/horror.json';
import romanceBook from './json/books/romance.json';
import scifiBook from './json/books/scifi.json';
import MyNav from './components/MyNav/MyNav';
import Welcome from './components/Welcome/Welcome';
import { Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Footer from './components/Footer/Footer';
import SelectedBookContextProvider from './context/SelectedBookContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import { SearchContext } from './context/SearchContextProvider';
import FilterBookContextProvider from './context/FilterBookContextProvider';



function App() {

  const { theme } = useContext(ThemeContext);



  return (
    <BrowserRouter>

      <FilterBookContextProvider>

        <SelectedBookContextProvider>
          <Container fluid className={`${theme === 'dark' ? 'bg-gradient' : 'bg-light'}  m-0 p-0 d-flex flex-column justify-content-center`}>


            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/details/:asin' element={<Details />} />
              <Route path='*' element={<NotFound />} />
            </Routes>


          </Container>
        </SelectedBookContextProvider>
      </FilterBookContextProvider>
    </BrowserRouter>
  );
}

export default App;
