import { useState, useEffect } from 'react';
import './css/AppNavbar.css';
import { Link } from 'react-router';
import logo from '../imgs/White.png';
import {FaBars} from "react-icons/fa"
function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: "transparent",
        transition: "all 0.3s ease-in-out",
    });

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarStyle({
            backgroundColor: "rgba(0,0,0,0.4)",
            transition: "all 0.3s ease-in-out",
            backdropFilter: "blur(20px)"
            });
        } else {
            setNavbarStyle({
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
            });
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="navbar" style={navbarStyle}>
        <div className="container nav-container">
            <div className='toggler-cont'>
                <button className={`nav-toggler ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                    <span className="nav-toggler-icon"></span>
                </button>
            </div>
            <div className='toogl'>
                <FaBars className='fa'/>
                <div className={`navbar-links  navs ${isOpen ? 'open' : ''}`}>
                <Link className="nav-link font-q" to="/" onClick={handleLinkClick}>Home</Link>
                <Link className="nav-link font-q" to="/about" onClick={handleLinkClick}>About Us</Link>
                <Link className="nav-link font-q" to="/sectors" onClick={handleLinkClick}>Sectors</Link>
                <a className="nav-link font-q" href="/#conference" onClick={handleLinkClick}>Neo Gen</a>
                <a className="nav-link font-q" href="/#agenda" onClick={handleLinkClick}>Agenda</a>
                <a className="nav-link font-q" href="/#speakers" onClick={handleLinkClick}>Speakers</a>
                <a className="nav-link font-q" href="/#sponsors" onClick={handleLinkClick}>Sponsors</a>
                <a className="nav-link font-q" href="/#media-partners" onClick={handleLinkClick}>Media Partners</a>
                <a className="nav-link font-q" href="/#form" onClick={handleLinkClick}>Contact</a>
            </div>
            </div>
            <div className='navbar-brand-logo'>
            <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
                <img src={logo} width={"100%"} alt='Digital future pioneers' />
            </Link>
            </div>
            <div className='btn-cont'>
                <div className='reg-button ms-auto'>
                    <Link to="/#form" onClick={handleLinkClick} className="reg">Register Now</Link>
                </div>
            </div>
            <div className={`navbar-links  navs ${isOpen ? 'open' : ''}`}>
                <Link className="nav-link font-q" to="/" onClick={handleLinkClick}>Home</Link>
                <Link className="nav-link font-q" to="/about" onClick={handleLinkClick}>About Us</Link>
                <Link className="nav-link font-q" to="/sectors" onClick={handleLinkClick}>Sectors</Link>
                <a className="nav-link font-q" href="/#conference" onClick={handleLinkClick}>Neo Gen</a>
                <a className="nav-link font-q" href="/#agenda" onClick={handleLinkClick}>Agenda</a>
                <a className="nav-link font-q" href="/#speakers" onClick={handleLinkClick}>Speakers</a>
                <a className="nav-link font-q" href="/#sponsors" onClick={handleLinkClick}>Sponsors</a>
                <a className="nav-link font-q" href="/#media-partners" onClick={handleLinkClick}>Media Partners</a>
                <a className="nav-link font-q" href="/#form" onClick={handleLinkClick}>Contact</a>
            </div>
        </div>
        </nav>
    );
}

export default AppNavbar;
