/* import dependencies */
import React from "react";
/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ body, status }) => {
	let content = (
		<ul className='task'>
			<li>
				<FontAwesomeIcon icon={faCheck} id='check' />
			</li>
			<li>
				<h2>{body}</h2>
			</li>
			<li>
				<FontAwesomeIcon icon={faTrash} id='trash' />
			</li>
		</ul>
	);

	return content;
};

export default Task;
