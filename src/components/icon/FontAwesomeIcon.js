import "./FontAwesomeIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAIcon({ name = "" }) {
    return (
        <div className="icon-container">
            <FontAwesomeIcon id="icon" icon={name} />
        </div>
    )
}