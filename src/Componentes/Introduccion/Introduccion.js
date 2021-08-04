import clases_css from './Introduccion.module.css';
import {useRef, useState} from 'react';

const Introduccion = ({titulo, descripcion, imagen, enlaceRedireccion}) => {
    const img = useRef(null);
    const [claseCss, setClaseCss] = useState("")

    const getImgWidth = () => {
        if (img.current.naturalWidth <= 450) {
            setClaseCss(clases_css.introduccion__imagen_contenedor__imagen_especial)
        }
    };
    return (
        <div className={clases_css.introduccion}>
            <div className={clases_css.introduccion__titulo_descripcion_enlace}>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <a href={enlaceRedireccion} className={clases_css.introduccion__enlace}>Ver mas</a>
            </div>
            <div className={clases_css.introduccion__imagen_contenedor}>
                <img src={imagen} alt="" ref={img} onLoad={getImgWidth} className={claseCss}/>
            </div>
        </div>
    );
};

export default Introduccion;