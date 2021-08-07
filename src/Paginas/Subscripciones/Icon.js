import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


function Icon() {
    return (
        <a className = "Icon" style={{ fontSize: "1em", color: 'green' }}>
        <FontAwesomeIcon icon={faCheck}/>
    </a>
    )
}

export default Icon
