import clases_css from './NoticiasEncontradas.module.css'


const NoticiasEncontradas = ({news}) => {
    return (
        <div className={clases_css.noticias_encontradas}>
            {/*  Contenedor Encontradas -> Imagen, Descricpion, Enlace  */}
            {
                news.forEach((n, index) => {
                    if (n.source.name !== "Hipertextual") {
                        return <div className={clases_css.noticias_encontradas__noticias_contenedor} key={index}>
                            <img src={n.urlToImage} alt=""/>
                            <h1 className={clases_css.noticias__encontradas__titulo}>{n.title}</h1>
                            <p className={clases_css.noticias_encontradas__descripcion}>{n.description}</p>
                            <a href={n.url} className={clases_css.noticias_encontradas__enlace}>Ver mas</a>
                        </div>
                    }
                })
            }
        </div>
    );
};

export default NoticiasEncontradas;