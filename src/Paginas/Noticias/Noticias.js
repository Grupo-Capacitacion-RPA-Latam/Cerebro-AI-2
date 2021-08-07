import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import {useEffect, Fragment} from 'react';
import clases_css from './Noticias.module.css';
import NoticiasPrincipal from "../../Componentes/NoticiasPrincipal/NoticiasPrincipal";
import NoticiasRelevantes from "../../Componentes/NoticiasRelevantes/NoticiasRelevantes";
import {useSelector, useDispatch} from "react-redux";
import types from "../../redux/actions/actionTypes";
import NoticiasEncontradas from "../../Componentes/NoticiasEncontradas/NoticiasEncontradas";

const Noticias = () => {
    const news = useSelector(state => state.newsPage);
    const dispatch = useDispatch();

    const fetchNews = async function() {
        const responseOtherNews = await fetch('https://newsapi.org/v2/everything?q=noticias&language=es&apiKey=2659c06506b34d248e8054101ff4f6c4');
        const dataOtherNews = await responseOtherNews.json();

        const responseTopNews = await fetch('https://newsapi.org/v2/top-headlines?q=noticias&language=es&apiKey=2659c06506b34d248e8054101ff4f6c4');
        const dataTopNews = await responseTopNews.json();

        return [dataOtherNews.articles, dataTopNews.articles];
    };

    useEffect(() => {
        if (news.news.length === 0) {
            fetchNews().then(([otherNews, topNews]) => {
                dispatch({
                    type: types.newsPage.SET_NEWS,
                    payload: {
                        news: [
                            otherNews,
                            topNews
                        ],
                        relevantNews: [
                            [
                                topNews[1].urlToImage,
                                topNews[1].description,
                                topNews[1].url,
                                topNews[1].title,
                            ],
                            [
                                topNews[2].urlToImage,
                                topNews[2].description,
                                topNews[2].url,
                                topNews[2].title,
                            ],
                            [
                                topNews[3].urlToImage,
                                topNews[3].description,
                                topNews[3].url,
                                topNews[3].title,
                            ],
                            [
                                topNews[4].urlToImage,
                                topNews[4].description,
                                topNews[4].url,
                                topNews[4].title,
                            ],
                        ],
                        showNews: true,
                    }
                });
            }).catch(() => alert("[-] No ha podido cargar la pagina por 'cors policy'."))
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <HeaderUniversal/>
            <div className={clases_css.noticias__inferior}>
                <div className={clases_css.noticias__principal__relevante}>
                    {
                        news.showNews ?
                            <NoticiasPrincipal descripcion={news.news[1][0].description}
                                               titulo={news.news[1][0].title}
                                               imagen={news.news[1][0].urlToImage}
                                               enlace={news.news[1][0].url}/> :
                            null
                    }
                    {
                        news.showNews ? <NoticiasRelevantes noticias={news.relevantNews}/> : null
                    }
                </div>

                {
                    news.showNews ?
                        <NoticiasEncontradas news={news.news[0]}/> : null
                }

            </div>
        </Fragment>
    );
};

export default Noticias;