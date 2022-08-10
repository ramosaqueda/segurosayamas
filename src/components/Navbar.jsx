import React from 'react';
import logo from '../assets/images/logo.png';
import { useState, useEffect } from 'react';

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
    <>
      <div id="header" className={`d-flex align-items-center ${stickyClass}`}>
        <div>
          <a className="navbar-brand logo" href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link   " href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/about">
                    CONOZCANOS
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " href="/services">
                    NUESTROS SERVICIOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " href="/brokeris">
                    BROKERIS
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/contact">
                    CONTACTO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/contact">
                    DENUNCIA SINIESTRO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

/*


        



    <header id="header" className={`d-flex align-items-center ${stickyClass}`}>
      
       
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo">
          <img src={logo} alt="" />
        </a>
          <ul>
            <li className="nav-item">
              <a className="nav-link  active" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
              CONOZCANOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/services">
               NUESTROS SERVICIOS
              </a>
            </li>
            


            <li className="nav-item">
              <a className="nav-link  " href="/brokeris">
                BROKERIS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/contact">
                CONTACTO
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/contact">
              DENUNCIA TU SINIESTRO
              </a>
            </li>

           
          </ul>
          <i className="navbar-toggler-icon"></i>

          </div>

        </nav>
      
    </header> 
*/
export default Navbar;
