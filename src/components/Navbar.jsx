import React from 'react';
import logo from '../assets/images/logo-ligth.png';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 10 ? setStickyClass(' fixed-top ') : setStickyClass('');
    }
  };

  return (
    <header id="header" className={`d-flex align-items-center ${stickyClass}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
                Conozcanos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/services">
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/portfolio">
                Clientes
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/team">
                Equipo
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="/contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bi bi-lis tmobile-nav-toggle">
            {' '}
            <FontAwesomeIcon icon={faBars} />{' '}
          </i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
