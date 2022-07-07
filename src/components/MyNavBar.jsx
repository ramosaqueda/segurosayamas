import React from 'react';
import '../assets/css/components/NavBar.scss';
import logo from '../assets/images/logo-ligth.png';

const MyNavBar = () => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
                Nuestra Empresa
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/seguros">
                Seguros
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/portfolio">
                Portfolio
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="/contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default MyNavBar;
