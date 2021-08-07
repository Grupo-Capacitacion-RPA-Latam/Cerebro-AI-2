import React from 'react'
import Icon from './Icon'
import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'


function Card({ title, imageSource, url, precio, text1, text2, text3 }) {
    return (
        <div>
            <HeaderUniversal/>
            <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-center bg-dark">
                                <img src={image1} alt="" />
                                <div className="card-body text-light">
                                    <h4 className="card-title">Free</h4>
                                    <h1 className="card-text text-secondary">$0/mo</h1>
                                    <p><Icon /> Acceso limitado a la informacion {text1}</p>
                                    <p><Icon /> Descargas limitadas a 2 por dia</p>
                                    <p><Icon /> Dudas atentidas Despues de un mes</p>
                                    <br></br>
                                    <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center bg-dark">
                                <img src={image2} alt="" />
                                <div className="card-body text-light">
                                    <h4 className="card-title">Basic</h4>
                                    <h1 className="card-text text-secondary">$20/mo</h1>
                                    <p><Icon /> Acceso limitado a la informacion {text1}</p>
                                    <p><Icon /> Descargar limitadas a 5 por dia</p>
                                    <p><Icon /> Dudas atendidas despues de 15 dias</p>
                                    <br></br>
                                    <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center bg-dark">
                                <img src={image3} alt="" />
                                <div className="card-body text-light">
                                    <h4 className="card-title">Standard</h4>
                                    <h1 className="card-text text-secondary">$50/mo</h1>
                                    <p><Icon /> Acceso limitado a cierta informaciom {text1}</p>
                                    <p><Icon /> Descargas limitadas a 10 por dia</p>
                                    <p><Icon /> Dudas atentidas despues de 7 dias</p>
                                    <br></br>
                                    <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center bg-dark">
                                <img src={image1} alt="" />
                                <div className="card-body text-light">
                                    <h4 className="card-title">Premium</h4>
                                    <h1 className="card-text text-secondary"> $70/mo</h1>
                                    <p><Icon /> Acceso ilimitado</p>
                                    <p><Icon /> Descargas ilimitadas</p>
                                    <p><Icon /> Dudas resueltas despues dentro de las 24 horas</p>
                                    <br></br>
                                    <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
        </div>
        
    )
}
export default Card
