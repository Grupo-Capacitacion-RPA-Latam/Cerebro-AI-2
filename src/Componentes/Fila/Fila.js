import axios from "../../axios";
import clases_css from "./Fila.module.css";
import Youtube from "react-youtube";
import {useState, useEffect} from 'react';

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Fila({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Options for react-youtube
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

    return (
        <div className={clases_css.row}>
            <h2 style={{color: 'white'}}>{title}</h2>

            <div className={clases_css.row_posters}>
                {movies.map(
                    (movie) =>
                        movie.backdrop_path !== null && (
                            <img
                                className={`${clases_css.row_poster}`}
                                src={`${baseImgUrl}${movie.backdrop_path}`}
                                alt={movie.name}
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                            />
                        )
                )}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Fila;