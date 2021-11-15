import React, { useState, useEffect } from 'react'
import Alert from './components/Alert'
import Nav from './components/Nav'
import Form from './components/Form'
import TasksList from './components/TasksList'
import Footer from './components/Footer'
import { setItemToLocalStorage, getItemFromLocalStorage } from './utils/localStorage'
import './styles/style.css'

const App = () => {
	const [tasks, setTasks] = useState([])
	const [alert, setAlert] = useState([{ type: '', message: '' }])
	const [key, setKey] = useState()
	const [tab, setTab] = useState('all')

	useEffect(() => {
		if (getItemFromLocalStorage('tasks') && getItemFromLocalStorage('tasks').length > 0) {
			const localStorage = JSON.parse(window.localStorage.getItem('tasks'))

			setTasks(localStorage)
			setKey(localStorage.length)
		}
	}, [])

	useEffect(() => {
		setItemToLocalStorage(tasks)
	}, [tasks])

	const handleForm = (body, isComplete) => {
		if (body !== '') {
			setTasks([...tasks, { body, isComplete, id: key }])
			setKey(key + 1)
			setAlert({
				type: 'success',
				message: 'Task added with success!',
			})
			clearAlert()
		} else {
			setAlert({
				type: 'alert',
				message: "Field can't be empty!",
			})
			clearAlert()
		}
	}

	const handleCompletion = (id, status) => {
		setTasks(
			tasks.map(task => {
				return task.id === id ? { ...task, isComplete: status } : task
			})
		)

		if (status) {
			setAlert({
				type: 'success',
				message: 'Task completed!',
			})
		} else {
			setAlert({
				type: 'alert',
				message: 'Task uncompleted!',
			})
		}
		clearAlert()
	}

	const handleDelete = id => {
		let newTasks = tasks.filter(task => {
			return task.id !== id
		})

		if (window.confirm('Delete task?')) {
			setTasks(newTasks)
			setAlert({
				type: 'delete',
				message: 'Task was deleted!',
			})
			clearAlert()
		}
	}

	const handleTab = tab => {
		console.log(tab)
		console.log('clicked')
		setTab(tab)
	}

	const clearAlert = () => {
		setTimeout(() => {
			setAlert({
				type: '',
				message: '',
			})
		}, 2000)
	}

	let content = (
		<div className="view">
			<Alert alert={alert} />
			<div className="container">
				<div className="wrapper">
					<Nav tab={tab} handleTab={handleTab} tasks={tasks} />
					<Form handleForm={handleForm} />
					<main>{tasks.length > 0 ? <TasksList tab={tab} handleDelete={handleDelete} handleCompletion={handleCompletion} tasks={tasks} /> : 'Add a taks 🚀'}</main>
				</div>
			</div>
			<Footer />
		</div>
	)

	return content
}

export default App
