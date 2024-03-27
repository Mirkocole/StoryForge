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
            <iframe className='page404' style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy9EnhqxAW7JIn8uwhyX1IM%2FTop10-404-Error-Pages-Animated-(Community)%3Ftype%3Ddesign%26node-id%3D18%253A484%26mode%3Ddesign%26t%3DLKp1Q71zBEia8Qoa-1" allowfullscreen></iframe>
            </div>
            <Footer />
        </>
    )
}
