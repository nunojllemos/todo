/* import dependencies */
import React from "react";
/* import components */
import Task from "./Task";

const TasksList = ({ tasks }) => {
	let content = tasks.map((task) => (
		<Task body={task.body} status={task.isComplete} />
	));

	return <main>{content}</main>;
};

export default TasksList;
