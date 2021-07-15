import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css';
import { Button } from './Button';


function Navbar(){
    const [ button, setButton ] = useState(true);
    const [ click, setClick ] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                    smooth to="#home" 
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                    >
                        <i className="fab fa-typo3" /> <p>Hess Psicología</p>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                            smooth to='#home' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            smooth to='#services' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            smooth to='#about' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Acerca de mí
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            smooth to='#blog' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contacto</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar