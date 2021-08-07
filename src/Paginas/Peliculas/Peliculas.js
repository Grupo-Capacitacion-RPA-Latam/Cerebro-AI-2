import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import clases_css from './Peliculas.module.css';
import Fila from "../../Componentes/Fila/Fila";
import requests from "../../requests";
import Banner from "../../Componentes/Banner/Banner";

const Peliculas = () => {
    return (
        <div className={clases_css.peliculas}>
            <HeaderUniversal/>
            <Banner/>
            <Fila title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Fila title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Fila title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Fila title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Fila title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Fila title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Fila title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default Peliculas;