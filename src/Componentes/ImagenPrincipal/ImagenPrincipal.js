import clases_css from './ImagenPrincipal.module.css';

const ImagenPrincipal = () => {
    return (
        <img className={clases_css.imagen}
             src="https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80" alt=""/>
    )
};

export default ImagenPrincipal