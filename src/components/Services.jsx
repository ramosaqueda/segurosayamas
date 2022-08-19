import React from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHeart,
  faPerson,
  faHome,
  faCar,
  faBuilding,
  faSailboat,
  
  

} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faPerson} />
                </i>
              </div>
              <h4 className="title">
                <Link to="seguros/personales">SEGUROS PERSONALES</Link>
              </h4>

              <p className="description">
              Para proteger tus bienes y, lo más preciado, tu familia y tu vida
.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faBuilding} />
                </i>
              </div>
              <h4 className="title">
                <Link to="seguros/empresas">SEGUROS EMPRESAS</Link>
              </h4>
              <p className="description">
                Distintos seguros para vehiculos, carga, construcción, incendios, etc.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faSailboat} />
                </i>
              </div>
              <h4 className="title">
                <Link to="seguros/especiales">SEGUROS ESPECIALES</Link>
              </h4>
              <p className="description">
                Contamos con una completa oferta de productos de seguros agricolas, casco marítimo, yates, y muchos más.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faHome} />
                </i>
              </div>
              <h4 className="title">
                <Link to="seguros/condominios">SEGUROS CONDOMIONIOS</Link>
              </h4>
              <p className="description">
              Maximizamos las coberturas de tu comunidad.

              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faCar} />
                </i>
              </div>
              <h4 className="title">
                <Link to="/seguros/obligatorios">SEGUROS OBLIGATORIOS</Link>
              </h4>
              <p className="description">
              Contamos con todos los seguros obligatorios.

              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
              <h4 className="title">
                <Link to="/seguros/colectivos">SEGUROS COLECTIVOS</Link>
              </h4>
              <p className="description">
              Maximisamos sus recursos para entregarles a sus colaboradores las mejores coberturas.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
