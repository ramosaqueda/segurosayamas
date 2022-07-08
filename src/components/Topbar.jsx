import React from 'react';
import '../assets/css/components/TopBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Topbar = () => {
  return (
    <div id="topbar" className="text-light">
      <div className="container">
        <div className="topbar-left sm-hide">
          <span className="topbar-widget tb-social">
            <a href="/">
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
          </span>
        </div>

        <div className="topbar-right">
          <div className="topbar-right">
            <span className="topbar-widget">
              <a href="/">Politicas de Provacidad</a>
            </span>
            <span className="topbar-widget">
              <a href="/">Canales de ayuda</a>
            </span>
            <span className="topbar-widget">
              <a href="/">Preguntas Frecuentes</a>
            </span>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Topbar;
