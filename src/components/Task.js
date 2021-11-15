import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ({ id, body, isComplete, handleCompletion, handleDelete }) => {
	const taskTitle = useRef()
	const checkbox = useRef()

	/* handles click on check button */
	const handleCheck = () => {
		taskTitle.current.classList.toggle('done')
		checkbox.current.classList.toggle('checked')
		checkbox.current.classList.toggle('complete')

		if (isComplete) {
			// handle the task completion changing to false
			handleCompletion(id, false)
		} else {
			// handle the task completion changing to true
			handleCompletion(id, true)
		}
	}

	const handleDeleted = () => {
		handleDelete(id)
	}

	let content = (
		<ul className={`task ${isComplete ? 'checked' : ''}`} ref={checkbox} id={id}>
			<li className="check" onClick={handleCheck}>
				<FontAwesomeIcon icon={faCheck} id="check" />
			</li>
			<li>
				<h2 ref={taskTitle}>{body}</h2>
			</li>
			<li className="trash-container">
				<FontAwesomeIcon onClick={handleDeleted} icon={faTrash} id="trash" />
			</li>
		</ul>
	)

	return content
}

export default Task
