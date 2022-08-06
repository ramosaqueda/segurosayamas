import React from 'react';
import logo from '../assets/images/logo.png';
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
    //HOME.   CONOSCANOS NUESTROS SERVICIOS EQUIPO BROKERIS CONTACTO DENUNCIA TU SINIESTRO

    <header id="header" className={`d-flex align-items-center ${stickyClass}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
              CONOSCANOS
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/services">
               NUESTROS SERVICIOS
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/team">
              EQUIPO
              </a>
            </li>


            <li>
              <a className="nav-link scrollto " href="/brokeris">
                BROKERIS
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="/contact">
                CONTACTO
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="/contact">
              DENUNCIA TU SINIESTRO
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
