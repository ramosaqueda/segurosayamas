import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  return (
    <div>
      {' '}
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                <a href="mailto:contacto@segurosayamas.cl">
                  contacto@segurosayamas.cl
                </a>
              </span>
            </i>

            <i className="d-flex align-items-center"> &nbsp;</i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="/">
              {' '}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              {' '}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              {' '}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topbar;
