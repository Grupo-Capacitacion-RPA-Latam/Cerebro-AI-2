import clases_css from './NoticiasPrincipal.module.css'

const NoticiasPrincipal = ({imagen, descripcion, enlace, titulo}) => {
    return (
        <div className={clases_css.noticias__principal}>
            {/*  Contenedor Principal -> Imagen, Descripcion, Enlace  */}
            <img src={imagen}
                 alt=""
                 className={clases_css.noticias__principal__imagen}/>
             <h2 className={clases_css.noticias__principal__titulo}>{titulo}</h2>
            <p className={clases_css.noticias__principal__descripcion}>{descripcion}</p>
            <a href={enlace} className={clases_css.noticias__principal__enlace}>
                Ver mas
            </a>
        </div>
    );
};

export default NoticiasPrincipal;

