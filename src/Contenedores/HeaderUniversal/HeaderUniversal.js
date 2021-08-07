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
    };

    const dropdown = {
        title: "AI",
        links: {
            "Face Detection": URLS.PAGINA_DETECTOR_DE_ROSTROS,
            "Text to Speech": URLS.PAGINA_TEXTO_PALABRAS,
            "Text Interpreter": URLS.PAGINA_TEXTO_PALABRAS_TRADUCIDAS,
        }
    };

    return (
        <Header css={css} links={links} dropdown={dropdown} sesion={URLS.PAGINA_SESION} register={URLS.PAGINA_REGISTRAR}/>
    );
};

export default HeaderUniversal;