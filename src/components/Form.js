import React from "react";

const Form = ({ handleForm }) => {
	let content = (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleForm(e.target.children[0].value, false);
			}}>
			<input type='text' placeholder='Enter new task...' />
			<button>+</button>
		</form>
	);

	return content;
};

export default Form;
