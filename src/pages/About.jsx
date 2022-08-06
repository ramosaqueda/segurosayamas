import React from 'react';

import about from '../assets/images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckDouble,
  faUserTie,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/images/background/subheader4.jpg';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section
        id="subheader"
        className="text-light"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="spacer-single"></div>
                <h1> CONOZCANOS </h1>
                <h2>somos A&A .</h2>
                <h3>
                  {' '}
                  <FontAwesomeIcon icon={faPlus} />{' '}
                </h3>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Acera de...</h2>
            <h3>
              A&A Más <span>Corredores de Seguros</span>
            </h3>
            <p>
            En A&A + LTDA, nuestra principal misión es ayudar a nuestros clientes para que tomen las mejores decisiones en su vida, sabemos la importancia de sentirse seguro en cada momento, por esta razón, estamos prestos a responder sus consultas y a considerar sus sugerencias.

            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Motivos de por que elegirnos</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </i>
                  <div>
                    <h5>Seguridad y confianza</h5>
                    <p>
                      Somos transparentes, te ofrecemos protección en el área de
                      salud y seguros generales a precios éticos, sin comisiones
                      fantasmas e incentivos perversos.
                    </p>
                  </div>
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faUserTie} />
                  </i>
                  <div>
                    <h5>Profesionales independientes</h5>
                    <p>
                      Sin duda, contratar a un corredor como mediador de seguros
                      es la mejor opción para tu empresa. Sin vinculación con
                      las compañías los corredores de seguros están en medio de
                      la operación, mediando para que los riesgos asegurados
                      queden completamente cubiertos en caso de siniestro.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                Buscamos entre las compañías aseguradoras cuál es la mejor
                opción para ti. Realizamos un estudio financiero, analizamos los
                posibles riesgos y estudiamos las mejores ofertas del mercado
                según tu actividad. En ocasiones, nos hemos encontrado con
                empresas que no tienen totalmente cubierta su actividad y sus
                riesgos, con pólizas generales y coberturas básicas y en caso de
                siniestro el daño es doble.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
