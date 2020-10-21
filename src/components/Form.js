import React from "react";

const Form = ({ handleForm }) => {
	/* clear form after submit */
	const clearForm = (e) => {
		e.target.children[0].value = "";
	};

	let content = (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleForm(e.target.children[0].value, false);
				clearForm(e);
			}}>
			<input type='text' placeholder='Enter new task...' />
			<button>+</button>
		</form>
	);

	return content;
};

export default Form;
