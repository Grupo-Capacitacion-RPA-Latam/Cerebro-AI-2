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
import RegisterLogin from "./Paginas/RegisterLogin/RegisterLogin";
import Register from "./Paginas/Register/Register";
import Subscripciones from "./Paginas/Subscripciones/Subscripciones";
import TextoPalabras from "./Paginas/TextoPalabras/TextoPalabras";
import Noticias from "./Paginas/Noticias/Noticias";
import TextoPalabrasTraducidas from "./Paginas/TextoPalabrasTraducidas/TextoPalabrasTraducidas";
import React,{useState,useEffect} from "react";


function App(){
const UrlBase="https://api-sandbox.elcomercio.pe"
  const urlSDK = "https://arc-subs-sdk.s3.amazonaws.com/sandbox/sdk-identity.min.js"

  const [isLogged,setIsLogged] = useState(false)
  const [isShowRegister, setShowRegister] = useState(false);

  useEffect (() =>{

    const sdkIdentity = document.createElement("script")
    sdkIdentity.src = urlSDK
    sdkIdentity.onload = function(){
    window.Identity.apiOrigin = UrlBase;
    window.Identity.isLoggedIn().then(res => {
      if(res === true){
        setIsLogged(true)
      }else{
        setIsLogged(false)
      }
    }).catch(err =>{
      console.log("no esta logueado", err);
      setIsLogged(false);
    });
  };
  document.body.appendChild(sdkIdentity);
  },[]);

  const handleLogged = () => {
    window.Identity.isLoggedIn()
      .then((res) => {
        if (res === true) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      })
      .catch((err) => {
        console.log("Error al logearse", err);
        setIsLogged(false);
      });
  };



  return (
    <Router>
      <Switch>
        <Route exact path={URLS.PAGINA_PRINCIPAL}>
            <Principal handleLogged={handleLogged}/>
        </Route>
        <Route exact path={URLS.PAGINA_DETECTOR_DE_ROSTROS}>
          <DetectorRostro/>
        </Route>

        <Route exact path={URLS.PAGINA_PELICULAS}>
          <Peliculas/>
        </Route>

        <Route exact path={URLS.PAGINA_SESION}>
          <RegisterLogin handleLogged={handleLogged}/>
        </Route>

        <Route exact path={URLS.PAGINA_SUBSCRIPCION}>
          <Subscripciones/>
        </Route>

        <Route exact path={URLS.PAGINA_TEXTO_PALABRAS}>
          <TextoPalabras/>
        </Route>

        <Route exact path={URLS.PAGINA_NOTICIAS}>
          <Noticias/>
        </Route>

        <Route exact path={URLS.PAGINA_TEXTO_PALABRAS_TRADUCIDAS}>
          <TextoPalabrasTraducidas/>
        </Route>

        <Route exact path={URLS.PAGINA_REGISTRAR}>
          <Register handleLogged={handleLogged}/>
        </Route>

        <Redirect to={URLS.PAGINA_PRINCIPAL}/>
      </Switch>
    </Router>
  );
};

export default App;
