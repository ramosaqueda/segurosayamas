import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import {
  GiPerson,
  GiShipBow,
  GiTruck,
  GiCherish,
  GiCage,
  GiFactory,
} from 'react-icons/gi';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Seguros</h2>
            <h3>
              Conozca nuestros<span>Seguros</span>
            </h3>
            <p>Tenemos una amplia variedad de Seguros.</p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble">
                    {' '}
                    <GiPerson />{' '}
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/personales">
                    Seguros Personales
                    <FaExternalLinkSquareAlt />
                  </Link>
                </h4>
                <p></p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file">
                    {' '}
                    <GiFactory />
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/empresas">
                    Seguros Empresas
                    <FaExternalLinkSquareAlt />
                  </Link>
                </h4>
                <p></p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer">
                    {' '}
                    <GiShipBow />{' '}
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/especiales">
                    Seguros especiales
                    <FaExternalLinkSquareAlt />
                  </Link>
                </h4>
                <p></p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-world">
                    <GiCage />{' '}
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/condominios">
                    Seguros de Condominios <FaExternalLinkSquareAlt />
                  </Link>
                </h4>
                <p></p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-slideshow">
                    {' '}
                    <GiTruck />
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/obligatorios">Seguros Obligatorios</Link>
                </h4>
                <p></p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-arch">
                    <GiCherish />{' '}
                  </i>
                </div>
                <h4>
                  <Link to="/seguros/colectivos"> Seguros Colectivos</Link>
                </h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
