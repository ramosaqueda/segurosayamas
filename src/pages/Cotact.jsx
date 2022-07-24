import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Cotact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h3>
            <span>Contactenos</span>
          </h3>
          <p>
            En A&A +, nuestra principal misión es ayudar a nuestros clientes
            para que tomen las mejores deciciones, deciones de vida, sabemos la
            importancia de sentirse seguro en cada momento, por esta razón,
            estamos prestos a responder sus consultas y a considerar sus
            sugerencias.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i>
                {' '}
                <FontAwesomeIcon icon={faWhatsapp} />
              </i>
              <h3>WhatSapp</h3>
              <p>+56 9 123456789</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i>
                {' '}
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <h3>Envienos a:</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i>
                {' '}
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <h3>Llamenos al </h3>
              <p>+56 9 12345678</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 ">
            {' '}
            <img src="assets/images/contacto.jpg" alt="Contacto" />
          </div>

          <div className="col-lg-6">
            <p>Si prefiere, ingrese sus datos para contactarlo</p>
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="emailAddress">
                  Correo electrónico
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Su Consulta
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Su consulta u opinión"
                >
                  {}
                </textarea>
              </div>

              <div className="d-grid">
                <button className="btn btn-danger btn-lg" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cotact;
