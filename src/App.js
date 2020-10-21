/* import dependencies */
import React, { useState, useEffect } from "react";
/* import components */
import Alert from "./components/Alert";
import Nav from "./components/Nav";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";
/* import styles */
import "./styles/style.css";

const App = () => {
	/* state */
	// tasks state
	const [tasks, setTasks] = useState([]);
	// alert state
	const [alert, setAlert] = useState([
		{
			type: "",
			message: "",
		},
	]);
	// id state
	const [key, setKey] = useState();
	// tab state
	const [tab, setTab] = useState("all");

	/* handles first load of page based on local storage */
	useEffect(() => {
		if (JSON.parse(window.localStorage.getItem("tasks"))) {
			if (JSON.parse(window.localStorage.getItem("tasks").length > 0)) {
				const localStorage = JSON.parse(window.localStorage.getItem("tasks"));

				setTasks(localStorage);
				setKey(localStorage.length);
			} else {
				setTasks([]);
				setKey(0);
			}
		} else {
			setTasks([]);
			setKey(0);
		}
	}, []);

	/* handles localStorage set items */
	useEffect(() => {
		window.localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	/* function to handle form data */
	const handleForm = (body, isComplete) => {
		if (body !== "") {
			setTasks([
				...tasks,
				{
					body,
					isComplete,
					id: key,
				},
			]);
			setKey(key + 1);
			setAlert({
				type: "success",
				message: "Task added with success!",
			});
			clearAlert();
		} else {
			setAlert({
				type: "alert",
				message: "Field can't be empty!",
			});
			clearAlert();
		}
	};

	/* handle completion of task */
	const handleCompletion = (id, status) => {
		setTasks(
			tasks.map((task) => {
				return task.id === id ? { ...task, isComplete: status } : task;
			})
		);

		// handle alert message
		if (status) {
			// if task completed
			setAlert({
				type: "success",
				message: "Task completed!",
			});
		} else {
			// if task uncompleted
			setAlert({
				type: "alert",
				message: "Task uncompleted!",
			});
		}
		clearAlert();
	};

	/* handle delete task */
	const handleDelete = (id) => {
		let newTasks = tasks.filter((task) => {
			return task.id !== id;
		});

		// let user confirm the delete option
		if (window.confirm("Delete task?")) {
			setTasks(newTasks);
			setAlert({
				type: "delete",
				message: "Task was deleted!",
			});
			clearAlert();
		}
	};

	/* handle tab selected */
	const handleTab = (tab) => {
		setTab(tab);
	};

	/* clear the alert state after 1.5 seconds */
	const clearAlert = () => {
		setTimeout(() => {
			setAlert({
				type: "",
				message: "",
			});
		}, 1000);
	};

	/* content */
	let content = (
		<div className='view'>
			<Alert alert={alert} />
			<div className='container'>
				<div className='wrapper'>
					<Nav tab={tab} handleTab={handleTab} tasks={tasks} />
					<Form handleForm={handleForm} />
					<TasksList
						tab={tab}
						handleDelete={handleDelete}
						handleCompletion={handleCompletion}
						tasks={tasks}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);

	return content;
};

export default App;
