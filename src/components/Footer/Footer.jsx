import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

function Footer() {

    const {theme} = useContext(ThemeContext);
    return ( 
        <>
            <footer className={`text-${theme === 'dark' ? 'light' : 'dark'} p-3 text-center`}>
                <h6>© Copyright StoryForge 2024 Created by Mirko Colella</h6>

            </footer>
        </>
     );
}

export default Footer;