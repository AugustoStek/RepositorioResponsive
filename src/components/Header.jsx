import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useThemeStore from '../store/themeStore';
import profile from '../data/profile.json';

import '../styles/header.css';

const Header = () => {
    const { mode, toggleMode } = useThemeStore();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className={`navbar navbar-expand-lg px-3 ${mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
            <div className="container-fluid">
                <span className="navbar-brand">
                    {profile.firstName} {profile.lastName} | {profile.title}
                </span>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-secondary ms-3" onClick={toggleMode}>
                                <FontAwesomeIcon icon={mode === 'light' ? faMoon : faSun} className="me-2" />
                                {mode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
