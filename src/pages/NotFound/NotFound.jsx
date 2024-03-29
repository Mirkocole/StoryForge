import React from 'react'
import '../NotFound/NotFound.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import MyNav from '../../components/MyNav/MyNav';
import Footer from '../../components/Footer/Footer';

export default function NotFound() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <MyNav hiddenSearch />
            <div className={`page404 col-12 h-100 bg-img-${theme} bg-${theme === 'dark' ? 'dark' : 'white'}`}>
            </div>
            <Footer />
        </>
    )
}
