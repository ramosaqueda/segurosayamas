import React from 'react';
import logo from '../assets/images/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt="" />
          </Link>
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
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    {' '}
                    CONOZCANOS
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link " to="/services">
                    NUESTROS SERVICIOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  " to="/brokeris">
                    BROKERIS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/contact">
                    CONTACTO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/contact">
                    DENUNCIA SINIESTRO
                  </Link>
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
        <Link to="index.html" className="logo">
          <img src={logo} alt="" />
        </Link>
          <ul>
            <li className="nav-item">
              <Link className="nav-link  active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
              CONOZCANOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/services">
               NUESTROS SERVICIOS
              </Link>
            </li>
            


            <li className="nav-item">
              <Link className="nav-link  " to="/brokeris">
                BROKERIS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                CONTACTO
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/contact">
              DENUNCIA TU SINIESTRO
              </Link>
            </li>

           
          </ul>
          <i className="navbar-toggler-icon"></i>

          </div>

        </nav>
      
    </header> 
*/
export default Navbar;
