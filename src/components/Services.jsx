import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHeart,
  faPerson,
  faHome,
  faCar,
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
                <a href="/seguros/vida">SEGUROS DE VIDA</a>
              </h4>

              <p className="description">
                para proteger a los que más quieres con el seguro de vida
                complementándolo con una variedad de adicionales, para que
                puedan mantener su calidad de vida si tú llegases a faltar.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
              <h4 className="title">
                <a href="/">Seguros complementarios de salud</a>
              </h4>
              <p className="description">
                Su objetivo es asegurarte respecto a las indemnizaciones como
                una compensación de los daños corporales provenientes de
                accidentes o enfermedades.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <i className="bx">
                  <FontAwesomeIcon icon={faCar} />
                </i>
              </div>
              <h4 className="title">
                <a href="/">Seguro Automotriz</a>
              </h4>
              <p className="description">
                Contamos con una completa oferta de productos para prevenir
                daños, robos y pérdida y total, con las mejores asistencias a su
                vehículo.
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
                <a href="/">Seguro Hoga</a>
              </h4>
              <p className="description">
                Los Seguros Hogar protegen su propiedad en caso de verse
                afectada por incendio, robo y daños, y también brindan cobertura
                en caso de siniestros y accidentes domésticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
