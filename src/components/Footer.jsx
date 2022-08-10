import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0bzoifg',
        'template_t8ysxi6',
        form.current,
        'SscZsu-RliQr-Vjzg'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Se ha registrado en nuestra  de contacto!', {
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
    <footer id="footer">
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
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Suscribase a nuestra Lista de correos</h4>
              <p>Tenemos mucha información que queremos compartir con usted.</p>
              <form id="contactForm" ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  placeholder="Email"
                  name="from_email"
                  id="from_email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                Seguros A&A<span>+</span> Ltda.
              </h3>
              <p>
                La Serena
                <br />
                Región de Coquimbo
                <br />
                <br />
                <strong>Telefono:</strong> +56 9 9436 6143
                <br />
                <strong>Email:</strong> contacto@segurosayamas.cl
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Navegar</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/about">Conozacanos</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/services">Nuestros Servicios</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/">Terminos de Servicios</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Principales Seguros</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/seguros/personales">Seguros Personales </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/seguros/empresas">Seguros Empresas </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/seguros/especiales">Seguros Especiales </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/seguros/colectivos">Seguros Colectivos </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link to="/seguros/obligatorios">Seguros Obligatorios </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestras Redes Sociales</h4>
              <p>Elije el canal de atención que desees.</p>
              <div className="social-links mt-3">
                <Link to="/" className="twitter">
                  <i className="bx bxl-twitter">
                    {' '}
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </Link>
                <Link to="/" className="facebook">
                  <i className="bx bxl-facebook">
                    {' '}
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </Link>
                <Link to="/" className="instagram">
                  <i className="bx bxl-instagram">
                    {' '}
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Seguros A&A MAS</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link to="/">RRAMOS DEV.</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
