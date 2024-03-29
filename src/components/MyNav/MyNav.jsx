import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect, useState } from 'react';
import FormSearch from '../FormSearch/FormSearch';
import { HiSun,HiMoon } from "react-icons/hi2";
import { ThemeContext } from '../../context/ThemeContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';

function MyNav({hiddenSearch}) {

    const {theme,setTheme} = useContext(ThemeContext);

    const navigate = useNavigate();

    

    return (
        <>
        <Navbar expand="lg" className={`bg-${theme} shadow`} variant={theme}>
            <Container>
                <div  className='navbar-brand' style={{color:'#97cbd5',cursor : 'pointer'}} onClick={()=> navigate('/')}> <img src='../logo.png' style={{width:'70px'}}/> StoryForge</div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/browse">Browse</Link>
                        <button className='btn'>
                            {theme === 'dark' ? <HiSun className='fs-3 text-light' onClick={()=> setTheme((prev) => prev === 'dark' ? 'light' : 'dark')} /> : <HiMoon className='fs-3' onClick={()=> setTheme((prev) => prev === 'dark' ? 'light' : 'dark')}/>}
                        </button>
                    </Nav>
                {hiddenSearch ?? <FormSearch/>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {hiddenSearch ?? <Welcome />} 
        </>
    );
}

export default MyNav;