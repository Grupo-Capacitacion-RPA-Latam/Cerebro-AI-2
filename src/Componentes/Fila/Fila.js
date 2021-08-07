import clases_css from "./Fila.module.css";
import Youtube from "react-youtube";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import types from "../../redux/actions/actionTypes";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
const apiBase = "https://api.themoviedb.org/3";

const Fila = ({ title, fetchUrl }) => {
    const state = useSelector(state => state.moviesPage);
    const dispatch = useDispatch();

    // Options for react-youtube
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch(`${apiBase}${fetchUrl}`);
            const requestData = await request.json();
            return requestData.results;
        };

        fetchData().then((movies) => {
            dispatch({
                type: types.moviesPage.SET_MOVIES,
                payload: [title, movies]
            });
        });
        // eslint-disable-next-line
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (state.trailer) {
            dispatch({
                type: types.moviesPage.SET_TRAILER,
                payload: '',
            });
        } else {
            let trailerData = await fetch(`${apiBase}/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`);
            const trailer = await trailerData.json();
            dispatch({
                type: types.moviesPage.SET_TRAILER,
                payload: trailer.results[0]?.key
            })
        }
    };

    return (
        <div className={clases_css.row}>
            <h2 style={{color: 'white'}}>{title}</h2>

            <div className={clases_css.row_posters}>
                {
                    state.movies.map((data) => {
                        let movieElements = [];
                        const [category, movieList] = data;
                        if (category === title) {
                            movieElements = movieList.map(movie => {
                                return movie.backdrop_path !== null && (
                                    <img
                                        className={`${clases_css.row_poster}`}
                                        src={`${baseImgUrl}${movie.backdrop_path}`}
                                        alt={movie.name}
                                        key={movie.id}
                                        onClick={() => handleClick(movie)}
                                    />
                                )
                            });
                        }
                        return movieElements
                    })
                }
            </div>
            {state.trailer && <Youtube videoId={state.trailer} opts={opts} />}
        </div>
    );
};

export default Fila;