import clases_css from './Introduccion.module.css';


const Introduccion = ({titulo, descripcion, imagen, enlaceRedireccion}) => {
    return (
        <div className={clases_css.introduccion}>
            <div className={clases_css.introduccion__titulo_descripcion_enlace}>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <a href={enlaceRedireccion} className={clases_css.introduccion__enlace}>Ver mas</a>
            </div>
            <img src={imagen} alt=""/>
        </div>
    );
};

export default Introduccion;