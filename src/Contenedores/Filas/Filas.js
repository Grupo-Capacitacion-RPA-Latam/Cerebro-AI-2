import {Fragment} from 'react';
import Fila from "../../Componentes/Fila/Fila";

const Filas = ({dataPeliculas}) => {
    return (
        <Fragment>
            {
                dataPeliculas.map(data => {
                    const {categoria, peliculas} = data;
                    return <Fila peliculas={peliculas} titulo={categoria}/>
                })
            }
        </Fragment>
    );
};

export default Filas;
