import { useEffect, React } from 'react';
import { useParams } from 'react-router';
import data from '../data/seguros.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Seguros = (props) => {
  const { slug } = useParams();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let prodSlug = data.filter((product) => product.categoria.includes(slug));

  /*
  useEffect(() => {
    setTimeout(() => {
      fetch('../data/seguros.json')
        .then((Response) => Response.json())
        .then((data) => console.log(data));
    }, 2000);
  }, []);
*/
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h3>
              A&A Más <span>Corredores de Seguros</span>
            </h3>
            <p>
              A&A Más Corredores de seguros está presente desde 1998, una
              compañía familair formada e integrada por profesionales de vasta
              trayectoria en el mercado. Nuestros profesionales manejan las
              diferentes áreas de Seguros, lo que le permite a nuestros clientes
              sentirse apoyados en todas sus desciones. Manejamos una diversa
              cartera de servicios con las principlaes Aseguradoras nacionales e
              internacionales que operan en el país.
            </p>
          </div>

          {prodSlug.map((data, key) => {
            return (
              <div className="row" id="seguros">
                <div
                  className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={data.imagen} className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>{data.title} </h3>
                  <p className="fst-italic">{data.descripcion}</p>

                  <ul>
                    {data.caracterisitcas.map((cart, k) => {
                      return (
                        <li>
                          {' '}
                          <FontAwesomeIcon icon={faCheckCircle} /> {cart}
                        </li>
                      );
                    })}
                  </ul>

                  <button type="button" className="btn btn-primary">
                    Contratar
                  </button>
                </div>

                <div
                  className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                ></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Seguros;
