import React, { useState, useEffect } from 'react';
import DataSeguros from '../data/seguros.json';
const Seguros = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DataSeguros);
  }, []);

  const ShowSeguros = () => {
    return (
      <div className="row">
        {data.map((seg) => (
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div>
                <img
                  src={`/assets/images/${seg.image}`}
                  alt={seg.title}
                  className="card-img-top"
                ></img>
              </div>
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">{seg.title}</a>
              </h4>
              <p>{seg.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Seguros</h2>
          <h3>
            Revise nuestras ofertas de <span>Seguros</span>
          </h3>
          <p>Seguros Para empresas e individuales, usted decide.</p>
        </div>

        <ShowSeguros />
      </div>
    </section>
  );
};

export default Seguros;
