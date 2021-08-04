import URLS from "../../URLs";
import Header from "../Header/Header";

const HeaderUniversal = () => {
    const links = {
        "Home": URLS.PAGINA_PRINCIPAL,
        "Peliculas": URLS.PAGINA_PELICULAS,
        "Noticias": URLS.PAGINA_NOTICIAS
    };

    const dropdown = {
        title: "AI",
        links: {
            "Face Detection": URLS.PAGINA_DETECTOR_DE_ROSTROS,
            "Text to Speech": URLS.PAGINA_TEXTO_PALABRAS,
        }
    };

    return (
        <Header links={links} dropdown={dropdown} sesion={URLS.PAGINA_SESION}/>
    );
};

export default HeaderUniversal;