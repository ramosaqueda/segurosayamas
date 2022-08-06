import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Suscribase a nuestra Lista de correos</h4>
              <p>Tenemos mucha información que queremos compartir con usted.</p>
              <form>
                <input type="email" name="email" />
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
                  <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/about">Conozacanos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/services">Nuestros Servicios</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/">Terminos de Servicios</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Principales Seguros</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/seguros/personales">Seguros Personales</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/seguros/empresas">Seguros Empresas</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/seguros/especiales">Seguros Especiales</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/seguros/colectivos">Seguros Colectivos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/seguros/obligatorios">Seguros Obligatorios</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestras Redes Sociales</h4>
              <p>Elije el caal de atención que desees.</p>
              <div className="social-links mt-3">
                <a href="/" className="twitter">
                  <i className="bx bxl-twitter">
                    {' '}
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
                <a href="/" className="facebook">
                  <i className="bx bxl-facebook">
                    {' '}
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </a>
                <a href="/" className="instagram">
                  <i className="bx bxl-instagram">
                    {' '}
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </a>
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
          Designed by <a href="/">RRAMOS DEV.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
