import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandWave } from "@fortawesome/pro-light-svg-icons/faHandWave";

export default function Contact() {
    return (
        <div className={"py-3"}>
            <FontAwesomeIcon icon={faHandWave} className={"mr-2"} />
            01254 123456
        </div>
    );
}
