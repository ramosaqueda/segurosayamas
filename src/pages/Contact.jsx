import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0bzoifg',
        'template_njswkcq',
        form.current,
        'SscZsu-RliQr-Vjzg'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Mensaje enviado a nuestro centro de contacto!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('ocurrió un error al enviar el mensaje!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };
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

              <a
                href="https://api.whatsapp.com/send?phone=56994366143"
                target="_blank"
                rel="noopener noreferrer"
              >
                Envíanos un mensaje de WhatsApp <p>+56 9 9436 6143</p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i>
                {' '}
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <h3>Envienos a:</h3>
              <a href="mailto:contacto@segurosayamas.cl">
                <p>contacto@segurosayamas.cl</p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i>
                {' '}
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <h3>Llamenos al </h3>
              <p>+56 9 9436 6143</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 ">
            {' '}
            <img src="../assets/images/contacto.jpg" alt="Contacto" />
          </div>

          <div className="col-lg-6">
            <p>Si prefiere, ingrese sus datos para contactarlo</p>
            <form id="contactForm" ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="from_name"
                  id="from_name"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="emailAddress">
                  Correo electrónico
                </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="from_email"
                  id="from_email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="phone">
                  Correo electrónico
                </label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Ej.: +56912345678"
                  name="telefono"
                  id="telefono"
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
                  name="message"
                >
                  {}
                </textarea>
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-danger btn-lg"
                  type="submit"
                  value="Send"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
