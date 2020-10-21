/* import dependencies */
import React from "react";
/* import icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alert: { message, type } }) => {
	let fontIcon;

	/* defines the font awesome icon depending on the type of alert */
	if (type !== undefined) {
		if (type === "alert") {
			fontIcon = <FontAwesomeIcon icon={faExclamationCircle} id='alert' />;
		} else if (type === "success") {
			fontIcon = <FontAwesomeIcon icon={faCheckCircle} id='success' />;
		} else if (type === "delete") {
			fontIcon = <FontAwesomeIcon icon={faMinusCircle} id='delete' />;
		}
	}

	let content = (
		<div className={type}>
			<span id='icon'>{fontIcon}</span>
			<p>{message}</p>
		</div>
	);

	return content;
};

export default Alert;
