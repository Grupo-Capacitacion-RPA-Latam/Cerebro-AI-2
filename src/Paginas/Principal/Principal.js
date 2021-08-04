import clases_css from './Principal.module.css';
import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import URLS from "../../URLs";
import ImagenPrincipal from "../../Componentes/ImagenPrincipal/ImagenPrincipal";
import Introducciones from "../../Contenedores/Introducciones/Introducciones";
import imagenes from "../../imagenes";

const Principal = () => {
    const introducciones = [
        {
            descripcion: "Detecta y localiza rostros humanos dentro de una imagen, y devuelve cuadros delimitadores de rostros de alta precisión.",
            titulo: "Detector de Rostro",
            enlaceRedireccion: URLS.PAGINA_DETECTOR_DE_ROSTROS,
            imagenUrl: imagenes.detectorRostro
        },
        {
            descripcion: "Acceda a las noticias de última hora de todo el mundo.",
            titulo: "Noticias",
            enlaceRedireccion: URLS.PAGINA_NOTICIAS,
            imagenUrl: imagenes.noticias
        },
        {
            descripcion: "Acceda informacion de peliculas y series, vea el trailer, ultimamente eligiendo la pelicula o serie que desea disfrutar.",
            titulo: "Peliculas",
            enlaceRedireccion: URLS.PAGINA_PELICULAS,
            imagenUrl: imagenes.peliculas
        },
        {
            descripcion: "Convierta cualquier oracion a palabras dichas por un robot de acuerdo al idioma seleccionada.",
            titulo: "Text to Speech",
            enlaceRedireccion: URLS.PAGINA_TEXTO_PALABRAS,
            imagenUrl: imagenes.textSpeech
        },
        {
            descripcion: "Convierta cualquier oracion a palabras traducidas a su idioma preferida dichas por un robot.",
            titulo: "Text Interpreter",
            enlaceRedireccion: URLS.PAGINA_TEXTO_PALABRAS_TRADUCIDAS,
            imagenUrl: imagenes.interpreter,
        }
    ];


    return (
        <div className={clases_css.principal}>
            <HeaderUniversal/>
            <div className={clases_css.principal__overlay}/>
            <ImagenPrincipal/>
            <Introducciones introducciones={introducciones}/>
        </div>
    );
};

export default Principal;