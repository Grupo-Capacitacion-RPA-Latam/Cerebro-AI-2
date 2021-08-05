import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import clases_css from './TextoPalabras.module.css';
import {
    Select,
    TextField,
    Button,
    MenuItem,
    InputLabel,
    FormControl,
    ListSubheader
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState, Fragment} from 'react';
import opciones from "../../idiomas";

const css = makeStyles(() => ({
    formControlTextSpeech: {
        width: '40%',
        height: '100%',
        minWidth: '200px',
        marginTop: '30px',
        marginBottom: '50px',
    },
    formControlSelectIdioma: {
        width: '30%',
        minWidth: '200px',
        marginTop: '30px',
        marginBottom: '50px',
    },

    btn: {
        width: 'fit-content',
        marginTop: '30px',
        marginBottom: '50px',
    },

    selectSubCategoria: {
        top: 'auto'
    },

    textField: {
        '& .MuiOutlinedInput-multiline': {
            height: '150px'
        },
        '& .MuiInputBase-root': {
            alignItems: 'flex-start'
        }
    }
}));

const TextoPalabras = () => {
    const [textSpeechInputField, setTextSpeechInputField] = useState({
        value: ""
    });

    const [getSpeechConversion, setSpeechConversion] = useState({
        convert: false
    });

    const [seleccion, setSeleccion] = useState({
        codeLang: "",
        voz: ""
    });

    const onTextSpeechInputChange = e => {
        setTextSpeechInputField({
            value: e.target.value
        });
    };

    const convertTextSpeech = () => {
        setSpeechConversion({
            convert: true
        });
    };

    const onTextSpeechKeyPress = e => {
        if (e.which === 13) {
            convertTextSpeech()
        }
    };

    const onSelection = (e) => {
        const [lang, voz] = e.target.value.split(" - ");
        const codeLang = opciones[lang][0];

        setSeleccion({
            codeLang,
            voz,
        });
    };


    const clase_css = css();
    return (
        <Fragment>
            <HeaderUniversal/>
            <div className={clases_css.textoPalabras__inferior__form_contenedor}>
                <FormControl required className={clase_css.formControlSelectIdioma}>
                    <InputLabel>Seleccione Idioma</InputLabel>
                    <Select defaultValue="" onChange={onSelection}>
                        {
                            Object.entries(opciones).map(entry => {
                                const lang = entry[0];
                                const voces = entry[1][1];
                                return (
                                    [
                                        <ListSubheader className={clase_css.selectSubCategoria}>
                                            <strong>{lang}</strong>
                                        </ListSubheader>,
                                        voces.map(voz => {
                                            const strippedGender = voz.split(' ')[0];
                                            return <MenuItem value={`${lang} - ${strippedGender}`}>
                                                {voz}
                                            </MenuItem>
                                        }),
                                    ]
                                )
                            })
                        }
                    </Select>
                </FormControl>

                <FormControl className={clase_css.formControlTextSpeech} required>
                    <TextField
                        label="Texto"
                        variant="outlined"
                        multiline
                        onChange={onTextSpeechInputChange}
                        onKeyPress={onTextSpeechKeyPress}
                        maxRows={10}
                        className={clase_css.textField}
                    />
                </FormControl>

                <Button variant="contained" disableElevation
                        size={'medium'} onClick={convertTextSpeech}
                        className={clase_css.btn}>
                    Convertir
                </Button>

                {
                    getSpeechConversion.convert ?
                        <video src={`http://api.voicerss.org/?key=e4ddc02d04fa4203ba1a492a9d55e62e&hl=${seleccion.codeLang}&f=48khz_16bit_stereo&v=${seleccion.voz}&src=${textSpeechInputField.value}`}
                               autoPlay={true} onEnded={() => {
                            setSpeechConversion({
                                convert: false
                            });
                        }} className={'absolute'}/> :
                        null
                }
            </div>
        </Fragment>
    );
};

export default TextoPalabras;