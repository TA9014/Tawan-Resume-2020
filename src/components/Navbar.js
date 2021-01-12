import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tpLogo from '../img/TPLogo.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar' >
                <div className='navbarContainer' >
                    <Link to='/' className='navberLogo' >
                        <img src={tpLogo} alt='logo' className='logoImg' onClick={closeMobileMenu}/>
                    </Link>

                    <div className='menuIcon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'navMenu active' : 'navMenu'} >
                        <li className='navItem' >
                            <Link to='/' className='navLinks' onClick={closeMobileMenu} >
                                Profile
                            </Link>
                        </li>
                        <li className='navItem' >
                            <Link to='/#education' className='navLinks' onClick={closeMobileMenu} >
                                Education
                            </Link>
                        </li>
                        <li className='navItem' >
                            <Link to='/#work' className='navLinks' onClick={closeMobileMenu} >
                                Work Experiences
                                </Link>
                        </li>
                        <li className='navItem' >
                            <Link to='/skill' className='navLinks' onClick={closeMobileMenu} >
                                Skills
                                </Link>
                        </li>
                        <li className='navItem' >
                            <Link to='/portfolio' className='navLinks' onClick={closeMobileMenu} >
                                Portfolio 
                            </Link> 
                        </li> 
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar