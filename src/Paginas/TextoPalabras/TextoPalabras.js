import HeaderUniversal from "../../Contenedores/HeaderUniversal/HeaderUniversal";
import clases_css from './TextoPalabras.module.css';
import {
    Select,
    TextField,
    Button,
    MenuItem,
    InputLabel,
    FormControl
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';

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
    }
}));

const TextoPalabras = () => {
    const [textSpeechInputField, setTextSpeechInputField] = useState({
        value: ""
    });

    const [getSpeechConversion, setSpeechConversion] = useState({
        convert: false
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


    const clase_css = css();
    return (
        <div>
            <HeaderUniversal/>
            <div className={clases_css.textoPalabras__inferior__form_contenedor}>
                <FormControl required className={clase_css.formControlSelectIdioma}>
                    <InputLabel>Seleccione Idioma</InputLabel>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={clase_css.formControlTextSpeech} required>
                    <TextField
                        label="Texto"
                        variant="outlined"
                        multiline
                        onChange={onTextSpeechInputChange}
                        onKeyPress={onTextSpeechKeyPress}
                        maxRows={20}
                    />
                </FormControl>

                <Button variant="contained" disableElevation
                        size={'medium'} onClick={convertTextSpeech}
                        className={clase_css.btn}>
                    Convertir
                </Button>

                {
                    getSpeechConversion.convert ?
                        <video src={`http://api.voicerss.org/?key=e4ddc02d04fa4203ba1a492a9d55e62e&hl=es-es&f=48khz_16bit_stereo&src=${textSpeechInputField.value}`}
                               autoPlay={true} onEnded={() => {
                            setSpeechConversion({
                                convert: false
                            });
                        }} className={'absolute'}/> :
                        null
                }
            </div>
        </div>
    );
};

export default TextoPalabras;