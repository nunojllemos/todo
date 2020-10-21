/* import dependencies */
import React, { useEffect } from "react";
/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Task = ({
	tasks,
	tab,
	id,
	body,
	status,
	handleCompletion,
	handleDelete,
}) => {
	/* handles click on check button */
	const handleCheck = (e) => {
		e.preventDefault();
		if (e.target.nodeName === "path") {
			// select the h2 from list and put a line through the text adding a class
			e.target.parentElement.parentElement.parentElement.children[1].children[0].classList.toggle(
				"done"
			);
			// changes vector color to green
			e.target.classList.toggle("checked");
			// toggle class complete to the ul
			e.target.parentElement.parentElement.parentElement.classList.toggle(
				"complete"
			);
			if (status) {
				// handle the task completion changing to false
				handleCompletion(id, false);
			} else {
				// handle the task completion changing to true
				handleCompletion(id, true);
			}
		}
	};

	/* handles first load of page */
	useEffect(() => {
		const tasks = document.querySelector("main").children;

		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id == id) {
				if (status) {
					tasks[i].classList.add("complete");
					tasks[i].children[1].children[0].classList.add("done");
					tasks[i].children[0].children[0].children[0].classList.add("checked");
				}
			}
		}
	}, [tasks]);

	/* handles every load after tab changes */
	useEffect(() => {
		const tasks = document.querySelector("main").children;

		for (let i = 0; i < tasks.length; i++) {
			// if tab selected is complete
			if (tab.toLowerCase() === "complete") {
				if (!tasks[i].className.includes("complete")) {
					tasks[i].classList.add("hide");
					tasks[i].classList.remove("task");
				} else {
					tasks[i].classList.remove("hide");
					tasks[i].classList.add("task");
				}
			}
			// if tab selected is incomplete
			else if (tab.toLowerCase() === "incomplete") {
				if (tasks[i].className.includes("complete")) {
					tasks[i].classList.add("hide");
					tasks[i].classList.remove("task");
				} else {
					tasks[i].classList.remove("hide");
					tasks[i].classList.add("task");
				}
			}
			// if tab selected is all
			else {
				tasks[i].classList.remove("hide");
				tasks[i].classList.add("task");
			}
		}
	}, [tab]);

	/* handle click on delete button */
	const handleDeleted = (e) => {
		e.preventDefault();
		handleDelete(id);
	};

	let content = (
		<ul className='task' id={id}>
			<li className='check'>
				<FontAwesomeIcon onClick={handleCheck} icon={faCheck} id='check' />
			</li>
			<li>
				<h2>{body}</h2>
			</li>
			<li>
				<FontAwesomeIcon onClick={handleDeleted} icon={faTrash} id='trash' />
			</li>
		</ul>
	);

	return content;
};

export default Task;
