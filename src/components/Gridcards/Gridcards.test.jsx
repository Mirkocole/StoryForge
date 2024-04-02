import { screen, render } from "@testing-library/react";
import Gridcards from "./Gridcards";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import SearchContextProvider from "../../context/SearchContextProvider";
import FilterBookContextProvider from "../../context/FilterBookContextProvider";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import App from "../../App";
import SelectedBookContextProvider from "../../context/SelectedBookContextProvider";
import fantasy from '../../json/books/fantasy.json';

test('Prova Gridcards', () => {

    render(
        <ThemeContextProvider>
            <SearchContextProvider>
                <FilterBookContextProvider>
                    <SelectedBookContextProvider>

                        <App />
                    </SelectedBookContextProvider>
                </FilterBookContextProvider>
            </SearchContextProvider>
        </ThemeContextProvider>
    );
    // const element = screen.getByTestId('test');
    const element2 = screen.getAllByTestId('test2');

    expect(element2.length).toBeGreaterThan(0);
    expect(element2[0]).toBeInTheDocument();

});
