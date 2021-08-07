import clases_css from './Register.module.css';
import login from "./login.svg";
import React, {useState } from "react";
import Swal from "sweetalert2";

function Register({handleLogged}){
    const [dataRegister, setDataRegister] = useState({
        email: "",
        pass: "",
        usuario: "",
        apel: "",
        apelmat: "",
        tele: "",
        typeDocReg: "",
        dni: "",
      });
    
      const handleInput = (e) => {
        const { value, name } = e.target;
        setDataRegister({
          ...dataRegister,
          [name]: value,
        });
        console.log("capturando", dataRegister)
      };

      const handleSubmit = (e) => {
        e.preventDefault(); 
        const {
        email,
        pass,
        usuario,
        apel,
        apelmat,
        tele,
        typeDocReg,
        dni,
        } = dataRegister;
    
        window.Identity.signUp(
          {
            userName: email,
            credentials: pass,
            password: "password",
          },
          {
            firstName: usuario,
            lastName: apel,
            secondLastName: apelmat,
            displayName: email,
            email: email,
            contacts: [
              {
                phone: tele,
                type: "HOME",
              },
            ],
            attributes: [
                {
                    name: "typeDocument",
                    value: typeDocReg,
                    type: "String",
                  },
              {
                name: "document",
                value: dni,
                type: "String",
              },
            ],
          },
          { doLogin: true },
    
          { rememberMe: true }
        )
          .then((res) => {
            console.log("registro exitoso", res);
            Swal.fire("Usuario  Registrado");
            setTimeout(() => {
              handleLogged();
            }, 2500);
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error al registrar usuario");
            setTimeout(() => {
    
              setTimeout(() => {
                
              }, 2500);
            }, 2500);
          });
      };

      
    return (
        <>
            <div className={clases_css.container} >
                <form onSubmit={handleSubmit} >
                <div className={clases_css.image}>
                        <img src={login} />
                    </div>
                <div className={clases_css.content}>
                <div className={clases_css.header}>Registro</div>
              
                    <div className={clases_css.form} >
                        <div className={clases_css.group}>
                            <label htmlFor="usuario">Nombre</label>
                            <input className={clases_css.input} type="text" pattern="[a-zA-záéíóúÁÉÍÓÚ ]{2,40}" name="usuario" placeholder="Ingrese su Nombre" required onChange={handleInput}></input>
                        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="contraseña">Contraseña</label>
                            <input className={clases_css.input} type="password" minLength="8"
                              maxLength="15" name="pass" placeholder="Ingrese Contraseña" required onChange={handleInput}></input>
                        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="email">Email</label>
                            <input className={clases_css.input} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" type="text" name="email" placeholder="Ingrese Email" required onChange={handleInput}></input>
                        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="ApellidoP">Apellido Paterno</label>
                            <input className={clases_css.input} pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}" type="text" name="apel" placeholder="Ingrese Apellido Paterno" required onChange={handleInput}></input>
                        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="ApellidoM">Apellido Materno</label>
                            <input className={clases_css.input} type="text" pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}" name="apelmat" placeholder="Ingrese Apellido Materno" required onChange={handleInput}></input>
                        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="Telefono">Telefono/Celular</label>
                            <input className={clases_css.input} type="phone" pattern="[0-9]{7,9}" maxLength="9" minLength="7" name="tele" placeholder="Ingrese Telefono" required onChange={handleInput}></input>
                        </div>
                        
        <div className={clases_css.group}>
        <label htmlFor="Tipo">Tipo</label>
          <select
            name="typeDocReg"
            onChange={handleInput}
            className="form-select"
            required
          >
            <option value="">[Seleccione]</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>
        </div>
                        <div className={clases_css.group}>
                            <label htmlFor="Dni">Dni</label>
                            <input className={clases_css.input} pattern="[0-9]{8}" minLength="8"
                            maxLength="8" type="text" name="dni" placeholder="Ingrese Dni" required onChange={handleInput}></input>
                        </div>
                    </div>
                </div>
                <div className={clases_css.footer}>
                    <button type="submit" className={clases_css.button}>Registrar</button>
                </div>
                <div className="form-group text-center">
                <p>
                  Regresa{" "}
                  <a id="showRegister" href="/#" >
                    aquí!
                  </a>
                </p>
              </div>
                </form>
            </div>
        </>
    );
 } 



export default Register;