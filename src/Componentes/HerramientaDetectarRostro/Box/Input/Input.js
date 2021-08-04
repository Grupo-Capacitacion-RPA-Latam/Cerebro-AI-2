import TextField from '@material-ui/core/TextField';
import './Input.css'

const Input = ({handleInputChange, onKeyPress, inputPlaceHolder}) => {

    return (
        <TextField label={inputPlaceHolder}
                   onChange={handleInputChange} onKeyPress={onKeyPress}/>
    );
};

export default Input