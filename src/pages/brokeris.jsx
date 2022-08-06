import React from 'react'
import PropTypes from 'prop-types'
import empresa from '../assets/images/empresas.jpeg';
import holding from '../assets/images/holding.webp';

const brokeris = props => {
  return (
   
        <div className="container">
            <div className="section-title">
                <h2>Brokeris</h2>
                <h3>
                Brokeris, la más moderna herramienta para la gestión y consulta de <span>Pólizas y Siniestros</span>
                </h3>
                <p>Acceda a la plataforma.</p>
            </div>
            <div className="col d-flex justify-content-center">
                <div className="col-sm-6 brokeris">
                    <div className="card "  >
                    <img src={empresa} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sistema Brokeris para Holdings</h5>
                        <p className="card-text">Si Ud. pertenece a un grupo de empresas o Holding, aquí podrá ver toda la información consolidada.</p>
                        <a href="https://aya.brokeris.cl/holding/" className="btn btn-primary">Ingreso Holdings</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 brokeris">
                    <div className="card ">
                    <img src={holding   } className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sistema Brokeris Empresas</h5>
                        <p className="card-text">Si Ud. pertenece a una empresas, aquí podrá ver toda la información consolidada de los seguros contratados .</p>
                        <a href="#" className="btn btn-success">Ingreso Empresas</a>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    
     
  )
}

brokeris.propTypes = {}

export default brokeris