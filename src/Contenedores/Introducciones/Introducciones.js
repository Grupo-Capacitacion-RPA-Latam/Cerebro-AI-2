import Introduccion from "../../Componentes/Introduccion/Introduccion";

const Introducciones = ({introducciones}) => {
    // [
    //   {descripcion: "tal", titulo, "tal", enlaceRedireccion: "tal", imagenUrl: "tal"}
    // ]

    return (
        <div>
            {
                introducciones.map(({descripcion, titulo, enlaceRedireccion, imagenUrl}, index) =>
                    <Introduccion descripcion={descripcion}
                                  titulo={titulo}
                                  enlaceRedireccion={enlaceRedireccion}
                                  key={index}
                                  imagen={imagenUrl}/>
                )
            }
        </div>
    );
};

export default Introducciones