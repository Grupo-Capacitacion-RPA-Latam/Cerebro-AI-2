import React, { useState, useEffect } from "react";
import requests from "../../requests";
import "./Banner.css";

const apiBase = "https://api.themoviedb.org/3";

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiBase}${requests.fetchNetflixOriginals}`);
            const data = await response.json();
            setMovie(
                data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                    ]
            );
            return data;
        };
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backdropPosition: "center center",
            }}
        >
            {/* Background image */}
            <div className="banner_contents">
                {/* title */}
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* 2 buttons */}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List </button>
                </div>

                {/* description */}
                <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    );
}

export default Banner;
