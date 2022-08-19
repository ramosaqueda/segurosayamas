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
            En A&A + LTDA, nuestra principal misión es ayudar a nuestros clientes para que tomen las mejores decisiones en su vida, sabemos la importancia de sentirse seguro en cada momento, por esta razón, estamos prestos a responder sus consultas y a considerar sus sugerencias.
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
 

        

                  
                    {data.url  ? <a href={data.url} target="blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary"> {data.url_desc}</button></a> : ''}
                  
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
