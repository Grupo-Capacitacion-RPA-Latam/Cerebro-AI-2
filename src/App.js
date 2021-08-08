import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import URLS from "./URLs";
import DetectorRostro from "./Paginas/DetectorRostro/DetectorRostro";
import Peliculas from "./Paginas/Peliculas/Peliculas";
import Principal from "./Paginas/Principal/Principal";
import TextoPalabras from "./Paginas/TextoPalabras/TextoPalabras";
import Noticias from "./Paginas/Noticias/Noticias";
import Card from "./Paginas/Subscripciones/Card";
import "./Paginas/Subscripciones/App.css";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={URLS.PAGINA_PRINCIPAL}>
            <Principal/>
        </Route>
        <Route exact path={URLS.PAGINA_DETECTOR_DE_ROSTROS}>
          <DetectorRostro/>
        </Route>

        <Route exact path={URLS.PAGINA_PELICULAS}>
          <Peliculas/>
        </Route>

        <Route exact path={URLS.PAGINA_SUBSCRIPCION}>
           <Card/>
        </Route>

        <Route exact path={URLS.PAGINA_TEXTO_PALABRAS}>
          <TextoPalabras/>
        </Route>

        <Route exact path={URLS.PAGINA_NOTICIAS}>
          <Noticias/>
        </Route>

        <Redirect to={URLS.PAGINA_PRINCIPAL}/>
      </Switch>
    </Router>
  );
};

export default App;
