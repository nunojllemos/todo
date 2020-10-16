/* import dependencies */
import React from "react";
/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
/* import components */
import Nav from "./components/Nav";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";

const App = () => {
	let content = (
		<div className='view'>
			<div className='container'>
				<div className='wrapper'>
					<Nav />
					<Form />
					{/* TaskList */}
				</div>
			</div>
			<Footer />
		</div>
	);

	return content;
};

export default App;

{
	/* <FontAwesomeIcon icon={faCheck} /> */
}
{
	/* <FontAwesomeIcon icon={faTrash} /> */
}
