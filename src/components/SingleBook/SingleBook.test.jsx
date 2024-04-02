import { screen, render, fireEvent } from "@testing-library/react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import SearchContextProvider from "../../context/SearchContextProvider";
import FilterBookContextProvider from "../../context/FilterBookContextProvider";
import { BrowserRouter } from "react-router-dom";
import Gridcards from "../Gridcards/Gridcards";
import fantasy from '../../json/books/fantasy.json';
import SelectedBookContextProvider from "../../context/SelectedBookContextProvider";

test('Verifico che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato', () => {
    render(
        <ThemeContextProvider>
            <SearchContextProvider>
                <BrowserRouter>
                    <FilterBookContextProvider>
                        <SelectedBookContextProvider>

                            <Gridcards count={fantasy.length} books={fantasy} />
                        </SelectedBookContextProvider>
                    </FilterBookContextProvider>
                </BrowserRouter>
            </SearchContextProvider>
        </ThemeContextProvider>
    );

    let cardBooks = screen.getAllByTestId('card-book');

    expect(cardBooks.length).toEqual(fantasy.length);

});

test('Verifico che cliccando su un libro il suo bordo cambi colore',()=>{
    render(
        <ThemeContextProvider>
            <SearchContextProvider>
                <BrowserRouter>
                    <FilterBookContextProvider>
                        <SelectedBookContextProvider>

                            <Gridcards count={fantasy.length} books={fantasy} />
                        </SelectedBookContextProvider>
                    </FilterBookContextProvider>
                </BrowserRouter>
            </SearchContextProvider>
        </ThemeContextProvider>
    );

    let cardBook = screen.getAllByTestId('card-book');
    let imageBook = screen.getAllByTestId('imageBook');

    fireEvent.click(imageBook[0]);

    expect(cardBook[0]).toHaveClass( 'border-danger' );
    fireEvent.click(imageBook[1]);
    expect(cardBook[0]).toHaveClass( 'border-none' );
})