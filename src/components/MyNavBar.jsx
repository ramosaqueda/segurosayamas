import React from 'react';
import '../assets/css/components/NavBar.scss';
import logo from '../assets/images/logo-ligth.png';

const MyNavBar = () => {
  return (
    <header id="header" className="transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <div id="logo">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <nav id="navbar">
          <ul id="mainmenu">
            <li>
              <a className="nav-link  active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link " href="/about">
                Nuestra Empresa
              </a>
            </li>
            <li>
              <a className="nav-link " href="/seguros">
                Seguros
              </a>
            </li>
            <li>
              <a className="nav-link  " href="/portfolio">
                Portfolio
              </a>
            </li>

            <li>
              <a className="nav-link " href="/contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="de-flex-col">
          <div className="h-phone">
            <span>Necesita Ayuda</span>
            <i className="fa fa-phone id-color-secondary"></i> 1 200 300 9000
          </div>
          <span id="menu-btn"></span>
        </div>
      </div>
    </header>
  );
};

export default MyNavBar;
