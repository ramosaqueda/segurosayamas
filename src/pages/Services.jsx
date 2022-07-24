import React from 'react';
import {
  BsFillFilePersonFill,
  BsBuilding,
  BsTruck,
  BsFillEmojiDizzyFill,
  BsFillSignpostSplitFill,
  BsFillPeopleFill,
  BsFillHandIndexFill,
} from 'react-icons/bs';

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
                    <BsFillFilePersonFill />{' '}
                  </i>
                </div>
                <h4>
                  <a href="/seguros/vida">
                    Seguros de Vida <BsFillHandIndexFill />
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
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
                    <BsBuilding />
                  </i>
                </div>
                <h4>
                  <a href="/seguros/empresas">
                    Seguros Empresas
                    <BsFillHandIndexFill />
                  </a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
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
                    <BsTruck />{' '}
                  </i>
                </div>
                <h4>
                  <a href="/seguros/automotriz">
                    Seguros Automotriz
                    <BsFillHandIndexFill />
                  </a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
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
                    <BsFillEmojiDizzyFill />{' '}
                  </i>
                </div>
                <h4>
                  <a href="/seguros/accidentes">
                    Seguros de Accidentes <BsFillHandIndexFill />
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
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
                    <BsFillSignpostSplitFill />
                  </i>
                </div>
                <h4>
                  <a href="/">Seguros de viaje</a>
                </h4>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
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
                    <BsFillPeopleFill />{' '}
                  </i>
                </div>
                <h4>
                  <a href="/"> Seguros Colectivos</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
