import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slide = () => {
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 10 ? setScroll(' scrolled-offset ') : setScroll('');
    }
  };

  return (
    <>
    
      <Carousel fade className={`Carousel d-flex align-items-center ${scroll}`}>

      <Carousel.Item>
          <img
            className="d-block w-100 slideR"
            src="assets/images/slider/s3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>
              Asesoramos para que elija lo <span> + </span> conveniente
            </h1>
            <p>
            Somos Corredores de Seguros con amplia experiencia en seguros Personales y de Empresas
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideR"
            src="assets/images/slider/s2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>
              Tranquilidad, <span>para disfrutar en Familia</span>
            </h1>
            <p>
              Tenemos los mejores seguros de vida, para su tranquiidad y el de
              su familia
            </p>
          </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item>
          <img
            className="d-block w-100 slideR"
            src="assets/images/slider/s4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Confie en nosotros y descance</h1>
            <p>Nosotros nos encargamos de la gestión de su seguros</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slideR"
            src="assets/images/slider/s5.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Contamos con seguros para el hogar</h1>
            <p>En tu hogar puedes estar seguro</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slideR"
            src="assets/images/slider/s6.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Seguros para vehículos</h1>
            <p>La "joyita" debe estar segura.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slide;
