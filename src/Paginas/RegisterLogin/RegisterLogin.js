import clases_css from './RegisterLogin.module.css';
import React from 'react';
import {useState} from 'react';
import login from "./login.svg";
import Swal from "sweetalert2";

const RegisterLogin = (props) => {
    const [dataLogin,setDataLogin] = useState(
        {
          usuario:"",
          pass:"",
        }
      );

      
      const handleInput = (event) =>{
        const {value,name} = event.target
    
        setDataLogin({
          ...dataLogin,
          [name]: value,
        });
        console.log("capturando", dataLogin)
      };
    
      const handleSubmit = (e) =>{
        e.preventDefault();
        const {usuario,pass} = dataLogin;
        window.Identity.login(usuario,pass,{rememberMe: true}).then((res) =>{
          Swal.fire("Bienvenido");
          setTimeout(() => {
           
            props.handleLogged();
          }, 2500);
        }).catch(err => {
          if (err.httpStatus === 401) {
            Swal.fire("Error al Ingresar");
            setTimeout(() => {
              setTimeout(() => {
                
              }, 2500);
            }, 2500);
          }
        });
      };

      
        
            return (
                <>
                <div className={clases_css.container} >
                  <form onSubmit={handleSubmit}>
                    <div className={clases_css.header}>Inicia Sesión</div>
                    <div className={clases_css.content}>
                    <div className={clases_css.image}>
                            <img src={login} />
                        </div>
                        <div className={clases_css.form} >
                            <div className={clases_css.group}>
                                <label htmlFor="usuario">Correo</label>
                                <input className={clases_css.input} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" type="email" name="usuario" placeholder="Ingrese su correo" required onChange={handleInput} ></input>
                            </div>
                            <div className={clases_css.group}>
                                <label htmlFor="contraseña">Contraseña</label>
                                <input className={clases_css.input} type="password" minLength="8"
                                maxLength="15" pattern="[A-Za-z0-9@_. ]{8,15}" name="pass" placeholder="Ingrese Contraseña" required onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                    <div className={clases_css.footer}>
                        <button className={clases_css.button} type="submit" >Ingresar</button>
                    </div>
                    <p>
                  Regresa{" "}
                  <a id="showRegister" href="/#" >
                   Aqui!
                  </a>
                </p>
                   </form> 
                </div>
              </>
            );
        
};

export default RegisterLogin;