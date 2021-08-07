import Introduccion from "../../Componentes/Introduccion/Introduccion";
import {Fragment} from 'react';

const Introducciones = ({introducciones}) => {
    // [
    //   {descripcion: "tal", titulo, "tal", enlaceRedireccion: "tal", imagenUrl: "tal"}
    // ]

    return (
        <Fragment>
            {
                introducciones.map(({descripcion, titulo, enlaceRedireccion, imagenUrl}, index) =>
                    <Introduccion descripcion={descripcion}
                                  titulo={titulo}
                                  enlaceRedireccion={enlaceRedireccion}
                                  key={index}
                                  imagen={imagenUrl}/>
                )
            }
        </Fragment>
    );
};

export default Introducciones