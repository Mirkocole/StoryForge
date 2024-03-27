import React, { createContext, useState } from 'react'
import fantasyBook from '../json/books/fantasy.json';
import historyBook from '../json/books/history.json';
import horrorBook from '../json/books/horror.json';
import romanceBook from '../json/books/romance.json';
import scifiBook from '../json/books/scifi.json';

export const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {

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

    function handleInputSearch(val) {
        setInputSearch(val);
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

    const value = {
        inputSearch,
        setInputSearch,
        handleInputSearch,
        handlesubmit,
        allBooks,
        books
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}
