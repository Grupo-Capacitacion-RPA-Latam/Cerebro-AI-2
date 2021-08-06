import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import {useEffect, useState, Fragment} from 'react';
import clases_css from './Noticias.module.css';
import NoticiasPrincipal from "../../Componentes/NoticiasPrincipal/NoticiasPrincipal";
import NoticiasRelevantes from "../../Componentes/NoticiasRelevantes/NoticiasRelevantes";

const Noticias = () => {
    const [news, setNews] = useState([]);
    const [showNews, setShowNews] = useState(false);
    const [relevantNews, setRelevantNews] = useState([]);

    const fetchNews = async function() {
        const responseOtherNews = await fetch('https://newsapi.org/v2/everything?q=noticias&language=es&apiKey=2659c06506b34d248e8054101ff4f6c4');
        const dataOtherNews = await responseOtherNews.json();

        const responseTopNews = await fetch('https://newsapi.org/v2/top-headlines?q=noticias&language=es&apiKey=2659c06506b34d248e8054101ff4f6c4');
        const dataTopNews = await responseTopNews.json();

        setNews([
            dataOtherNews.articles,
            dataTopNews.articles,
        ])
    };

    useEffect(() => {
        fetchNews().then(() => {
            setShowNews(true);
        });

        if (showNews) {
            setRelevantNews([
                [
                    news[1][1].urlToImage,
                    news[1][1].description,
                    news[1][1].url,
                    news[1][1].title,
                ],
                [
                    news[1][2].urlToImage,
                    news[1][2].description,
                    news[1][2].url,
                    news[1][2].title,
                ],
                [
                    news[1][3].urlToImage,
                    news[1][3].description,
                    news[1][3].url,
                    news[1][4].title,
                ],
            ])
        }
    }, [showNews, news]);
    console.log(news);

    return (
        <Fragment>
            <HeaderUniversal/>
            <div className={clases_css.noticias__inferior}>
                <div className={clases_css.noticias__principal__relevante}>
                    {
                        showNews ?
                            <NoticiasPrincipal descripcion={news[1][0].description}
                                               titulo={news[1][0].title}
                                               imagen={news[1][0].urlToImage}
                                               enlace={news[1][0].url}/> :
                            null
                    }
                    {
                        showNews ? <NoticiasRelevantes noticias={relevantNews}/> : null
                    }
                    {/*<NoticiasRelevantes/>*/}
                </div>

                <div className={clases_css.noticias_encontradas}>
                    {/*  Contenedor Encontradas -> Imagen, Descricpion, Enlace  */}
                </div>
            </div>
        </Fragment>
    );
};

export default Noticias;