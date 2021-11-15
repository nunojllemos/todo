import React from 'react'
import Task from './Task'

const TasksList = ({ tab, tasks, handleCompletion, handleDelete }) => {
	const completedTasks = tasks.filter(task => task.isComplete)
	const uncompletedTasks = tasks.filter(task => !task.isComplete)
	let content

	if (tab === 'complete') {
		content = completedTasks.map(task => <Task key={task.id} tab={tab} handleCompletion={handleCompletion} handleDelete={handleDelete} body={task.body} isComplete={task.isComplete} id={task.id} tasks={tasks} />)
	}
	if (tab === 'incomplete') {
		content = uncompletedTasks.map(task => <Task key={task.id} tab={tab} handleCompletion={handleCompletion} handleDelete={handleDelete} body={task.body} isComplete={task.isComplete} id={task.id} tasks={tasks} />)
	}
	if (tab === 'all') {
		content = tasks.map(task => <Task key={task.id} tab={tab} handleCompletion={handleCompletion} handleDelete={handleDelete} body={task.body} isComplete={task.isComplete} id={task.id} tasks={tasks} />)
	}

	return content
}

export default TasksList
