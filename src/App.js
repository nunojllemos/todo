/* import dependencies */
import React, { useState } from "react";
/* import components */
import Nav from "./components/Nav";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";
/* import styles */
import "./styles/style.css";

const App = () => {
	const [tasks, setTasks] = useState([
		{ body: "Walk dog @ 10:30", isComplete: false },
		{ body: "Lunch with boss @ 12:00", isComplete: false },
		{ body: "Feed the cat", isComplete: true },
		{ body: "Finish to read my book", isComplete: false },
	]);

	/* function to handle form data */
	const handleForm = (body, isComplete) => {
		setTasks([...tasks, { body, isComplete }]);
	};

	let content = (
		<div className='view'>
			<div className='container'>
				<div className='wrapper'>
					<Nav />
					<Form handleForm={handleForm} />
					<TasksList tasks={tasks} />
				</div>
			</div>
			<Footer />
		</div>
	);

	return content;
};

export default App;
