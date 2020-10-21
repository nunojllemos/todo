/* import dependencies */
import React from "react";
/* import components */
import Task from "./Task";

const TasksList = ({ tab, tasks, handleCompletion, handleDelete }) => {
	let content = tasks.map((task) => (
		<Task
			key={task.id}
			tab={tab}
			handleCompletion={handleCompletion}
			handleDelete={handleDelete}
			body={task.body}
			status={task.isComplete}
			id={task.id}
			tasks={tasks}
		/>
	));

	return <main>{content}</main>;
};

export default TasksList;
