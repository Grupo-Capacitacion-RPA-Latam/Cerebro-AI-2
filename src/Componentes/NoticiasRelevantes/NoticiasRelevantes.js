import clases_css from './NoticiasRelevantes.module.css';

const NoticiasRelevantes = ({noticias}) => {
    return (
        <div className={clases_css.noticias__relevantes}>
            {/*  Contenedor Relevantes -> Imagen, Descripcion, Enlace  */}
            {
                noticias.map((noticia, index) => {
                    const [imagen, descripcion, enlace, titulo] = noticia;
                    return <div className={clases_css.noticias__relevantes_contenedor} key={index}>
                        <img src={imagen}
                             alt=""
                             className={clases_css.noticias__relevantes__imagen}/>
                         <h1 className={clases_css.noticias__relevantes__titulo}>{titulo}</h1>
                        <p className={clases_css.noticias_relevantes__descripcion}>{descripcion}</p>
                        <a href={enlace} className={clases_css.noticias__relevantes__enlace}>Ver mas</a>
                    </div>
                })
            }
        </div>
    );
};

export default NoticiasRelevantes;