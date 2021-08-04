import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import Kraken from 'kraken';
import FormData from "form-data";
import FaceRecognition from "../../Componentes/FaceRecognition/FaceRecognition";
import {useState, useEffect} from 'react';
import HerramientaDetectarRostro from "../../Componentes/HerramientaDetectarRostro/HerramientaDetectarRostro";
import clases_css from './DetectorRostro.module.css';

const DetectorRostro = () => {
    let convertedImgWidth = window.innerWidth/2;

    const [faceInputField, setFaceInputField] = useState({
        value: ""
    });

    const [convertedUrl, setConvertedUrl] = useState({
        url: ""
    });

    const [detectedFaces, setDetectedFaces] = useState({
        faces: []
    });

    const [foundFaces, setFoundFaces] = useState({
        found: false
    });

    const [findFaces, setFindFaces] = useState({
        find: false
    });

    const onFaceInputChange = e => {
        setFaceInputField({
            value: e.target.value
        });

        setFindFaces({
            find: false
        });

        setFoundFaces({
            found: false
        });

        setDetectedFaces({
            faces: []
        });

        setConvertedUrl({
            url: ""
        })
    };

    const resizeImage = (imgUrl, imgWidth) => {
        let converted_url = "";
        const kraken = new Kraken({
            api_key: "7a20d22ae0fc8b6315eeff138002a99f",
            api_secret: "08129aaf86f7afc4181618e596167e75a0839788",
        });

        const krakenData = {
            url: imgUrl,
            wait: true,
            resize: {
                width: imgWidth,
                strategy: "landscape"
            }
        };

        kraken.url(krakenData, (err, resp) => {
            if (typeof(resp) !== "undefined") {
                converted_url = resp.kraked_url
            }
        });

        setTimeout(() => {
            setConvertedUrl({
                url: converted_url
            })
        }, 4000)
    };

    const detectFaces = () => {
        resizeImage(faceInputField.value, convertedImgWidth);
        setFindFaces({
            find: true
        })
    };

    const onFaceKeyPress = e => {
        if (e.which === 13) {
            detectFaces()
        }
    };

    useEffect(()=> {
        if (findFaces.find) {
            const faceFormData = new FormData();
            faceFormData.append("api_key", "M-vc3wXc1iAHDKyPURtUYA4ih7vq0Rbt");
            faceFormData.append("api_secret", "57EkRLUPeopzqHNFOk4_Z6ub_vxpySED");
            faceFormData.append("image_url", convertedUrl.url);
            const formDataConfig = {
                method: "POST",
                body: faceFormData,
                redirect: "follow"
            };
            fetch("https://api-us.faceplusplus.com/facepp/v3/detect", formDataConfig)
                .then(resp => resp.text())
                .then(data => {
                    const faces = JSON.parse(data).faces.map((data_Face) => {
                        const {face_rectangle} = data_Face;
                        return face_rectangle
                    });

                    if (faces.length === 0) {
                        alert("Puede ser que su pantalla es muy chica de acuerdo a la imagen seleccionada, por lo cual no puede detectar caras!")
                    }

                    setDetectedFaces({
                        faces: faces
                    });

                    setFoundFaces({
                        found: true
                    });

                    setFindFaces({
                        find: false
                    });

                })
                .catch(() => {
                    alert("Algo ocurrio! Vuelve a intentar con otro imagen url")
                })
        }
        // eslint-disable-next-line
    }, [convertedUrl]);

    const api_tool = {
        btn_text: "Detectar",
        api_callback: detectFaces,
        onInputChange: onFaceInputChange,
        onKeyPressAction: onFaceKeyPress,
        inputPlaceHolder: "Url del imagen"
    };

    return (
        <div className={clases_css.paginaDetector}>
            <HeaderUniversal/>
            <div className={clases_css.paginaDetector__inferior}>
                <HerramientaDetectarRostro btn_text={api_tool.btn_text}
                                           api_callback={api_tool.api_callback}
                                           onInputChange={api_tool.onInputChange}
                                           onKeyPress={api_tool.onKeyPressAction}
                                           inputPlaceHolder={api_tool.inputPlaceHolder}/>
                {
                    foundFaces.found ?
                        <FaceRecognition imageUrl={convertedUrl.url} boxes={detectedFaces.faces}/> :
                        null
                }
            </div>
        </div>
    );
};

export default DetectorRostro;