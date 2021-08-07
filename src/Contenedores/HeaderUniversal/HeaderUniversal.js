import URLS from "../../URLs";
import Header from "../Header/Header";

const HeaderUniversal = (css="") => {
    if (typeof(css) === "undefined") {
        css = {
            css: ""
        }
    }

    const links = {
        "Home": URLS.PAGINA_PRINCIPAL,
        "Peliculas": URLS.PAGINA_PELICULAS,
        "Noticias": URLS.PAGINA_NOTICIAS,
        "Subscripciones": URLS.PAGINA_SUBSCRIPCION,
    };

    const dropdown = {
        title: "AI",
        links: {
            "Face Detection": URLS.PAGINA_DETECTOR_DE_ROSTROS,
            "Text to Speech": URLS.PAGINA_TEXTO_PALABRAS,
        }
    };

    return (
        <Header css={css} links={links} dropdown={dropdown} sesion={URLS.PAGINA_SESION}/>
    );
};

export default HeaderUniversal;