import { screen, render,fireEvent } from "@testing-library/react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import SearchContextProvider from "../../context/SearchContextProvider";
import { BrowserRouter } from "react-router-dom";
import FilterBookContextProvider from "../../context/FilterBookContextProvider";
import SelectedBookContextProvider from "../../context/SelectedBookContextProvider";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import App from "../../App";

test('Verifico che il componente CommentArea venga rendirizzato correttamente',()=>{
    render(
        <ThemeContextProvider>
            <SearchContextProvider>
                <BrowserRouter>
                    <FilterBookContextProvider>
                        <SelectedBookContextProvider>

                            <AllTheBooks />
                        </SelectedBookContextProvider>
                    </FilterBookContextProvider>
                </BrowserRouter>
            </SearchContextProvider>
        </ThemeContextProvider>
    );

    // Seleziono le varie immagini dei libri
    let imageBooks = screen.getAllByTestId('imageBook');
    // Simulo il click su un libro
    fireEvent.click(imageBooks[0]);

    // Verifico che dopo il click esista e venga rendirizzato la CommentArea
    let commentArea = screen.queryByTestId('commentArea');
    
    expect(commentArea).toBeInTheDocument();
    // console.log(commentArea);
});




test('Verifico che il filtraggio dei libri attraverso la Navbar avvenga correttamente',()=>{
    render(
        <ThemeContextProvider>
            <SearchContextProvider>
                

                            <App />
                        
            </SearchContextProvider>
        </ThemeContextProvider>
    );

    
    let searchText= 'conan';
    let inputSearch = screen.getByTestId('inputSearch');
    let buttonSearch = screen.getByTestId('buttonSearch');

    fireEvent.change(inputSearch,{target : {value : searchText}})
   
    
    fireEvent.click(buttonSearch);

    
    let titleBooks = screen.getAllByTestId('titleBook');
    
    for (const title of titleBooks) {
        expect(title.textContent.toLowerCase()).toContain(searchText);
    }
});